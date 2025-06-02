import React from 'react'
import { HandHeart } from 'lucide-react'

const ecgHeartIcon = '/public/icon/ecg_heart.svg'
const identityIcon = '/public/icon/identity.svg'
const mailIcon = '/public/icon/mail.svg'

const QuickLinks: React.FC = () => {
  return (
    <section className="mx-auto flex w-full max-w-[1300px] flex-col items-start gap-[80px] self-stretch bg-white/80 px-[20px] backdrop-blur-lg">
      <div className="flex flex-wrap gap-[18px]">
        <button className="inline-flex items-center justify-between gap-[14px] rounded-[100px] border-[2.5px] border-[#EAEAEA] bg-white px-[28px] py-[20px] transition-all duration-300 ease-in-out hover:shadow-md focus:outline-none">
          <div className="flex h-[30px] w-[33px] flex-shrink-0 items-center justify-center text-red-500">
            <HandHeart size={40} strokeWidth={1.5} />
          </div>
          <span className="text-gray-80 mobile:text-[14px] desktop:text-[24px] text-[14px] leading-[36px] font-bold whitespace-nowrap">
            기증자 예우
          </span>
          <span className="text-gray-80 text-lg">&gt;</span>
        </button>
        <button className="inline-flex items-center justify-between gap-[14px] rounded-[100px] border-[2.5px] border-[#EAEAEA] bg-white px-[28px] py-[20px] transition-all duration-300 hover:shadow-md focus:outline-none">
          <div className="flex h-[30px] w-[33px] flex-shrink-0 items-center justify-center text-red-500">
            <img src={ecgHeartIcon} alt="" width={33} height={33} />
          </div>
          <span className="text-gray-80 mobile:text-[14px] desktop:text-[24px] text-[14px] leading-[36px] font-bold whitespace-nowrap">
            장기·조직기증 소개
          </span>
          <span className="text-gray-80 text-lg">&gt;</span>
        </button>
        <button className="inline-flex items-center justify-between gap-[14px] rounded-[100px] border-[2.5px] border-[#EAEAEA] bg-white px-[28px] py-[20px] transition-all duration-300 hover:shadow-md focus:outline-none">
          <div className="flex h-[30px] w-[33px] flex-shrink-0 items-center justify-center text-red-500">
            <img src={identityIcon} alt="" width={33} height={33} />
          </div>
          <span className="text-gray-80 mobile:text-[14px] desktop:text-[24px] text-[14px] leading-[36px] font-bold whitespace-nowrap">
            기증희망등록
          </span>
          <span className="text-gray-80 text-lg">&gt;</span>
        </button>
        <button className="inline-flex items-center justify-between gap-[14px] rounded-[100px] border-[2.5px] border-[#EAEAEA] bg-white px-[28px] py-[20px] hover:shadow-md focus:outline-none">
          <div className="flex h-[30px] w-[33px] flex-shrink-0 items-center justify-center text-red-500">
            <img src={mailIcon} alt="" width={33} height={33} />
          </div>
          <span className="text-gray-80 mobile:text-[14px] desktop:text-[24px] text-[14px] leading-[36px] font-bold whitespace-nowrap">
            생명나눔 희망우체통
          </span>
          <span className="text-gray-80 text-lg">&gt;</span>
        </button>
      </div>
    </section>
  )
}

export default QuickLinks
