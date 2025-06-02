import React from 'react'
import { HandHeart } from 'lucide-react' // HandHeart 아이콘 임포트

const QuickLinks: React.FC = () => {
  return (
    <section className="mx-auto flex w-full max-w-[1300px] min-w-[1000px] flex-col items-start gap-[80px] self-stretch bg-white/80 px-[20px] backdrop-blur-lg">
      <div className="flex w-full justify-between gap-[18px]">
        <button className="inline-flex items-center justify-between gap-[14px] rounded-[100px] border-[2.5px] border-[#EAEAEA] bg-white px-[32px] py-[20px] shadow-md hover:shadow-lg focus:outline-none">
          <div className="flex h-[30.4px] w-[33.378px] flex-shrink-0 items-center justify-center text-red-500">
            <HandHeart size={40} strokeWidth={1.5} />
          </div>
          <span className="text-[24px] leading-[36px] font-bold whitespace-nowrap text-black">
            기증자 예우
          </span>
          <span className="text-lg text-gray-400">&gt;</span>
        </button>
        <button className="inline-flex items-center justify-between gap-[14px] rounded-[100px] border-[2.5px] border-[#EAEAEA] bg-white px-[32px] py-[20px] shadow-md hover:shadow-lg focus:outline-none">
          <div className="flex h-[30.4px] w-[33.378px] flex-shrink-0 items-center justify-center text-red-500">
            {/* 아이콘 자리 */}
          </div>
          <span className="text-[24px] leading-[36px] font-bold whitespace-nowrap text-black">
            장기·조직기증 소개
          </span>
          <span className="text-lg text-gray-400">&gt;</span>
        </button>
        <button className="inline-flex items-center justify-between gap-[14px] rounded-[100px] border-[2.5px] border-[#EAEAEA] bg-white px-[32px] py-[20px] shadow-md hover:shadow-lg focus:outline-none">
          <div className="flex h-[30.4px] w-[33.378px] flex-shrink-0 items-center justify-center text-red-500">
            {/* 아이콘 자리 */}
          </div>
          <span className="text-[24px] leading-[36px] font-bold whitespace-nowrap text-black">
            기증희망등록
          </span>
          <span className="text-lg text-gray-400">&gt;</span>
        </button>
        <button className="inline-flex items-center justify-between gap-[14px] rounded-[100px] border-[2.5px] border-[#EAEAEA] bg-white px-[32px] py-[20px] shadow-md hover:shadow-lg focus:outline-none">
          <div className="flex h-[30.4px] w-[33.378px] flex-shrink-0 items-center justify-center text-red-500">
            {/* 아이콘 자리 */}
          </div>
          <span className="text-[24px] leading-[36px] font-bold whitespace-nowrap text-black">
            생명나눔 희망우체통
          </span>
          <span className="text-lg text-gray-400">&gt;</span>
        </button>
      </div>
    </section>
  )
}

export default QuickLinks
