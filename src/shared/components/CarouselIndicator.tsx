import { cn } from '@/lib/utils'

interface Props {
  IndicatorLimit: number
  index: number
  onIndicatorClick?: (index: number) => void
  className?: string
}

const CarouselIndicator = ({ IndicatorLimit, onIndicatorClick, index, className }: Props) => {
  return (
    <div className={cn('flex items-center gap-1', className)}>
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
  )
}
export default CarouselIndicator
