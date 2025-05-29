import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F8F8] py-12">
      {/* Main content container matching header/nav width */}
      <div className="mx-auto flex w-full max-w-[1300px] min-w-[1000px] flex-col items-center p-5">
        {/* Footer Links */}
        <div className="mb-8 flex w-full justify-center space-x-8 text-sm text-[#616161]">
          <a href="#" className="font-bold text-[#E57373]">
            개인정보 처리방침
          </a>
          <a href="#">위치안내</a>
          <a href="#">경영공시</a>
          <a href="#">유관기관</a>
          <a href="#">기증희망등록</a>
          <a href="#">저작권정책</a>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex w-full items-start justify-between border-t border-gray-300 pt-8">
          {/* Contact Info and Copyright */}
          <div className="text-sm text-[#9E9E9E]">
            <p>서울시 서대문구 충정로 36 국민연금공단충정로사옥 5층 한국장기조직기증원 (우)03741</p>
            <p className="mt-1">
              Tel : 02-3447-5632 / Fax : 02-3447-5631 / E-Mail : koda@koda1458.kr
            </p>
            <p className="mt-1">Copyright (c) 2015 All Rights Reserved.</p>
          </div>

          {/* Social Media Icons and Government Logos */}
          <div className="flex flex-col items-end">
            {/* Social Media Icons */}
            <div className="mb-6 flex space-x-4">
              {/* Replace with actual icons/links */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-[#616161]">
                인스타
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-[#616161]">
                유튜브
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-[#616161]">
                블로그
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-[#616161]">
                페이스북
              </div>
            </div>

            {/* Government Logos */}
            <div className="flex justify-end space-x-6">
              {/* Replace with actual image tags */}
              <img src="/logos/logo1.png" alt="로고1" className="h-10 w-auto" />
              <img src="/logos/logo2.png" alt="로고2" className="h-10 w-auto" />
              <img src="/logos/logo3.png" alt="로고3" className="h-10 w-auto" />
              <img src="/logos/logo4.png" alt="로고4" className="h-10 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
