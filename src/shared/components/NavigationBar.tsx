import React, { useState } from 'react'
import { ChevronDown, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MenuItem {
  text: string
  hasDropdown: boolean
  dropdownItems: Record<string, Record<string, string> | string>
}

export const links: MenuItem[] = [
  {
    text: '장기·조직기증',
    hasDropdown: true,
    dropdownItems: {
      '장기·조직기증이란': {
        '장기·조직기증': '/home',
        'KODA 코디네이터': '/home',
        뇌사판정: '/home',
        '장기·조직 기증적합성 평가': '/home',
        통보센터: '/home',
        '장기 조직 분배 체계': '/home',
        '기증 팩트 체크': '/home',
        '기증 용어 설명': '/home',
      },
      협약기관: {
        '뇌사자 관리 업무': '/home',
        '기증활성화 프로그램 협약 기관': '/home',
      },
      '기증자 예우': {
        '기증자 예우 및 유가족 지원': '/home',
        '기증 후 행정 절차': '/home',
        '기증자 추모 / 유가족 행사': '/home',
      },
      '기증 활성화 프로그램': {
        '기증 활성화 프로그램 소개': '/home',
        'MRR / HAS': '/home',
      },
      'KODA LAB': '/home',
    },
  },
  {
    text: '추모공간',
    hasDropdown: true,
    dropdownItems: {
      '기증자 추모관': '/home',
      '하늘나라 편지': 'remember/heavenletter',
      '수혜자 편지': '/home',
      '기증 後 스토리': '/home',
    },
  },
  {
    text: '홍보·알림',
    hasDropdown: true,
    dropdownItems: {
      홍보: {
        간행물: '/home',
        동영상: '/home',
        연간보고서: '/home',
        '생명나눔 도서관': '/home',
      },
      '기관 일정': '/home',
      '기관 행사': '/home',
      '보도 자료': '/home',
      기증희망등록: '/home',
      '소통게시판(민원신청)': '/home',
      '생명나눔 이야기': '/home',
    },
  },
  {
    text: '정보통계',
    hasDropdown: true,
    dropdownItems: {
      '기증 통계': {
        기증자: '/home',
        '5년간 기증 통계 비교': '/home',
        '연도별 기증 추이': '/home',
      },
      '정보 공개': {
        정보공개제도안내: '/home',
        '사전 정보 공개': '/home',
        사업실명제: '/home',
        경영공시: '/home',
        '의료기관 뇌사추정자 신고 현황': '/home',
        적극행정: '/home',
        '공공데이터 개방': '/home',
      },
      '저작권 정책': '/home',
    },
  },
  {
    text: 'KODA',
    hasDropdown: true,
    dropdownItems: {
      '기관 소개': {
        '비전 및 목표': '/home',
        'ESG 경영': '/home',
        '연도별 기증 추이': '/home',
      },
      '인권·윤리경영': {
        인권경영: '/home',
        윤리경영: '/home',
        '인권·윤리경영 게시판': '/home',
        '클린신고 (부패·공익신고)': '/home',
      },
      인사말: '/home',
      '조직 안내': '/home',
      '인재 채용': '/home',
      공지사항: '/home',
      '위치 안내': '/home',
    },
  },
]

// NavigationLink 컴포넌트
interface NavigationLinkProps {
  text: string
  hasDropdown?: boolean
  isHovered: boolean
  isAnyLinkHovered: boolean
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  text,
  hasDropdown = false,
  isHovered,
  isAnyLinkHovered,
}) => {
  const textColorClass = isAnyLinkHovered && !isHovered ? 'text-gray-400' : 'text-black'
  const iconRotationClass = isHovered ? '-rotate-[180deg]' : 'rotate-0'

  return (
    <div
      className={`flex h-16 items-center justify-start gap-2 transition-colors duration-300 ${textColorClass}`}
    >
      <div className="text-xl leading-loose font-bold tracking-tight">{text}</div>
      {hasDropdown && (
        <ChevronDown
          size={24}
          className={`transition-transform duration-[500ms] ease-in-out ${iconRotationClass}`}
        />
      )}
    </div>
  )
}

// NavigationBar 컴포넌트
const NavigationBar: React.FC = () => {
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState<number | null>(null)
  const [isHamburgerHovered, setIsHamburgerHovered] = useState(false)

  const currentDropdown = isHamburgerHovered
    ? links.map((link) => link.dropdownItems)
    : hoveredLinkIndex !== null
      ? [links[hoveredLinkIndex]?.dropdownItems]
      : null

  return (
    <div
      className="hidden w-full flex-col items-center bg-white/80 backdrop-blur-lg sm:flex"
      onMouseLeave={() => {
        setHoveredLinkIndex(null)
        setIsHamburgerHovered(false)
      }}
    >
      {/* 상단 네비게이션 바 */}
      <div className="mx-auto flex w-full max-w-[1300px] min-w-[1000px] items-center justify-between px-5">
        {/* 네비게이션 링크 */}
        <div className="flex items-center justify-start gap-14">
          {links.map((link, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                setHoveredLinkIndex(index)
                setIsHamburgerHovered(false)
              }}
            >
              <NavigationLink
                text={link.text}
                hasDropdown={link.hasDropdown}
                isHovered={hoveredLinkIndex === index && !isHamburgerHovered}
                isAnyLinkHovered={hoveredLinkIndex !== null}
              />
            </div>
          ))}
        </div>

        {/* 햄버거 메뉴 */}
        <div className="flex h-14 items-center justify-start gap-2.5 overflow-hidden py-3 pl-3">
          <Menu
            size={24}
            onMouseEnter={() => {
              setHoveredLinkIndex(null)
              setIsHamburgerHovered(true)
            }}
          />
        </div>
      </div>

      {/* 구분선 */}
      <div className="h-px w-full bg-black/20" />

      {/* 드롭다운 영역 */}
      {currentDropdown && (
        <div className="min-[1000px] flex min-h-[400px] w-[1300px] justify-start bg-white transition-all duration-500 ease-in-out">
          <div
            className={cn('flex w-full gap-8 px-5 py-6', {
              'grid grid-cols-5': isHamburgerHovered,
            })}
          >
            {currentDropdown.map((dropdown, idx) =>
              dropdown ? (
                <div
                  key={idx}
                  className={cn('grid w-full grid-cols-5 gap-8', {
                    'flex flex-col gap-6': isHamburgerHovered,
                  })}
                >
                  {Object.entries(dropdown).map(([category, value], subIdx) => (
                    <div key={subIdx}>
                      {typeof value === 'string' ? (
                        <a
                          href={value}
                          className="text-red-40 mb-2 block text-[17px] font-semibold hover:underline"
                        >
                          {category}
                          <b className="text-[18px] font-normal">{'  >'}</b>
                        </a>
                      ) : (
                        <>
                          <div className="text-red-40 mb-3 text-[17px] font-semibold">
                            {category}
                          </div>
                          <div className="bg-gray-5 rounded-[20px] px-5 py-[14px]">
                            {Object.entries(value).map(([label, path], linkIdx) => (
                              <a
                                key={linkIdx}
                                href={path}
                                className="text-gray-60 mb-1 block text-[15px] hover:underline"
                              >
                                {label}
                              </a>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ) : null,
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default NavigationBar
