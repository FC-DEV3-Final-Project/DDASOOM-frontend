import React from 'react'
import HeroSection from '@/pages/home/components/HeroSection' // HeroSection 컴포넌트 임포트
import QuickLinks from '@/pages/home/components/QuickLinks'
import StatsSection from '@/pages/home/components/StatsSection'
import MemorialSection from '@/pages/home/components/MemorialSection'
import EventSection from '@/pages/home/components/EventSection'
import NoticeSection from '@/pages/home/components/NoticeSection'
import StorySection from '@/pages/home/components/StorySection'
import KodaStorySection from '@/pages/home/components/KodaStorySection'
import PartnersSection from '@/pages/home/components/PartnersSection'

const HomePage: React.FC = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center gap-[40px] self-stretch">
        <HeroSection linkUrl="" /> {/* 클릭 시 이동할 링크를 여기에 지정하세요 */}
        <QuickLinks />
        <div className="mx-auto grid w-full max-w-[1300px] min-w-[1000px] grid-cols-2 gap-[40px] px-5">
          <StatsSection />
          <MemorialSection />
          <EventSection />
          <NoticeSection />
          <StorySection />
          <KodaStorySection />
        </div>
      </main>
      <PartnersSection />
    </>
  )
}

export default HomePage
