import { cn } from '@/lib/utils'

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

      {/* Indicator */}
      {IndicatorLimit > 1 && (
        <div className="flex items-center gap-1">
          {Array.from({ length: IndicatorLimit }, (_, i) => (
            <div
              key={i}
              onClick={(e) => {
                e.preventDefault()
                onIndicatorClick?.(i)
              }}
              className={`h-[8px] w-[8px] cursor-pointer rounded-full transition-all duration-300 ${
                index === i ? 'bg-red-40 w-[14px]' : 'bg-gray-40'
              }`}
            />
          ))}
        </div>
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
