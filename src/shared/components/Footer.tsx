import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="border-t-1 border-[#CDD1D5] pt-5 pb-10">
      <div className="mx-auto flex w-full max-w-[1300px] min-w-[1000px] flex-col items-center gap-5">
        <div className="flex w-full justify-between">
          <div className="flex w-full items-center gap-8 text-[#616161]">
            <a href="#" className="font-bold text-[#F14F4D]">
              개인정보 처리방침
            </a>
            <a href="#">위치안내</a>
            <a href="#">경영공시</a>
            <a href="#">유관기관</a>
            <a href="#">기증희망등록</a>
            <a href="#">저작권정책</a>
          </div>
          <div className="flex gap-2">
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 text-[#616161]">
              <img src="/icon/instagram.svg" alt="" />
            </div>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 text-[#616161]">
              <img src="/icon/youtube.svg" alt="" />
            </div>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 text-[#616161]">
              <img src="/icon/naver_blog.svg" alt="" />
            </div>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 text-[#616161]">
              <img src="/icon/facebook.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="flex h-full w-full items-center justify-between border-t border-[#F0F0F0] pt-5">
          <div className="text-sm text-[#9E9E9E]">
            <p>서울시 서대문구 충정로 36 국민연금공단충정로사옥 5층 한국장기조직기증원 (우)03741</p>
            <p className="mt-1">
              Tel : 02-3447-5632 / Fax : 02-3447-5631 / E-Mail : koda@koda1458.kr
            </p>
            <p className="mt-1">Copyright (c) 2015 All Rights Reserved.</p>
          </div>

          <div className="flex h-full items-center justify-end space-x-6">
            <div className="h-[32px] w-[85px]">
              <img src="/logos/govLogo.png" alt="로고1" />
            </div>
            <div className="h-[32px] w-[85px]">
              <img src="/logos/govLogo2.png" alt="로고2" />
            </div>
            <div className="h-[32px] w-[85px]">
              <img src="/logos/govLogo3.png" alt="로고3" />
            </div>
            <div className="h-[32px] w-[85px]">
              <img src="/logos/govLogo4.png" alt="로고4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
