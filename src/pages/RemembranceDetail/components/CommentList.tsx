import { useRef, useEffect } from 'react'
import type { Comment } from '@/pages/RemembranceDetail/types'
import CommentItem from '@/pages/RemembranceDetail/components/CommentItem'

interface CommentListProps {
  comments: Comment[]
  as?: 'ul' | 'div'
}

function CommentList({ comments, as = 'div' }: CommentListProps) {
  const listRef = useRef<HTMLDivElement & HTMLUListElement>(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight // 맨 아래로 이동
    }
  }, [comments.length])

  if (as === 'ul') {
    return (
      <ul
        ref={listRef as React.RefObject<HTMLUListElement>}
        className="bubble-scrollbar flex h-[505px] flex-col justify-end gap-[14px] overflow-x-hidden overflow-y-auto py-[20px]"
      >
        {comments.map((c) => (
          <li key={c.id} className="list-none">
            <CommentItem comment={c} />
          </li>
        ))}
      </ul>
    )
  }
  return (
    <div
      ref={listRef as React.RefObject<HTMLDivElement>}
      className="bubble-scrollbar flex h-[505px] flex-col justify-end gap-[14px] overflow-x-hidden overflow-y-auto py-[20px]"
    >
      {comments.map((c) => (
        <CommentItem key={c.id} comment={c} />
      ))}
    </div>
  )
}

export default CommentList
