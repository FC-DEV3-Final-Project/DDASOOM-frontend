import React from 'react'
import CarouselButton from '@/shared/components/CarouselButton'

const PartnersSection: React.FC = () => {
  return (
    <section className="py-5">
      {/* Main content container matching header/nav width */}
      <div className="mx-auto flex w-full max-w-[1300px] min-w-[1000px] flex-col rounded-4xl border-2 border-[#D0D0D0] bg-white px-10 py-8">
        {/* Tab Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex gap-10">
            <button className="text-red-40 border-red-40 border-b-4 pb-1 text-2xl font-bold focus:outline-none">
              뇌사자 관리업무 협약기관
            </button>
            <button className="text-gray-40 border-b-2 border-transparent pb-1 text-2xl hover:border-[#E57373] focus:outline-none">
              기증 활성화 프로그램 협약기관
            </button>
          </div>
          <CarouselButton />
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
