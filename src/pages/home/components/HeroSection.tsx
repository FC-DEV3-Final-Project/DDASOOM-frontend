import React from 'react'
import CarouselButton from '@/shared/components/CarouselButton'
import CarouselIndicator from '@/shared/components/CarouselIndicator'
import { useCarousel } from '@/shared/hooks/useCarousel'

interface HeroSectionProps {
  linkUrl: string
}

const images = ['/banner.png', '/banner.png', '/banner.png', '/banner.png', '/banner.png']

const HeroSection: React.FC<HeroSectionProps> = ({ linkUrl }) => {
  const { index, setIndex, prevSlide, nextSlide, onTouchStart, onTouchEnd } = useCarousel(
    images.length,
  )

  return (
    <section className="w-full">
      <div
        className="relative aspect-[1300/340] min-h-[140px] w-full overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* 슬라이드 이미지 */}
        {images.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt={`슬라이드 ${i + 1}`}
            className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? 'z-1 opacity-100' : 'z-0 opacity-0'
            }`}
          />
        ))}

        {/* 클릭 가능한 영역 */}
        <div className="relative z-1 mx-auto min-h-[140px] w-full max-w-[1300px] sm:h-full">
          <a href={linkUrl} className="block h-full w-full">
            {/* 데스크탑 */}
            <CarouselButton
              IndicatorLimit={images.length}
              className="absolute right-5 bottom-5 hidden sm:flex"
              index={index}
              onPrev={prevSlide}
              onNext={nextSlide}
              onIndicatorClick={(i) => setIndex(i)}
            />

            {/* 모바일 */}
            <CarouselIndicator
              index={index}
              IndicatorLimit={images.length}
              className="absolute bottom-[10px] left-[50%] translate-x-[-50%] sm:hidden"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
