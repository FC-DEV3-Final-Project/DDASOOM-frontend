import LetterCard from '@/pages/heaven_letter/components/LetterCard'

interface LetterCardItem {
  letterSeq: number
  letterTitle: string
  letterWriter: string
  donorName: string
  readCount: number
  writeTime: string
}

interface Props<T extends LetterCardItem> {
  items: T[]
}

const ContainerContent = <T extends LetterCardItem>({ items }: Props<T>) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {items.map((item, index) => (
        <LetterCard key={index} item={item} />
      ))}
    </div>
  )
}
export default ContainerContent
