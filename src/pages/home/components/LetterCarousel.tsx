import { cn } from '@/lib/utils'
import { useMemo } from 'react'
import LetterCard from '@/pages/home/components/LetterCard'
import { useNavigate } from 'react-router-dom'

interface Letter {
  donorName: string
  letterSeq: number
  letterTitle: string
  letterWriter: string
  // ...필요시 추가
}

interface Props {
  className?: string
  focusedIndex: number
  cardCount: number
  letters: Letter[]
  // 외부에서 컴포넌트 주입 (옵셔널)
  renderCard?: (letter: Letter, idx: number) => React.ReactNode
}

const cardWidth = 354 // 카드 하나의 가로 길이 (gap 포함해서 조정)

const LetterCarousel = ({ className, focusedIndex, cardCount, letters, renderCard }: Props) => {
  const navigate = useNavigate()
  const isMobile = className?.includes('sm:hidden')
  const offsetX = useMemo(() => -focusedIndex * cardWidth, [focusedIndex])

  // 카드 렌더 함수: 외부에서 주입받으면 그걸 사용, 아니면 기존 LetterCard 사용
  const render = (letter: Letter, i: number) =>
    renderCard ? (
      renderCard(letter, i)
    ) : (
      <LetterCard
        key={i}
        isFocused={i === focusedIndex}
        letter={letter}
        onClick={() => navigate(`/remembrance/letter/${letter.letterSeq}`)}
      />
    )

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
            {render(letter, i)}
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
        {letters.map((letter, i) => render(letter, i))}
      </div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent" />
    </section>
  )
}
export default LetterCarousel
