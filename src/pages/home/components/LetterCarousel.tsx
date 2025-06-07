import { cn } from '@/lib/utils'
import LetterCard from '@/pages/home/components/LetterCard'

interface Props {
  className?: string
}

const LetterCarousel = ({ className }: Props) => {
  return (
    <section className={cn('relative w-full overflow-hidden', className)}>
      <div className="flex w-[2300px] gap-8 pb-9 pl-5">
        <LetterCard isFocused={true} />
        <LetterCard isFocused={false} />
        <LetterCard isFocused={false} />
        <LetterCard isFocused={false} />
      </div>

      <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent" />
    </section>
  )
}

export default LetterCarousel
