import { useNavigate } from 'react-router-dom'
import LetterCard from '@/pages/recipient_letter/components/LetterCard'

interface LetterCardItem {
  letterSeq: number
  letterTitle: string
  letterWriter: string
  readCount: number
  writeTime: string
  commentCount: number
}

interface Props<T extends LetterCardItem> {
  items: T[]
}
const ContainerContent = <T extends LetterCardItem>({ items }: Props<T>) => {
  const navigate = useNavigate()
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {items.map((item, index) => (
        <LetterCard
          key={index}
          item={item}
          onClick={() => {
            navigate(`/remembrance/letter/${item.letterSeq}`)
          }}
        />
      ))}
    </div>
  )
}
export default ContainerContent
