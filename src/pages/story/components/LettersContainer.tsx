import { useEffect, useState } from 'react'
import ContainerHeader from '@/pages/story/components/ContainerHeader'
import ContainerContent from '@/pages/story/components/ContainerContent'
import Pagination from '@/shared/components/Pagination'
const dummyStories = [
  {
    donorName: '김하늘',
    storySeq: 1,
    letterTitle: '당신을 기억합니다',
    letterWriter: '이수민',
    readCount: 123,
    writeTime: '2025-06-01T09:00:00Z',
    commentCount: 2,
  },
  {
    donorName: '박정우',
    storySeq: 2,
    letterTitle: '마음속에 남은 이야기',
    letterWriter: '정지혜',
    readCount: 87,
    writeTime: '2025-06-02T11:15:00Z',
    commentCount: 1,
  },
  {
    donorName: '최민수',
    storySeq: 3,
    letterTitle: '언제나 그립습니다',
    letterWriter: '윤하나',
    readCount: 154,
    writeTime: '2025-06-03T13:45:00Z',
    commentCount: 4,
  },
  {
    donorName: '이영희',
    storySeq: 4,
    letterTitle: '그날의 미소',
    letterWriter: '홍길동',
    readCount: 210,
    writeTime: '2025-06-04T08:30:00Z',
    commentCount: 5,
  },
  {
    donorName: '정태호',
    storySeq: 5,
    letterTitle: '다시 만날 날을 기다리며',
    letterWriter: '김하나',
    readCount: 76,
    writeTime: '2025-06-05T15:10:00Z',
    commentCount: 2,
  },
  {
    donorName: '오지현',
    storySeq: 6,
    letterTitle: '사랑으로 남은 기억',
    letterWriter: '박수연',
    readCount: 98,
    writeTime: '2025-06-06T17:20:00Z',
    commentCount: 3,
  },
  {
    donorName: '류지훈',
    storySeq: 7,
    letterTitle: '그대의 따뜻함을',
    letterWriter: '최현우',
    readCount: 62,
    writeTime: '2025-06-07T20:00:00Z',
    commentCount: 0,
  },
  {
    donorName: '서지민',
    storySeq: 8,
    letterTitle: '하늘의 별이 된 당신께',
    letterWriter: '이나래',
    readCount: 110,
    writeTime: '2025-06-08T14:40:00Z',
    commentCount: 4,
  },
  {
    donorName: '배성우',
    storySeq: 9,
    letterTitle: '당신의 손길을 기억해요',
    letterWriter: '문채은',
    readCount: 95,
    writeTime: '2025-06-09T09:50:00Z',
    commentCount: 2,
  },
  {
    donorName: '윤도영',
    storySeq: 10,
    letterTitle: '감사와 기도로',
    letterWriter: '강서윤',
    readCount: 140,
    writeTime: '2025-06-10T10:00:00Z',
    commentCount: 6,
  },
  {
    donorName: '장수진',
    storySeq: 11,
    letterTitle: '그리운 마음을 담아',
    letterWriter: '배지현',
    readCount: 85,
    writeTime: '2025-06-11T08:20:00Z',
    commentCount: 1,
  },
  {
    donorName: '노현우',
    storySeq: 12,
    letterTitle: '다정했던 그대',
    letterWriter: '한지우',
    readCount: 120,
    writeTime: '2025-06-12T13:35:00Z',
    commentCount: 3,
  },
  {
    donorName: '임지훈',
    storySeq: 13,
    letterTitle: '함께한 모든 시간들',
    letterWriter: '최다인',
    readCount: 73,
    writeTime: '2025-06-13T16:00:00Z',
    commentCount: 2,
  },
  {
    donorName: '신유정',
    storySeq: 14,
    letterTitle: '별이 된 그대',
    letterWriter: '김서준',
    readCount: 132,
    writeTime: '2025-06-14T18:30:00Z',
    commentCount: 5,
  },
  {
    donorName: '한지민',
    storySeq: 15,
    letterTitle: '그대의 이름으로',
    letterWriter: '박해인',
    readCount: 90,
    writeTime: '2025-06-15T12:00:00Z',
    commentCount: 1,
  },
  {
    donorName: '송영석',
    storySeq: 16,
    letterTitle: '따뜻했던 기억',
    letterWriter: '조예은',
    readCount: 64,
    writeTime: '2025-06-16T10:50:00Z',
    commentCount: 0,
  },
  {
    donorName: '백지호',
    storySeq: 17,
    letterTitle: '그리움으로 가득한 날',
    letterWriter: '이민호',
    readCount: 121,
    writeTime: '2025-06-17T14:10:00Z',
    commentCount: 4,
  },
  {
    donorName: '황지원',
    storySeq: 18,
    letterTitle: '아름다운 사람',
    letterWriter: '정가람',
    readCount: 77,
    writeTime: '2025-06-18T19:00:00Z',
    commentCount: 2,
  },
  {
    donorName: '고다현',
    storySeq: 19,
    letterTitle: '그대와 나눈 이야기',
    letterWriter: '김보라',
    readCount: 89,
    writeTime: '2025-06-19T11:40:00Z',
    commentCount: 1,
  },
  {
    donorName: '문정우',
    storySeq: 20,
    letterTitle: '하늘에서도 행복하길',
    letterWriter: '윤채영',
    readCount: 147,
    writeTime: '2025-06-20T09:30:00Z',
    commentCount: 6,
  },
]

export type Field = '전체' | '제목' | '내용'

interface Letter {
  donorName: string
  storySeq: number
  letterTitle: string
  letterWriter: string
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
        url = `/api/donationLetters/search?${params.toString()}`
      } else {
        url = `/api/donationLetters?${params.toString()}`
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
