import { useEffect, useState } from 'react'
import LetterCarousel from '@/pages/home/components/LetterCarousel'
import CarouselButton from '@/shared/components/CarouselButton'
const dummyletters: Letter[] = [
  {
    donorName: '김하늘',
    letterSeq: 1,
    letterTitle: '당신의 따뜻한 마음에 감사합니다',
    letterWriter: '이수민',
  },
  {
    donorName: '박정우',
    letterSeq: 2,
    letterTitle: '그대의 삶을 기억하며',
    letterWriter: '정지혜',
  },
  {
    donorName: '최민수',
    letterSeq: 3,
    letterTitle: '고마운 마음을 담아',
    letterWriter: '김민아',
  },
  {
    donorName: '윤서준',
    letterSeq: 4,
    letterTitle: '그대의 숭고한 선택에',
    letterWriter: '홍지수',
  },
  {
    donorName: '조하늘',
    letterSeq: 5,
    letterTitle: '생명을 나눈 당신께',
    letterWriter: '오세훈',
  },
  {
    donorName: '이소정',
    letterSeq: 6,
    letterTitle: '당신을 기억합니다',
    letterWriter: '배지원',
  },
  {
    donorName: '정민수',
    letterSeq: 7,
    letterTitle: '그대를 향한 감사의 글',
    letterWriter: '박채영',
  },
  {
    donorName: '한지호',
    letterSeq: 8,
    letterTitle: '희망을 전해주셔서 감사합니다',
    letterWriter: '서예진',
  },
  {
    donorName: '강유진',
    letterSeq: 9,
    letterTitle: '따뜻한 나눔, 깊은 감동',
    letterWriter: '이도윤',
  },
  {
    donorName: '백지훈',
    letterSeq: 10,
    letterTitle: '빛나는 이름을 기억하며',
    letterWriter: '김가은',
  },
]

interface Letter {
  donorName: string
  letterSeq: number
  letterTitle: string
  letterWriter: string
}

const HeavenLetter = () => {
  const cardCount = 10
  const [focusedIndex, setFocusedIndex] = useState(0)

  const nextFocus = () => {
    setFocusedIndex((prev) => (prev + 1) % cardCount)
  }
  const prevFocus = () => {
    setFocusedIndex((prev) => (prev - 1 + cardCount) % cardCount)
  }
  const onIndicatorClick = (index: number) => {
    setFocusedIndex(index)
  }
  const [letters, setLetters] = useState<Letter[]>([])

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

  return (
    <section className="pt-6 sm:pt-0">
      {/* 설명에 버튼이 들어가야 하기 때문에 SectionHeader 컴포넌트 미사용 */}
      <a className="mb-1 flex cursor-pointer items-center gap-3" href="/remembrance/letter">
        <h2 className="text-gray-95 inline font-bold sm:text-2xl">하늘나라 편지</h2>
        <img
          src="/public/icon/Arrow.svg"
          alt=""
          className="h-[14px] w-[14px] sm:h-[24px] sm:w-[24px]"
        />
      </a>
      <div className="flex justify-between">
        <p className="text-gray-60 mb-3 text-[13px] font-normal sm:mb-[28px] sm:text-[19px]">
          그리움과 사랑을 담아 소중한 이들을 기억하는 공간입니다.
        </p>
        <CarouselButton
          index={focusedIndex}
          onPrev={prevFocus}
          onNext={nextFocus}
          onIndicatorClick={onIndicatorClick}
          className="hidden sm:flex"
        />
      </div>

      <LetterCarousel
        className="hidden sm:flex"
        focusedIndex={focusedIndex}
        cardCount={cardCount}
        letters={dummyletters}
      />
      <LetterCarousel
        className="sm:hidden"
        focusedIndex={focusedIndex}
        cardCount={cardCount}
        letters={dummyletters}
      />
    </section>
  )
}

export default HeavenLetter
