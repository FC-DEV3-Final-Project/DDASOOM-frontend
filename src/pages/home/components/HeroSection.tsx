import React, { useState } from 'react'
import CarouselButton from '@/shared/components/CarouselButton'

interface HeroSectionProps {
  linkUrl: string
}

const images = ['/banner.png', '/banner.png', '/banner.png', '/banner.png', '/banner.png']

const HeroSection: React.FC<HeroSectionProps> = ({ linkUrl }) => {
  const [index, setIndex] = useState(0)

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <section className="w-full">
      <div className="relative aspect-[1300/340] min-h-[140px] w-full min-w-[375px] overflow-hidden">
        {/* 슬라이드 이미지 */}
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`슬라이드 ${i + 1}`}
            className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? 'z-10 opacity-100' : 'z-0 opacity-0'
            }`}
          />
        ))}

        {/* 클릭 가능한 영역 */}
        <div className="relative z-20 mx-auto h-full w-full max-w-[1300px] min-w-[375px]">
          <a href={linkUrl} className="block h-full w-full">
            <CarouselButton
              IndicatorLimit={images.length}
              className="absolute right-5 bottom-5"
              index={index}
              onPrev={prevSlide}
              onNext={nextSlide}
              onIndicatorClick={(i) => setIndex(i)}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
