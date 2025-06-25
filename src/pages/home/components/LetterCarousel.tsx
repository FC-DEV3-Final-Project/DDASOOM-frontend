import { cn } from '@/lib/utils'
import { useMemo } from 'react'
import LetterCard from '@/pages/home/components/LetterCard'
import { useNavigate } from 'react-router-dom'

interface Props {
  className?: string
  focusedIndex: number
  cardCount: number
  letters: { donorName: string; letterSeq: number; letterTitle: string; letterWriter: string }[]
}

const cardWidth = 354 // 카드 하나의 가로 길이 (gap 포함해서 조정)

const LetterCarousel = ({ className, focusedIndex, cardCount, letters }: Props) => {
  const navigate = useNavigate()
  const isMobile = className?.includes('sm:hidden')
  const offsetX = useMemo(() => -focusedIndex * cardWidth, [focusedIndex])

  if (isMobile) {
    return (
      <div
        className={cn(
          'scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth',
          className,
        )}
      >
        {letters.map((letter, i) => (
          <div key={i} className="shrink-0 snap-center">
            <LetterCard
              key={i}
              isFocused={true}
              letter={letter}
              onClick={() => {
                navigate(`/remembrance/letter/${letter.letterSeq}`)
              }}
            />
          </div>
        ))}
      </div>
    )
  }

  // 데스크탑 기존 슬라이드 방식 유지

  return (
    <section className={cn('relative w-full overflow-hidden', className)}>
      <div
        className="flex gap-8 pb-9 pl-5 transition-transform duration-500 ease-in-out"
        style={{
          width: `${cardCount * cardWidth}px`,
          transform: `translateX(${offsetX}px)`,
        }}
      >
        {letters.map((letter, i) => (
          <LetterCard
            key={i}
            isFocused={i === focusedIndex}
            letter={letter}
            onClick={() => {
              navigate(`/remembrance/letter/${letter.letterSeq}`)
            }}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent" />
    </section>
  )
}
export default LetterCarousel
