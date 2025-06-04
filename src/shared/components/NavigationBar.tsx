import React, { useState } from 'react'
import { ChevronDown, Menu } from 'lucide-react' // 필요한 아이콘 import

// NavigationLink 컴포넌트 정의
interface NavigationLinkProps {
  text: string
  hasDropdown?: boolean
  isHovered: boolean
  isAnyLinkHovered: boolean
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  text,
  hasDropdown = false,
  isHovered,
  isAnyLinkHovered,
}) => {
  // 호버되지 않은 링크는 옅은 색상, 호버된 링크는 원래 색상
  const textColorClass = isAnyLinkHovered && !isHovered ? 'text-gray-400' : 'text-black' // text-nav_active 대신 검은색으로 가정
  // 아이콘 회전: 기본(rotate-0) -> 호버 시 반시계 방향 720도 회전 (끝나면 다시 위를 향함)
  const iconRotationClass = isHovered ? '-rotate-[180deg]' : 'rotate-0'

  return (
    <div
      className={`flex h-16 items-center justify-start gap-2 transition-colors duration-300 ${textColorClass}`}
    >
      <div className="justify-start font-['Pretendard_GOV'] text-xl leading-loose font-bold tracking-tight">
        {text}
      </div>
      {hasDropdown && (
        <ChevronDown
          size={24}
          className={`transition-transform duration-[500ms] ease-in-out ${iconRotationClass}`} // 회전 애니메이션 추가 및 속도 조정
        />
      )}
    </div>
  )
}

const NavigationBar: React.FC = () => {
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState<number | null>(null) // 호버된 링크의 인덱스 상태

  const links = [
    { text: '장기·조직기증', hasDropdown: true },
    { text: '추모공간', hasDropdown: true },
    { text: '홍보·알림', hasDropdown: true },
    { text: '정보마당', hasDropdown: true },
    { text: 'KODA', hasDropdown: true },
  ]

  return (
    <div className="hidden w-full flex-col items-center bg-white/80 backdrop-blur-lg sm:flex">
      {/* 중앙 정렬 및 너비 제한 컨테이너 */}
      <div className="mx-auto flex w-full max-w-[1300px] min-w-[1000px] items-center justify-between px-5">
        {/* 네비게이션 링크 그룹: 왼쪽 정렬 */}
        <div className="flex items-center justify-start gap-14">
          {links.map((link, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredLinkIndex(index)} // 마우스 진입 시 인덱스 설정
              onMouseLeave={() => setHoveredLinkIndex(null)} // 마우스 이탈 시 인덱스 초기화
            >
              <NavigationLink
                text={link.text}
                hasDropdown={link.hasDropdown}
                isHovered={hoveredLinkIndex === index}
                isAnyLinkHovered={hoveredLinkIndex !== null}
              />
            </div>
          ))}
        </div>
        {/* 햄버거 메뉴 아이콘 - 제공된 HTML 기반 */}
        <div className="flex h-14 items-center justify-start gap-2.5 overflow-hidden py-3 pl-3">
          {/* 햄버거 메뉴 아이콘 플레이스홀더 (w-6 h-6) - 피그마에 맞춰 배경색 blue-900 임시 적용 또는 Menu 컴포넌트 사용 */}
          <Menu size={24} /> {/* Menu 아이콘: size 24 */}
        </div>
      </div>
      {/* 하단 구분선 추가 - 이미지에 맞춰 얇은 선 추가 */}
      <div className="h-px w-full bg-black/20"></div>
    </div>
  )
}

export default NavigationBar
