import React from 'react'
import CarouselButton from '@/shared/components/CarouselButton'

const PartnersSection: React.FC = () => {
  return (
    <section className="py-6">
      {/* Main content container matching header/nav width */}
      <div className="mx-auto flex w-full flex-col rounded-4xl border-2 border-[#D0D0D0] bg-white px-5 py-[22px] sm:max-w-[1300px] sm:min-w-[1000px] sm:px-10 sm:py-8">
        {/* Tab Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <div className="gap-10 sm:flex">
            <button className="sm:text-red-40 border-red-40 flex items-center gap-[14px] pb-1 text-[15px] font-bold focus:outline-none sm:border-b-4 sm:text-2xl">
              <div className="bg-red-40 h-2 w-2 rounded-full sm:hidden"></div>뇌사자 관리업무
              협약기관
            </button>
            <button className="sm:text-gray-40 flex items-center gap-[14px] border-transparent pb-1 text-[15px] hover:border-[#E57373] focus:outline-none sm:border-b-2 sm:text-2xl">
              <div className="bg-gray-80 h-2 w-2 rounded-full sm:hidden"></div>기증 활성화 프로그램
              협약기관
            </button>
          </div>
          <CarouselButton index={1} className="hidden sm:flex" />
        </div>

        <div className="flex items-center gap-10 overflow-x-auto py-4">
          <div className="flex h-16 w-[200px] items-center justify-center">
            <img src="/logos/konyang.png" alt="건양대학교병원" />
          </div>
          <div className="flex h-16 w-[200px] items-center justify-center">
            <img src="/logos/school.png" alt="건양대학교병원" />
          </div>
          <div className="flex h-16 w-[200px] items-center justify-center">
            <img src="/logos/school2.png" alt="건양대학교병원" />
          </div>
          <div className="flex h-16 w-[200px] items-center justify-center">
            <img src="/logos/school3.png" alt="건양대학교병원" />
          </div>
          <div className="flex h-16 w-[200px] items-center justify-center">
            <img src="/logos/school4.png" alt="건양대학교병원" />
          </div>
          <div className="flex h-16 w-[200px] items-center justify-center">
            <img src="/logos/school5.png" alt="건양대학교병원" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
