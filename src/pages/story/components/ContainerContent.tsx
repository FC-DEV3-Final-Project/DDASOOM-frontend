import { useNavigate } from 'react-router-dom'
import LetterCard from '@/pages/story/components/LetterCard'

interface LetterCardItem {
  donorName: string
  storySeq: number
  storyTitle: string
  storyWriter: string
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
            navigate(`/remembrance/story/${item.storySeq}`)
          }}
        />
      ))}
    </div>
  )
}
export default ContainerContent
