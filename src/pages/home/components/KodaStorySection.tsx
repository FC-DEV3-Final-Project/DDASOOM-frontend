import React from 'react'

const KodaStorySection: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-6 text-2xl font-bold text-[#212121]">KODA 이야기 &gt;</h2>
      <p className="mb-8 text-base text-[#616161]">
        한국장기조직기증원의 새로운 소식을 만나보세요.
      </p>
      {/* TODO: 유튜브 썸네일 및 링크 삽입 */}
      <div className="flex aspect-video w-full items-center justify-center bg-gray-300 text-gray-600">
        유튜브 영상 플레이스홀더
      </div>
    </div>
  )
}

export default KodaStorySection
