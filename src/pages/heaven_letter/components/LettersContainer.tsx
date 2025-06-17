import { useEffect, useState } from 'react'
import ContainerHeader from '@/pages/heaven_letter/components/ContainerHeader'
import ContainerContent from '@/pages/heaven_letter/components/ContainerContent'
import Pagination from '@/shared/components/Pagination'

interface Letter {
  donorName: string
  letterSeq: number
  letterTitle: string
  letterWriter: string
}

const LettersContainer = () => {
  const [letters, setLetters] = useState<Letter[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 16
  const totalPages = Math.ceil(letters.length / itemsPerPage)
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    fetch('/api/main')
      .then((res) => res.json())
      .then((data) => {
        setLetters(data.heavenLetterMainDtoList)
      })
      .catch((err) => {
        console.error('호출 에러:', err)
      })
  }, [])

  const paginatedLetters = letters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  return (
    <article className="flex flex-col gap-20">
      <ContainerHeader items={paginatedLetters} />
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
