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
}

const itemsPerPage = 16

const LettersContainer = () => {
  const [letters, setLetters] = useState<Letter[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchField, setSearchField] = useState<'all' | 'title' | 'content'>('all')

  useEffect(() => {
    fetch('/api/heavenLetters')
      .then((res) => res.json())
      .then((data) => {
        setLetters(data.content)
      })
      .catch((err) => {
        console.error('호출 에러:', err)
      })
  }, [])

  // 🔍 검색어 기반 필터링
  const filteredLetters = letters.filter((letter) => {
    const query = searchQuery.toLowerCase()
    const title = letter.letterTitle.toLowerCase()
    const content = '' // 만약 내용 필드가 letter에 없다면, 이 부분 나중에 추가

    switch (searchField) {
      case 'title':
        return title.includes(query)
      case 'content':
        return content.includes(query) // letter.letterContent 등 실제 필드명으로 변경
      case 'all':
      default:
        return title.includes(query) || content.includes(query)
    }
  })

  // 📄 페이지 개수 계산
  const totalPages = Math.ceil(filteredLetters.length / itemsPerPage)

  // 📄 현재 페이지에 해당하는 항목만 잘라내기
  const paginatedLetters = filteredLetters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

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
      <ContainerHeader items={filteredLetters} handleSearch={handleSearchChange} />
      <ContainerContent items={paginatedLetters} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </article>
  )
}

export default LettersContainer
