import { useState, useRef } from 'react'
import { ChevronDown, CalendarDays, Search, X } from 'lucide-react'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'

interface FilterBarProps {
  onSortChange: (sort: '기증일' | '생일') => void
  currentSort: '기증일' | '생일'
  onYearChange: (year: string) => void
  selectedYear: string
  onSearch: (params: { keyword: string; startDate: string; endDate: string }) => void
  searchKeyword: string
  searchDateRange: { from: string; to: string }
}

const FilterBar = ({
  onSortChange,
  currentSort,
  onYearChange,
  selectedYear: externalSelectedYear,
  onSearch,
  searchKeyword,
  searchDateRange,
}: FilterBarProps) => {
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false)
  const [dateRange, setDateRange] = useState(searchDateRange)
  const [tempKeyword, setTempKeyword] = useState(searchKeyword)
  const [isDateFocus, setIsDateFocus] = useState(false)
  const fromInputRef = useRef<HTMLInputElement>(null)
  const toInputRef = useRef<HTMLInputElement>(null)
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 1023px)')

  // 연도 목록 생성 (2013년부터 현재 년도까지)
  const currentYear = new Date().getFullYear()
  const years = [
    '전체 연도',
    ...Array.from({ length: currentYear - 2012 }, (_, i) => String(currentYear - i)),
  ]

  // 엔터키 처리
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  // 검색 처리
  const handleSearch = () => {
    onSearch({
      keyword: tempKeyword,
      startDate: dateRange.from,
      endDate: dateRange.to,
    })
    if (isMobile) {
      setIsSearchPanelOpen(false)
    }
  }

  return (
    <div className="w-full py-4">
      <div className="lg:flex lg:items-center lg:justify-between">
        {/* Part 1: 데스크탑 좌측 필터 그룹 / 모바일 상단 필터 그룹 */}
        <div className="lg:flex lg:items-center lg:gap-[32px]">
          {/* 연도 드롭다운 & 모바일 검색 토글 */}
          <div className="flex items-center justify-between">
            <div className="relative">
              <button
                className="flex items-center text-[19px] font-bold"
                onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                aria-haspopup="true"
                aria-expanded={isYearDropdownOpen}
              >
                {externalSelectedYear}
                <ChevronDown
                  size={24}
                  className={`ml-2 transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isYearDropdownOpen && (
                <div className="absolute top-full left-0 z-10 mt-2 w-[140px] rounded-[12px] border border-[#E5E7EB] bg-white py-2 shadow-lg">
                  {years.map((year) => (
                    <button
                      key={year}
                      className={`w-full px-4 py-2 text-left text-[15px] hover:bg-[#F4F5F6] ${
                        externalSelectedYear === year
                          ? 'font-bold text-[#F14F4D]'
                          : 'text-[#33363D]'
                      }`}
                      onClick={() => {
                        onYearChange(year)
                        setIsYearDropdownOpen(false)
                      }}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="lg:hidden"
              onClick={() => setIsSearchPanelOpen(!isSearchPanelOpen)}
              aria-expanded={isSearchPanelOpen}
              aria-controls="search-panel"
            >
              {isSearchPanelOpen ? <X size={24} /> : <Search size={24} />}
            </button>
          </div>
          {/* 정렬 버튼 */}
          <div className="mt-4 lg:mt-0">
            <div role="group" aria-label="정렬 순서" className="flex items-center">
              <div className="flex w-full items-center gap-1 rounded-full bg-[#F4F5F6] p-1 lg:w-auto">
                <button
                  className={`h-[32px] flex-1 rounded-full px-3 text-center text-[15px] transition lg:flex-none ${
                    currentSort === '기증일'
                      ? 'bg-white font-bold text-[#F14F4D]'
                      : 'bg-transparent'
                  }`}
                  onClick={() => onSortChange('기증일')}
                >
                  기증일 순
                </button>
                <button
                  className={`h-[32px] flex-1 rounded-full px-3 text-center text-[15px] transition lg:flex-none ${
                    currentSort === '생일' ? 'bg-white font-bold text-[#F14F4D]' : 'bg-transparent'
                  }`}
                  onClick={() => onSortChange('생일')}
                >
                  생일 순
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: 데스크탑 우측 필터 그룹 / 모바일 확장 패널 */}
        <div
          id="search-panel"
          className={`flex w-full flex-col gap-5 overflow-hidden transition-all duration-500 ease-in-out ${isSearchPanelOpen ? 'max-h-[500px] pt-5 opacity-100' : 'max-h-0 pt-0 opacity-0'} lg:mt-0 lg:max-h-none lg:w-auto lg:flex-row lg:items-center lg:gap-4 lg:overflow-visible lg:p-0 lg:opacity-100`}
        >
          {/* 기증자명 검색 */}
          <div className="flex w-full flex-col items-start gap-2 lg:w-auto lg:flex-row lg:items-center">
            <label
              htmlFor="donor-name-search"
              className="text-[13px] font-bold whitespace-nowrap text-[#131416] lg:text-[15px]"
            >
              기증자명
            </label>
            <input
              type="text"
              id="donor-name-search"
              className="w-full rounded-full border border-[#CDD1D5] py-2 pr-[8px] pl-[14px] text-[13px] outline-none focus:border-[#F14F4D] lg:w-[160px] lg:text-[15px]"
              placeholder="기증자 성함 입력"
              value={tempKeyword}
              onChange={(e) => setTempKeyword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          {/* 날짜 필터 */}
          <div className="flex w-full flex-col items-start gap-2 lg:w-auto lg:flex-row lg:items-center">
            <label className="text-[13px] font-bold whitespace-nowrap text-[#131416] lg:text-[15px]">
              기증일
            </label>
            <div className="flex w-full items-center lg:w-auto">
              <div className="relative w-full lg:w-auto">
                <input
                  ref={fromInputRef}
                  type="text"
                  onFocus={() => setIsDateFocus(true)}
                  onBlur={(e) => !e.target.value && setIsDateFocus(false)}
                  id="donate-date-from"
                  aria-label="기증일 검색 시작일"
                  max={dateRange.to || undefined}
                  className="w-full rounded-full border border-[#CDD1D5] py-2 pr-[8px] pl-[14px] text-[13px] outline-none focus:border-[#F14F4D] lg:w-[160px] lg:text-[15px]"
                  value={isDateFocus ? dateRange.from : dateRange.from || 'YYYY-MM-DD'}
                  onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                />
                <div
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                  onClick={() => fromInputRef.current?.showPicker()}
                >
                  <CalendarDays size={20} />
                </div>
              </div>
              <span className="mx-2">-</span>
              <div className="relative w-full lg:w-auto">
                <input
                  ref={toInputRef}
                  type="text"
                  onFocus={() => setIsDateFocus(true)}
                  onBlur={(e) => !e.target.value && setIsDateFocus(false)}
                  id="donate-date-to"
                  aria-label="기증일 검색 종료일"
                  min={dateRange.from || undefined}
                  className="w-full rounded-full border border-[#CDD1D5] py-2 pr-[8px] pl-[14px] text-[13px] outline-none focus:border-[#F14F4D] lg:w-[160px] lg:text-[15px]"
                  value={isDateFocus ? dateRange.to : dateRange.to || 'YYYY-MM-DD'}
                  onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
                />
                <div
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                  onClick={() => toInputRef.current?.showPicker()}
                >
                  <CalendarDays size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* 검색 버튼 */}
          <button
            onClick={handleSearch}
            className="w-full rounded-full bg-[#F14F4D] py-3 text-[15px] font-bold text-white transition hover:bg-red-500 lg:ml-2 lg:w-auto lg:border-[1.6px] lg:border-[#F57C7B] lg:bg-transparent lg:px-[18px] lg:py-[8.5px] lg:text-[#F57C7B] lg:hover:bg-[#F04E45] lg:hover:text-white"
          >
            검색
          </button>

          {/* 구분선: 모바일에서만 표시 */}
          <div className="w-full border-b border-[#58616A] lg:hidden" />
        </div>
      </div>
    </div>
  )
}

export default FilterBar
