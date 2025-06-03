import LetterCard from '@/pages/home/components/LetterCard'

const LetterCarousel = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex w-[2300px] gap-8">
        <LetterCard isFocused={true} />
        <LetterCard isFocused={false} />
        <LetterCard isFocused={false} />
        <LetterCard isFocused={false} />
      </div>

      {/* Fade out effect on the right edge */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent" />
    </section>
  )
}

export default LetterCarousel
