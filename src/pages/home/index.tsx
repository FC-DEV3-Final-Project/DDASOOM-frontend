import React from 'react'
import HeroSection from '@/pages/home/components/HeroSection'
import QuickLinks from '@/pages/home/components/QuickLinks'
import StatsSection from '@/pages/home/components/StatsSection'
import MemorialSection from '@/pages/home/components/MemorialSection'
import EventSection from '@/pages/home/components/EventSection'
import NoticeSection from '@/pages/home/components/NoticeSection'
import StorySection from '@/pages/home/components/StorySection'
import KodaStorySection from '@/pages/home/components/KodaStorySection'
import PartnersSection from '@/pages/home/components/PartnersSection'
import HeavenLetter from '@/pages/home/components/HeavenLetter'

const HomePage: React.FC = () => {
  return (
    <>
      <main className="mb-10 flex w-full flex-col items-center self-stretch sm:mb-25 sm:gap-[40px]">
        <HeroSection />
        <div className="mx-auto flex w-full max-w-[1300px] flex-col px-5 sm:gap-[40px]">
          <QuickLinks />
          <div className="my-[24px] flex flex-wrap gap-[14px] sm:my-[40px] sm:flex-nowrap sm:gap-[40px]">
            <StatsSection />
            <MemorialSection />
          </div>
          <HeavenLetter />
          <div className="hidden gap-[80px] pt-[12px] sm:my-[40px] sm:grid sm:grid-cols-2 sm:pt-[0px]">
            <EventSection />
            <NoticeSection />
          </div>
          <div className="my-6 flex flex-col gap-[48px] sm:my-[40px] sm:grid sm:grid-cols-2 sm:gap-[80px]">
            <StorySection />
            <KodaStorySection />
          </div>
          <div className="flex gap-3 py-6 sm:hidden">
            <button className="border-gray-20 flex flex-1 items-center justify-between rounded-[20px] border-1 px-[14px] py-2">
              공지사항
              <img src="/icon/Arrow.svg" alt="" className="h-[15px] w-[15px]" />
            </button>
            <button className="border-gray-20 flex flex-1 items-center justify-between rounded-[20px] border-1 px-[14px] py-2">
              기관 일정
              <img src="/icon/Arrow.svg" alt="" className="h-[15px] w-[15px]" />
            </button>
          </div>
          <PartnersSection />
        </div>
      </main>
    </>
  )
}

export default HomePage
