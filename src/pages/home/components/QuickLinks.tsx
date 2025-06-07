import React from 'react'
import { HandHeart } from 'lucide-react'

const QuickLinks: React.FC = () => {
  return (
    <section className="mx-auto flex w-full max-w-[1300px] bg-white/80 py-6 backdrop-blur-lg sm:py-0">
      <div className="flex w-full flex-wrap gap-[10px] sm:flex-nowrap sm:justify-between">
        <button className="flex min-w-[162.5px] flex-1 items-center justify-between rounded-[100px] border-1 border-[#EAEAEA] bg-white px-3 py-2 transition-all duration-300 ease-in-out hover:shadow-md focus:outline-none sm:flex-none sm:gap-[14px] sm:border-[2.5px] sm:px-[28px] sm:py-[20px]">
          <div className="flex items-center text-red-500">
            <HandHeart className="w-[20px] sm:h-[40px] sm:w-[40px]" strokeWidth={1.5} />
            <span className="text-gray-80 ml-1 text-[14px] font-bold whitespace-nowrap sm:ml-5 sm:text-[24px]">
              기증자 예우
            </span>
          </div>
          <span className="text-gray-80 text-lg sm:text-[24px]">&gt;</span>
        </button>
        <button className="flex min-w-[162.5px] flex-1 items-center justify-between rounded-[100px] border-1 border-[#EAEAEA] bg-white px-3 py-2 transition-all duration-300 ease-in-out hover:shadow-md focus:outline-none sm:flex-none sm:gap-[14px] sm:border-[2.5px] sm:px-[28px] sm:py-[20px]">
          <div className="flex items-center text-red-500">
            <img src="/icon/ecg_heart.svg" className="w-[20px] sm:h-[40px] sm:w-[40px]" />
            <span className="text-gray-80 ml-1 hidden text-[14px] font-bold whitespace-nowrap sm:ml-5 sm:flex sm:text-[24px]">
              장기·조직기증 소개
            </span>
            <span className="text-gray-80 ml-1 text-[14px] font-bold whitespace-nowrap sm:ml-5 sm:hidden sm:text-[24px]">
              장기·조직기증
            </span>
          </div>
          <span className="text-gray-80 text-lg sm:text-[24px]">&gt;</span>
        </button>
        <button className="flex min-w-[162.5px] flex-1 items-center justify-between rounded-[100px] border-1 border-[#EAEAEA] bg-white px-3 py-2 transition-all duration-300 ease-in-out hover:shadow-md focus:outline-none sm:flex-none sm:gap-[14px] sm:border-[2.5px] sm:px-[28px] sm:py-[20px]">
          <div className="flex items-center text-red-500">
            <img src="/icon/identity.svg" className="w-[20px] sm:h-[40px] sm:w-[40px]" />
            <span className="text-gray-80 ml-1 text-[14px] font-bold whitespace-nowrap sm:ml-5 sm:text-[24px]">
              기증희망등록
            </span>
          </div>
          <span className="text-gray-80 text-lg sm:text-[24px]">&gt;</span>
        </button>
        <button className="flex min-w-[162.5px] flex-1 items-center justify-between rounded-[100px] border-1 border-[#EAEAEA] bg-white px-3 py-2 transition-all duration-300 ease-in-out hover:shadow-md focus:outline-none sm:flex-none sm:gap-[14px] sm:border-[2.5px] sm:px-[28px] sm:py-[20px]">
          <div className="flex items-center text-red-500">
            <img src="/icon/mail.svg" className="w-[20px] sm:h-[40px] sm:w-[40px]" />
            <span className="text-gray-80 ml-1 hidden text-[14px] font-bold whitespace-nowrap sm:ml-5 sm:flex sm:text-[24px]">
              생명나눔 희망우체통
            </span>
            <span className="text-gray-80 ml-1 text-[14px] font-bold whitespace-nowrap sm:ml-5 sm:hidden sm:text-[24px]">
              희망우체통
            </span>
          </div>
          <span className="text-gray-80 text-lg sm:text-[24px]">&gt;</span>
        </button>
      </div>
    </section>
  )
}

export default QuickLinks
