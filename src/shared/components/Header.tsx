import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { links } from '@/shared/components/NavigationBar'

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null)

  const handleMenuClick = (index: number) => {
    if (activeMenuIndex === index) {
      setActiveMenuIndex(null) // 다시 누르면 닫힘
    } else {
      setActiveMenuIndex(index)
    }
  }

  // 팝업 열릴 때 body 스크롤 막기, 닫히면 원복
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen])

  return (
    <header className="flex w-full flex-col items-center bg-white/80">
      {/* 기존 헤더 상단 부분 생략... */}
      <div className="flex w-full max-w-[1300px] items-center justify-between px-5 pt-0 pb-[14px] sm:min-w-[1000px] sm:py-[14px]">
        {/* 로고 영역 */}
        <div className="flex w-[58px] flex-col items-center sm:w-[247px] sm:flex-row">
          <img src="/logos/kodaSymbol.png" alt="KODA Logo" className="w-[58px] sm:w-[150px]" />
          <img src="/logos/kodalogo.png" alt="KODA Logo" className="w-[58px] sm:w-[92px]" />
        </div>

        {/* 전화번호 및 햄버거 메뉴 */}
        <div>
          {/* 모바일: 햄버거 메뉴 및 전화번호 */}
          <div className="flex gap-3 sm:hidden">
            <div className="flex items-center gap-3 rounded-full border border-[#EAEAEA] px-[14px] py-1">
              <img src="/icon/phone.svg" alt="phone" className="h-4 w-4" />
              <div className="flex gap-2">
                <div className="text-gray-80 text-[13px]">의료진 전용</div>
                <div className="text-gray-80 border-l border-l-[#EAEAEA] pl-2 text-[13px]">
                  일반인 전용
                </div>
              </div>
            </div>
            {/* 햄버거 메뉴 버튼 */}
            <button onClick={() => setIsDrawerOpen(true)} aria-label="Open menu">
              <Menu size={24} />
            </button>
          </div>

          {/* 데스크탑: 전화번호 표시 */}
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

      {/* 모바일 메뉴 드로어 */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ overflowY: 'auto' }}
      >
        <div className="flex items-center justify-end border-b border-gray-200 px-5 py-4">
          <button
            onClick={() => {
              setIsDrawerOpen(false)
              setActiveMenuIndex(null)
            }}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-3 p-5">
          {links.map((link, index) => (
            <div key={index} className="w-full">
              <button
                onClick={() => handleMenuClick(index)}
                className="text-gray-80 flex w-full justify-between py-2 text-left text-[20px] font-semibold"
              >
                {link.text}
                <ChevronDown
                  size={24}
                  className={`transition-transform duration-[500ms] ease-in-out`}
                />
              </button>

              {/* 하위 메뉴: 활성화된 메뉴의 하위 메뉴만 */}
              {activeMenuIndex === index && link.hasDropdown && (
                <div className="mt-2">
                  {link.dropdownItems &&
                    Object.entries(link.dropdownItems!).map(([category, value], catIdx) => (
                      <div key={catIdx} className="mb-6">
                        {typeof value === 'string' ? (
                          <a
                            href={value}
                            className="text-red-40 mb-1 block text-[17px] font-semibold hover:underline"
                          >
                            {category} &gt;
                          </a>
                        ) : (
                          <>
                            <div className="text-red-40 mb-3 text-[17px] font-semibold">
                              {category}
                            </div>
                            <div className="bg-gray-5 flex flex-col gap-3 rounded-[20px] px-5 py-[14px]">
                              {Object.entries(value).map(([label, path], subIdx) => (
                                <a
                                  key={subIdx}
                                  href={path as string | undefined}
                                  className="text-[15px] text-gray-700 hover:underline"
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
              )}
            </div>
          ))}
          <div className="mt-5 flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-full border border-[#EAEAEA] px-[14px] py-2">
              <img src="/icon/phone.svg" alt="phone" className="h-4 w-4" />
              <div className="flex gap-2">
                <div className="text-gray-80 text-[13px]">의료진 전용 (뇌사시 통보)</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-[#EAEAEA] px-[14px] py-2">
              <img src="/icon/phone.svg" alt="phone" className="h-4 w-4" />
              <div className="flex gap-2">
                <div className="text-gray-80 text-[13px]">일반인 전용 (기증희망등록)</div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="border-gray-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border text-[#616161]">
              <img src="/icon/instagram.svg" alt="" width={20} />
            </div>
            <div className="border-gray-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border text-[#616161]">
              <img src="/icon/youtube.svg" alt="" width={20} />
            </div>
            <div className="border-gray-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border text-[#616161]">
              <img src="/icon/naver_blog.svg" alt="" width={20} />
            </div>
            <div className="border-gray-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border text-[#616161]">
              <img src="/icon/facebook.svg" alt="" width={20} />
            </div>
          </div>
        </nav>
      </div>

      {/* 배경 오버레이 */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setIsDrawerOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

export default Header
