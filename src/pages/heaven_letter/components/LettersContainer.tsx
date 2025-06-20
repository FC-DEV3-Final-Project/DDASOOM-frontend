import { useEffect, useState } from 'react'
import ContainerHeader from '@/pages/heaven_letter/components/ContainerHeader'
import ContainerContent from '@/pages/heaven_letter/components/ContainerContent'
import Pagination from '@/shared/components/Pagination'

interface Letter {
  donorName: string
  letterSeq: number
  letterTitle: string
  letterWriter: string
  readCount: number
  writeTime: string
  comments: {
    id: number
    writer: string
    contents: string
    writeTime: string
  }[]
}

const itemsPerPage = 16

const LettersContainer = () => {
  const [letters, setLetters] = useState<Letter[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchField, setSearchField] = useState<'all' | 'title' | 'content'>('all')
  const [totalLetters, setTotalLetters] = useState(0)

  useEffect(() => {
    const params = new URLSearchParams()
    params.append('page', String(currentPage - 1))
    params.append('size', String(itemsPerPage))
    if (searchQuery) params.append('query', searchQuery)
    if (searchField !== 'all') params.append('field', searchField)

    fetch(`/api/heavenLetters?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setLetters(data.content)
        setTotalLetters(data.totalElements)
        setTotalPages(data.totalPages)
      })
  }, [currentPage, searchQuery, searchField])

  // 🔍 검색어 기반 필터링
  const filteredLetters = letters.filter((letter) => {
    const query = searchQuery.toLowerCase()
    const title = letter.letterTitle.toLowerCase()
    const content = ''

    switch (searchField) {
      case 'title':
        return title.includes(query)
      case 'content':
        return content.includes(query)
      case 'all':
      default:
        return title.includes(query) || content.includes(query)
    }
  })

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleSearchChange = (query: string, field?: 'all' | 'title' | 'content') => {
    setSearchQuery(query)
    setSearchField(field ?? 'all')
    setCurrentPage(1)
  }

  return (
    <article className="flex flex-col gap-2 sm:gap-20">
      <ContainerHeader totalLetters={totalLetters} handleSearch={handleSearchChange} />
      <ContainerContent items={filteredLetters} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </article>
  )
}

export default LettersContainer
