import { useEffect, useState } from 'react'
import LetterCarousel from '@/pages/home/components/LetterCarousel'
import CarouselButton from '@/shared/components/CarouselButton'

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
    fetch('http://koda2.elementsoft.biz:8081/main')
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
        <img src="/icon/Arrow.svg" alt="" className="h-[14px] w-[14px] sm:h-[24px] sm:w-[24px]" />
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
        letters={letters}
      />
      <LetterCarousel
        className="sm:hidden"
        focusedIndex={focusedIndex}
        cardCount={cardCount}
        letters={letters}
      />
    </section>
  )
}

export default HeavenLetter
