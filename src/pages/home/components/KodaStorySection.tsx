import React from 'react'
import SectionHeader from '@/pages/home/components/SectionHeader'

const KodaStorySection: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SectionHeader
        title="KODA 이야기"
        description="한국장기조직기증원의 새로운 소식을 만나보세요."
        link=""
      />
      <div className="flex aspect-video w-full items-center justify-center rounded-[20px] bg-gray-300 text-gray-600 shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)] sm:rounded-[30px]">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/hVJtnFfYvHw"
          title="KODA 이야기"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-[30px]"
        ></iframe>
      </div>
    </div>
  )
}

export default KodaStorySection
