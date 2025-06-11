import { useState } from 'react'
import LetterCarousel from '@/pages/home/components/LetterCarousel'
import CarouselButton from '@/shared/components/CarouselButton'

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

  return (
    <section className="pt-6 sm:pt-0">
      <a className="mb-1 flex cursor-pointer items-center gap-3" href="/memorial">
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
      />
      <LetterCarousel className="sm:hidden" focusedIndex={focusedIndex} cardCount={cardCount} />
    </section>
  )
}

export default HeavenLetter
