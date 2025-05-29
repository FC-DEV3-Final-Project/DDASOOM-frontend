import React from 'react'

interface HeroSectionProps {
  linkUrl: string // 클릭 시 이동할 링크 URL
}

const HeroSection: React.FC<HeroSectionProps> = ({ linkUrl }) => {
  // 첫 번째 이미지만 사용
  const imageUrl = '/public/image.png' // 첫 번째 이미지 경로

  return (
    <section className="relative mx-auto max-h-[500px] w-full max-w-[2000px] overflow-hidden">
      {' '}
      {/* 이전 최대 너비 및 중앙 정렬 유지 */}
      {/* 단일 이미지 및 링크 */}
      {/* 이미지 비율에 맞게 높이 자동 조절 및 전체 너비 사용 */}
      <a href={linkUrl} className="block w-full">
        <img
          src={imageUrl}
          alt="생명나눔, 생명이음 홍보 이미지"
          className="block h-auto w-full object-cover" // 이미지 비율 유지 및 커버
        />
      </a>
      {/* 이전 슬라이더 관련 요소들 (버튼, 인디케이터)는 제거 */}
    </section>
  )
}

export default HeroSection
