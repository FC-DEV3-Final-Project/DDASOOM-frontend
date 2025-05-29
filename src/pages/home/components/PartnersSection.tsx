import React from 'react'

const PartnersSection: React.FC = () => {
  return (
    <section className="py-12">
      {/* Main content container matching header/nav width */}
      <div className="mx-auto flex w-full max-w-[1300px] min-w-[1000px] flex-col rounded-xl bg-white p-6 shadow-md">
        {/* Tab Navigation */}
        <div className="mb-8 flex items-center">
          <button className="border-b-2 border-[#E57373] pb-2 text-xl font-bold text-[#212121] focus:outline-none">
            뇌사자 관리업무 협약기관
          </button>
          <button className="ml-8 border-b-2 border-transparent pb-2 text-xl font-bold text-[#616161] hover:border-[#E57373] focus:outline-none">
            기증 활성화 프로그램 협약기관
          </button>
          {/* Navigation Arrows */}
          <div className="flex flex-grow items-center justify-end space-x-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-[#9E9E9E] hover:border-gray-400">
              〈
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-[#9E9E9E] hover:border-gray-400">
              〉
            </button>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="flex items-center space-x-8 overflow-x-auto py-4">
          {/* Replace with actual image tags */}
          <img src="/logos/konyang.png" alt="건양대학교병원" className="h-16 w-auto flex-none" />
          <img
            src="/logos/catholic_incheon.png"
            alt="가톨릭대학교 인천성모병원"
            className="h-16 w-auto flex-none"
          />
          <img
            src="/logos/catholic_intl.png"
            alt="가톨릭관동대학교 국제성모병원"
            className="h-16 w-auto flex-none"
          />
          <img src="/logos/snuh.png" alt="서울대학교병원" className="h-16 w-auto flex-none" />
          <img
            src="/logos/changwon_hanmaum.png"
            alt="창원한마음병원"
            className="h-16 w-auto flex-none"
          />
          {/* Add more logos as needed */}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
