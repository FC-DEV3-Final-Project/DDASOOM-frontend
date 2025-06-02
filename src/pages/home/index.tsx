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
        <HeroSection linkUrl="" />
        <div className="mx-auto flex w-full max-w-[1300px] min-w-[1000px] flex-col gap-[40px] px-5">
          <QuickLinks />
          <div className="my-[40px] flex gap-[40px]">
            <StatsSection />
            <MemorialSection />
          </div>
          <div className="my-[40px] grid grid-cols-2 gap-[80px]">
            <EventSection />
            <NoticeSection />
          </div>
          <div className="my-[40px] grid grid-cols-2 gap-[80px]">
            <StorySection />
            <KodaStorySection />
          </div>
          <PartnersSection />
        </div>
      </main>
    </>
  )
}

export default HomePage
