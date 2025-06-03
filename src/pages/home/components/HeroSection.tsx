import React from 'react'

interface HeroSectionProps {
  linkUrl: string // 클릭 시 이동할 링크 URL
}

const HeroSection: React.FC<HeroSectionProps> = ({ linkUrl }) => {
  // 첫 번째 이미지만 사용
  const imageUrl = '/public/image.png' // 첫 번째 이미지 경로

  return (
    <section className="relative mx-auto max-h-[500px] w-full max-w-[2000px] min-w-[1000px] overflow-hidden">
      <a href={linkUrl} className="block w-full">
        <img
          src={imageUrl}
          alt="생명나눔, 생명이음 홍보 이미지"
          className="block h-auto w-full object-cover" // 이미지 비율 유지 및 커버
        />
      </a>
    </section>
  )
}

export default HeroSection
