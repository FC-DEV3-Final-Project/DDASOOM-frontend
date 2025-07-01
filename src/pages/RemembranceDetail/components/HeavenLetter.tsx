import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LetterCarousel from '@/pages/home/components/LetterCarousel'
import LetterCard from '@/pages/RemembranceDetail/components/LetterCard'
import CarouselButton from '@/shared/components/CarouselButton'

interface Letter {
  donorName: string
  letterSeq: number
  letterTitle: string
  letterWriter: string
  readCount?: number
  writeTime?: string
  commentCount?: number
}

interface HeavenLetterProps {
  title?: string
  description?: string
  letters?: Letter[]
}

const defaultLetters: Letter[] = [
  {
    donorName: '홍*동',
    letterSeq: 8260,
    letterTitle: '엄마를 그리워하며',
    letterWriter: '김*수',
    readCount: 123,
    writeTime: '2025-06-04',
    commentCount: 456,
  },
  {
    donorName: '홍*동',
    letterSeq: 8260,
    letterTitle: '보고 싶어요',
    letterWriter: '이*진',
    readCount: 99,
    writeTime: '2025-06-05',
    commentCount: 12,
  },
  {
    donorName: '홍*동',
    letterSeq: 8260,
    letterTitle: '항상 기억할게요',
    letterWriter: '박*수',
    readCount: 77,
    writeTime: '2025-06-06',
    commentCount: 8,
  },
]

const HeavenLetter = ({
  title = '하늘나라 편지',
  description = ' ',
  letters = defaultLetters,
}: HeavenLetterProps) => {
  const [focusedIndex, setFocusedIndex] = useState(0)
  const navigate = useNavigate()
  const cardCount = letters.length

  const nextFocus = () => setFocusedIndex((prev) => (prev + 1) % cardCount)
  const prevFocus = () => setFocusedIndex((prev) => (prev - 1 + cardCount) % cardCount)
  const onIndicatorClick = (index: number) => setFocusedIndex(index)

  return (
    <section className="pt-6 sm:pt-0">
      <div className="mb-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-gray-95 font-bold sm:text-2xl">{title}</h2>
          <a href="/remembrance/letter" className="flex items-center">
            <img
              src="/icon/Arrow.svg"
              alt="이동"
              className="h-[14px] w-[14px] sm:h-[24px] sm:w-[24px]"
            />
          </a>
        </div>
        <CarouselButton
          index={focusedIndex}
          onPrev={prevFocus}
          onNext={nextFocus}
          onIndicatorClick={onIndicatorClick}
          className="sm:flex"
        />
      </div>
      <div className="flex justify-between">
        <p className="text-gray-60 mb-3 text-[13px] font-normal sm:mb-[28px] sm:text-[19px]">
          {description}
        </p>
      </div>
      <LetterCarousel
        focusedIndex={focusedIndex}
        cardCount={cardCount}
        letters={letters}
        renderCard={(letter) => (
          <LetterCard
            key={letter.letterSeq}
            item={letter}
            onClick={() => navigate(`/remembrance/letter/${letter.letterSeq}`)}
          />
        )}
      />
    </section>
  )
}

export default HeavenLetter
