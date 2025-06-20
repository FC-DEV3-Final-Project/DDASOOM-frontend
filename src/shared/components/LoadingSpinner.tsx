import HeartSpinner from '@/shared/components/HeartSpinner'

interface LoadingSpinnerProps {
  text?: string
}

/**
 * 페이지 또는 컴포넌트 로딩 시 중앙에 표시되는 스피너 컴포넌트
 * @param text - 스피너와 함께 표시될 텍스트 (기본값: '로딩 중...')
 */
const LoadingSpinner = ({ text = '로딩 중...' }: LoadingSpinnerProps) => {
  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center gap-4"
      aria-label={text}
      role="status"
    >
      <HeartSpinner className="size-16 text-[#F14F4D]" />
      <p className="text-lg font-semibold text-[#58616A]">{text}</p>
    </div>
  )
}

export default LoadingSpinner
