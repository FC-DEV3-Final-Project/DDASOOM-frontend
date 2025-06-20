import { cn } from '@/lib/utils'
import CarouselIndicator from '@/shared/components/CarouselIndicator'

interface CarouselButtonProps {
  IndicatorLimit?: number
  className?: string
  index: number
  onPrev?: () => void
  onNext?: () => void
  onIndicatorClick?: (index: number) => void
}

const CarouselButton = ({
  IndicatorLimit = 0,
  className,
  index,
  onPrev,
  onNext,
  onIndicatorClick,
}: CarouselButtonProps) => {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {/* Prev */}
      <div
        onClick={(e) => {
          e.preventDefault()
          onPrev?.()
        }}
        className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white"
      >
        <img src="/icon/Arrow.svg" alt="이전" className="scale-x-[-1]" />
      </div>

      {/* Indicator 필요하다면 추가됨 */}
      {IndicatorLimit > 1 && (
        <CarouselIndicator
          onIndicatorClick={onIndicatorClick}
          index={index}
          IndicatorLimit={IndicatorLimit}
        />
      )}

      {/* Next */}
      <div
        onClick={(e) => {
          e.preventDefault()
          onNext?.()
        }}
        className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white"
      >
        <img src="/icon/Arrow.svg" alt="다음" />
      </div>
    </div>
  )
}

export default CarouselButton
