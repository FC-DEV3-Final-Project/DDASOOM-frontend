import LetterCard from '@/pages/home/components/LetterCard'

const LetterCarousel = () => {
  return (
    <div className="flex gap-8">
      <LetterCard isFocused={true} />
      <LetterCard isFocused={false} />
    </div>
  )
}
export default LetterCarousel
