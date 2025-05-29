import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="mx-auto flex w-full flex-col items-center bg-white/80 backdrop-blur-lg">
      {' '}
      {/* 헤더 레이아웃 속성 적용 */}
      {/* 내부 컨테이너 레이아웃 속성 적용 및 중앙 정렬 */}
      <div className="mx-auto flex w-full max-w-[1300px] min-w-[1000px] items-center justify-between p-5">
        {' '}
        {/* 내부 컨테이너 레이아웃 속성 유지 및 mx-auto 추가 */}
        {/* 로고 */}
        <div className="flex items-center">
          {' '}
          {/* 로고를 감싸는 div (필요에 따라 스타일 조정) */}
          <img src="/public/logo.png" alt="KODA Logo" className="W-10 h-10" />{' '}
          {/* 로고 이미지 태그로 복원, 크기 임의 지정 */}
        </div>
        {/* 전화번호 섹션 */}
        <div className="flex items-center justify-end gap-10">
          {' '}
          {/* 전화번호 그룹 간 간격 */}
          <div className="inline-flex flex-col items-start justify-start gap-1">
            {' '}
            {/* 전화번호 항목 (의료진) */}
            <div className="justify-start self-stretch text-xs leading-normal font-normal text-black/80">
              {' '}
              {/* 설명 텍스트 스타일 및 폰트 */}
              의료진 전용 (뇌사시 통보)
            </div>
            <div className="inline-flex items-center justify-start gap-1.5 self-stretch">
              {' '}
              {/* 전화번호와 아이콘 간격 */}
              <img src="/public/phone.png" alt="phone" className="h-4 w-4" />{' '}
              {/* 전화 아이콘 이미지 태그로 복원 */}
              <div className="justify-start text-base leading-normal font-bold text-black">
                {' '}
                {/* 전화번호 텍스트 스타일 및 폰트 */}
                1577-1458
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-1">
            {' '}
            {/* 전화번호 항목 (일반인) */}
            <div className="justify-start self-stretch text-xs leading-normal font-normal text-black/80">
              {' '}
              {/* 설명 텍스트 스타일 및 폰트 */}
              일반인 전용 (기증희망등록)
            </div>
            <div className="inline-flex items-center justify-start gap-1.5 self-stretch">
              {' '}
              {/* 전화번호와 아이콘 */}
              <img src="/public/phone.png" alt="phone" className="h-4 w-4" />{' '}
              {/* 전화 아이콘 이미지 태그로 복원 */}
              <div className="justify-start text-base leading-normal font-bold text-black">
                {' '}
                {/* 전화번호 텍스트 스타일 및 폰트 */}
                1544-0606
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
