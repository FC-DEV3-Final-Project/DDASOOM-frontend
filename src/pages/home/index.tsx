import React from 'react'
import HeroSection from './components/HeroSection' // HeroSection 컴포넌트 임포트
import QuickLinks from './components/QuickLinks'
import StatsSection from './components/StatsSection'
import MemorialSection from './components/MemorialSection'
import EventSection from './components/EventSection'
import NoticeSection from './components/NoticeSection'
import StorySection from './components/StorySection'
import KodaStorySection from './components/KodaStorySection'
import PartnersSection from './components/PartnersSection'

const HomePage: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <main className="flex w-full flex-col items-center gap-[40px] self-stretch">
        <HeroSection linkUrl="" /> {/* 클릭 시 이동할 링크를 여기에 지정하세요 */}
        <QuickLinks />
        <div className="mx-auto flex grid w-full max-w-[1300px] min-w-[1000px] grid-cols-2 gap-[40px] px-5">
          <StatsSection />
          <MemorialSection />
          <EventSection />
          <NoticeSection />
          <StorySection />
          <KodaStorySection />
        </div>
      </main>
      <PartnersSection />
    </div>
  )
}

export default HomePage
