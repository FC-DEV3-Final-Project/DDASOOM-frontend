import { useEffect, useState } from 'react'
import ContainerHeader from '@/pages/heaven_letter/components/ContainerHeader'
import ContainerContent from '@/pages/heaven_letter/components/ContainerContent'
import Pagination from '@/shared/components/Pagination'

const dummyLetters = [
  {
    donorName: '김하늘',
    letterSeq: 1,
    letterTitle: '사랑하는 아버지께',
    letterWriter: '이수민',
    readCount: 128,
    writeTime: '2025-06-24T09:30:00Z',
    commentCount: 3,
  },
  {
    donorName: '박정우',
    letterSeq: 2,
    letterTitle: '잊지 않을게요',
    letterWriter: '정지혜',
    readCount: 54,
    writeTime: '2025-06-22T14:15:00Z',
    commentCount: 1,
  },
  {
    donorName: '최민수',
    letterSeq: 3,
    letterTitle: '그리운 얼굴',
    letterWriter: '윤하나',
    readCount: 93,
    writeTime: '2025-06-20T18:45:00Z',
    commentCount: 5,
  },
  {
    donorName: '이영희',
    letterSeq: 4,
    letterTitle: '감사와 기도로',
    letterWriter: '홍길동',
    readCount: 201,
    writeTime: '2025-06-18T11:10:00Z',
    commentCount: 7,
  },
  {
    donorName: '정태호',
    letterSeq: 5,
    letterTitle: '다시 만날 그 날까지',
    letterWriter: '김하나',
    readCount: 76,
    writeTime: '2025-06-15T08:00:00Z',
    commentCount: 2,
  },
  {
    donorName: '오지현',
    letterSeq: 6,
    letterTitle: '늘 기억하겠습니다',
    letterWriter: '박수연',
    readCount: 45,
    writeTime: '2025-06-12T16:30:00Z',
    commentCount: 0,
  },
  {
    donorName: '류지훈',
    letterSeq: 7,
    letterTitle: '당신의 따뜻함을 기억하며',
    letterWriter: '최현우',
    readCount: 67,
    writeTime: '2025-06-10T20:00:00Z',
    commentCount: 4,
  },
  {
    donorName: '서지민',
    letterSeq: 8,
    letterTitle: '당신이 남긴 사랑',
    letterWriter: '이나래',
    readCount: 103,
    writeTime: '2025-06-08T13:45:00Z',
    commentCount: 6,
  },
  {
    donorName: '배성우',
    letterSeq: 9,
    letterTitle: '짧지만 영원한 인연',
    letterWriter: '문채은',
    readCount: 88,
    writeTime: '2025-06-06T09:00:00Z',
    commentCount: 2,
  },
  {
    donorName: '윤도영',
    letterSeq: 10,
    letterTitle: '하늘에서 평안하시길',
    letterWriter: '강서윤',
    readCount: 112,
    writeTime: '2025-06-03T17:20:00Z',
    commentCount: 5,
  },
  {
    donorName: '장수진',
    letterSeq: 11,
    letterTitle: '영원한 기억 속에',
    letterWriter: '배지현',
    readCount: 62,
    writeTime: '2025-06-01T10:15:00Z',
    commentCount: 1,
  },
  {
    donorName: '노현우',
    letterSeq: 12,
    letterTitle: '그대의 미소를 담으며',
    letterWriter: '한지우',
    readCount: 144,
    writeTime: '2025-05-30T08:00:00Z',
    commentCount: 6,
  },
  {
    donorName: '임지훈',
    letterSeq: 13,
    letterTitle: '그날을 기억하며',
    letterWriter: '최다인',
    readCount: 75,
    writeTime: '2025-05-27T15:30:00Z',
    commentCount: 3,
  },
  {
    donorName: '신유정',
    letterSeq: 14,
    letterTitle: '행복했던 순간들',
    letterWriter: '김서준',
    readCount: 99,
    writeTime: '2025-05-24T11:00:00Z',
    commentCount: 2,
  },
  {
    donorName: '한지민',
    letterSeq: 15,
    letterTitle: '잊지 못할 그 이름',
    letterWriter: '박해인',
    readCount: 134,
    writeTime: '2025-05-21T14:20:00Z',
    commentCount: 7,
  },
  {
    donorName: '송영석',
    letterSeq: 16,
    letterTitle: '아름다운 기억으로',
    letterWriter: '조예은',
    readCount: 56,
    writeTime: '2025-05-19T09:40:00Z',
    commentCount: 0,
  },
  {
    donorName: '백지호',
    letterSeq: 17,
    letterTitle: '그대와의 시간',
    letterWriter: '이민호',
    readCount: 122,
    writeTime: '2025-05-17T13:10:00Z',
    commentCount: 4,
  },
  {
    donorName: '황지원',
    letterSeq: 18,
    letterTitle: '끝나지 않은 이야기',
    letterWriter: '정가람',
    readCount: 68,
    writeTime: '2025-05-14T18:05:00Z',
    commentCount: 1,
  },
  {
    donorName: '고다현',
    letterSeq: 19,
    letterTitle: '별이 된 당신께',
    letterWriter: '김보라',
    readCount: 80,
    writeTime: '2025-05-12T07:25:00Z',
    commentCount: 3,
  },
  {
    donorName: '문정우',
    letterSeq: 20,
    letterTitle: '감사의 마음으로',
    letterWriter: '윤채영',
    readCount: 140,
    writeTime: '2025-05-10T12:00:00Z',
    commentCount: 6,
  },
]

export type Field = '전체' | '제목' | '내용'

interface Letter {
  donorName: string
  letterSeq: number
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
        url = `/api/heavenLetters/search?${params.toString()}`
      } else {
        url = `/api/heavenLetters?${params.toString()}`
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
      <ContainerHeader totalLetters={20} handleSearch={handleSearchChange} />
      <ContainerContent items={dummyLetters} />
      <Pagination totalPages={2} currentPage={1} onPageChange={handlePageChange} />
    </article>
  )
}

export default LettersContainer
