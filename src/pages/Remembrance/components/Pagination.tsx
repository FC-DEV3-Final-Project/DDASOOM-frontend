import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'

interface PaginationProps {
  page: number
  totalPages: number
  onChange: (page: number) => void
  isFetching?: boolean
}

const Pagination = ({ page, totalPages, onChange, isFetching }: PaginationProps) => {
  // 화면 너비가 767px 이하이면 true를 반환하는 isMobile 상태
  const isMobile = useMediaQuery('(max-width: 767px)')
  // 모바일에서는 숫자 8개, 데스크톱에서는 10개를 표시
  const groupSize = isMobile ? 8 : 10
  const groupStart = Math.floor(page / groupSize) * groupSize
  const groupEnd = Math.min(groupStart + groupSize, totalPages)

  return (
    <nav className="flex items-center justify-center gap-2 py-4 md:gap-8" aria-label="페이지네이션">
      <button
        disabled={page === 0 || isFetching}
        onClick={() => onChange(page - 1)}
        className="flex items-center rounded-full px-2 py-[7px] text-[17px] hover:bg-[#F4F5F6] enabled:hover:text-[#F14F4D] disabled:cursor-not-allowed disabled:text-[#8A949E]"
        aria-label="이전 페이지로 이동"
      >
        <ChevronLeft size={20} />
        <span className="hidden md:inline">이전</span>
      </button>
      <div className="flex gap-1 md:gap-2">
        {Array.from({ length: groupEnd - groupStart }, (_, i) => {
          const pageNum = groupStart + i
          return (
            <button
              key={pageNum}
              disabled={isFetching}
              className={`h-8 w-8 rounded-full text-[13px] md:h-10 md:w-10 md:text-[17px] ${
                page === pageNum
                  ? 'bg-[#F14F4D] font-bold text-white'
                  : 'bg-transparent hover:bg-[#F4F5F6]'
              } disabled:opacity-50`}
              onClick={() => onChange(pageNum)}
              aria-current={page === pageNum ? 'page' : undefined}
              aria-label={`${pageNum + 1}페이지로 이동`}
            >
              {pageNum + 1}
            </button>
          )
        })}
      </div>
      <button
        disabled={page === totalPages - 1 || isFetching}
        onClick={() => onChange(page + 1)}
        className="flex items-center rounded-full px-2 py-[7px] text-[17px] hover:bg-[#F4F5F6] enabled:hover:text-[#F14F4D] disabled:cursor-not-allowed disabled:text-[#8A949E]"
        aria-label="다음 페이지로 이동"
      >
        <span className="hidden md:inline">다음</span>
        <ChevronRight size={20} />
      </button>
    </nav>
  )
}

export default Pagination
