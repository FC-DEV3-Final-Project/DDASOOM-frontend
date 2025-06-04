import { Menu } from 'lucide-react'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="flex w-full flex-col items-center bg-white/80">
      {/* 헤더 레이아웃 속성 적용 */}
      {/* 내부 컨테이너 레이아웃 속성 적용 및 중앙 정렬 */}
      <div className="flex w-full max-w-[1300px] items-center justify-between px-5 pt-0 pb-[14px] sm:min-w-[1000px] sm:py-[14px]">
        {/* 내부 컨테이너 레이아웃 속성 유지 및 mx-auto 추가 */}
        {/* 로고 */}
        <div className="flex w-[58px] flex-col items-center sm:w-[247px] sm:flex-row">
          {/* 로고를 감싸는 div (필요에 따라 스타일 조정) */}
          <img src="/logos/kodaSymbol.png" alt="KODA Logo" className="w-[58px] sm:w-[150px]" />
          <img src="/logos/kodalogo.png" alt="KODA Logo" className="w-[58px] sm:w-[92px]" />
          {/* 로고 이미지 태그로 복원, 크기 임의 지정 */}
        </div>
        {/* 전화번호 섹션 */}
        <div>
          {/* 모바일 */}
          <div className="flex gap-3 sm:hidden">
            <div className="flex items-center gap-3 rounded-full border-1 border-[#EAEAEA] px-[14px] py-1">
              <img src="/icon/phone.svg" alt="phone" className="h-4 w-4" />
              <div className="flex gap-2">
                <div className="text-gray-80 text-[13px]">의료진 전용</div>
                <div className="text-gray-80 border-l-1 pl-2 text-[13px]">일반인 전용</div>
              </div>
            </div>
            <div>
              <Menu size={24} />
            </div>
          </div>
          {/* 데스크탑 */}
          <div className="hidden items-center justify-end gap-10 sm:flex">
            <div className="inline-flex flex-col items-start gap-1">
              <div className="text-gray-80 text-xs">의료진 전용 (뇌사시 통보)</div>
              <div className="inline-flex items-center gap-1.5">
                <img src="/icon/phone.svg" alt="phone" className="h-4 w-4" />
                <div className="text-gray-60 text-base font-bold">1577-1458</div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-1">
              <div className="text-gray-80 text-xs">일반인 전용 (기증희망등록)</div>
              <div className="inline-flex items-center gap-1.5">
                <img src="/icon/phone.svg" alt="phone" className="h-4 w-4" />
                <div className="text-gray-60 text-base font-bold">1544-0606</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
