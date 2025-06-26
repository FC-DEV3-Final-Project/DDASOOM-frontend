import { useEffect, useState } from 'react'
import ContainerHeader from '@/pages/story/components/ContainerHeader'
import ContainerContent from '@/pages/story/components/ContainerContent'
import Pagination from '@/shared/components/Pagination'

export type Field = '전체' | '제목' | '내용'

interface Letter {
  donorName: string
  storySeq: number
  storyTitle: string
  storyWriter: string
  readCount: number
  writeTime: string
  commentCount: number
}

const itemsPerPage = 16

const LettersContainer = () => {
  const [letters, setLetters] = useState<Letter[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchField, setSearchField] = useState<Field>('전체')
  const [totalLetters, setTotalLetters] = useState(0)

  useEffect(() => {
    const fetchLetters = async () => {
      const params = new URLSearchParams()
      params.append('page', String(currentPage - 1))
      params.append('size', String(itemsPerPage))

      let url = ''

      if (searchQuery.trim()) {
        const typeParam = searchField === '내용' ? '내용' : searchField
        params.append('type', typeParam)
        params.append('keyword', searchQuery)
        url = `http://koda2.elementsoft.biz:8081/donationLetters/search?${params.toString()}`
      } else {
        url = `http://koda2.elementsoft.biz:8081/donationLetters?${params.toString()}`
      }

      try {
        const res = await fetch(url)
        const data = await res.json()
        setLetters(data.content)
        setTotalLetters(data.totalElements)
        setTotalPages(data.totalPages)
      } catch (error) {
        console.error('편지 목록 불러오기 실패:', error)
      }
    }

    fetchLetters()
  }, [currentPage, searchQuery, searchField])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleSearchChange = (query: string, field?: Field) => {
    setSearchQuery(query)
    setSearchField(field ?? '전체')
    setCurrentPage(1)
  }

  return (
    <article className="flex flex-col gap-2 sm:gap-20">
      <ContainerHeader totalLetters={totalLetters} handleSearch={handleSearchChange} />
      <ContainerContent items={letters} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </article>
  )
}

export default LettersContainer
