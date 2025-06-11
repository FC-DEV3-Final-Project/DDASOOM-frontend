import { cn } from '@/lib/utils'
import { useMemo } from 'react'
import LetterCard from '@/pages/home/components/LetterCard'

interface Props {
  className?: string
  focusedIndex: number
  cardCount: number
  letters: { donorName: string; letterSeq: number; letterTitle: string; letterWriter: string }[]
}

const cardWidth = 354 // 카드 하나의 가로 길이 (gap 포함해서 조정)

const LetterCarousel = ({ className, focusedIndex, cardCount, letters }: Props) => {
  // 카드 리스트를 left로 얼마나 이동할지 계산
  const offsetX = useMemo(() => {
    return -focusedIndex * cardWidth
  }, [focusedIndex])

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
          <LetterCard key={i} isFocused={i === focusedIndex} letter={letter} />
        ))}
      </div>

      <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent" />
    </section>
  )
}

export default LetterCarousel
