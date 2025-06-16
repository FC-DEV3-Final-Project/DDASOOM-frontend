import React, { useState } from 'react'
import CarouselButton from '@/shared/components/CarouselButton'

const dummyData = [
  {
    group: '뇌사자 관리업무 협약기관',
    logos: [
      '/logos/konyang.png',
      '/logos/school.png',
      '/logos/school2.png',
      '/logos/school3.png',
      '/logos/school4.png',
      '/logos/school5.png',
    ],
    name: [
      '건양대학교병원',
      '고려대학교구로병원',
      '가톨릭대학교 인천성모병원',
      '가톨릭관동대학교 국제성모병원',
      '서울대학교병원',
      '창원한마음병원',
    ],
  },
  {
    group: '기증 활성화 프로그램 협약기관',
    logos: [
      '/logos/school5.png',
      '/logos/school.png',
      '/logos/konyang.png',
      '/logos/school3.png',
      '/logos/school2.png',
      '/logos/school4.png',
    ],
    name: [
      '건양대학교병원',
      '고려대학교구로병원',
      '가톨릭대학교 인천성모병원',
      '가톨릭관동대학교 국제성모병원',
      '서울대학교병원',
      '창원한마음병원',
    ],
  },
]

const PartnersLogoBox = ({ groupIndex }: { groupIndex: number }) => {
  const data = dummyData[groupIndex]
  return (
    <div className="grid grid-cols-2 items-center gap-6 overflow-x-auto py-4 sm:grid-cols-6 sm:gap-10">
      {data.logos.map((logo, index) => (
        <div
          key={index}
          className="mx-auto flex w-[90px] items-center sm:h-16 sm:w-[200px] sm:justify-center"
        >
          <img src={logo} alt={data.name[index]} />
        </div>
      ))}
    </div>
  )
}

const PartnersSection: React.FC = () => {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0)

  return (
    <section className="py-6">
      <div className="mx-auto flex w-full flex-col rounded-4xl border-2 border-[#D0D0D0] bg-white px-5 py-[22px] sm:max-w-[1300px] sm:min-w-[1000px] sm:px-10 sm:py-8">
        <div className="flex items-center justify-between sm:mb-8">
          <div className="gap-10 sm:flex">
            {dummyData.map((group, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGroupIndex(idx)}
                className={`flex items-center gap-[14px] pb-1 text-[15px] font-bold focus:outline-none sm:text-2xl ${
                  activeGroupIndex === idx
                    ? 'text-red-40 border-red-40 sm:border-b-4'
                    : 'text-gray-40 border-transparent hover:border-[#E57373] sm:border-b-2'
                }`}
              >
                <div
                  className={`h-2 w-2 rounded-full sm:hidden ${
                    activeGroupIndex === idx ? 'bg-red-40' : 'bg-gray-80'
                  }`}
                ></div>
                {group.group}
              </button>
            ))}
          </div>
          <CarouselButton index={1} className="hidden sm:flex" />
        </div>

        <PartnersLogoBox groupIndex={activeGroupIndex} />
      </div>
    </section>
  )
}

export default PartnersSection
