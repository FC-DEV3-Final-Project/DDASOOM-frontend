import type { Reaction } from '@/pages/RemembranceDetail/types'
import React, { useState } from 'react'
// import { usePostEmoji } from '@/pages/RemembranceDetail/queries/usePostEmoji'

interface ReactionButtonsProps {
  donateSeq?: number
  reactions?: Reaction[]
}

const ReactionButtons: React.FC<ReactionButtonsProps> = ({ reactions = [] }) => {
  // 리액션 카운트 로컬 상태
  const [localReactions, setLocalReactions] = useState<Reaction[]>(reactions)
  // 클릭한 리액션 이름 목록을 Set으로 관리
  const [clickedReactions, setClickedReactions] = useState<Set<string>>(new Set())
  // const { mutate: postEmoji, isPending } = usePostEmoji()

  // 버튼 클릭 핸들러
  const handleEmojiClick = (emoji: string) => {
    if (clickedReactions.has(emoji)) return
    // 카운트 증가
    setLocalReactions((prev) =>
      prev.map((reaction) =>
        reaction.name === emoji ? { ...reaction, count: reaction.count + 1 } : reaction,
      ),
    )
    // 클릭한 리액션 추가
    setClickedReactions((prev) => new Set(prev).add(emoji))
    // 서버 통신
    // postEmoji({ donateSeq, emoji })
  }

  return (
    <div className="grid min-h-[70px] w-[380px] grid-cols-3 gap-x-[6px] gap-y-[6px] p-0">
      {localReactions.map((reaction) => (
        <button
          key={reaction.name}
          className={`flex items-center rounded-full border border-gray-200 bg-white px-2 py-1 text-[14px] font-semibold shadow transition-all duration-200 hover:scale-105 hover:bg-[#F0F5FF] hover:shadow-md ${clickedReactions.has(reaction.name) ? 'border-green-600 bg-green-50' : ''}`}
          onClick={() => handleEmojiClick(reaction.name)}
          disabled={clickedReactions.has(reaction.name)}
          style={{ minWidth: 0 }}
        >
          <img src={reaction.icon} alt={reaction.name} className="mr-1 h-6 w-6" />
          <span className="text-gray-80 overflow-hidden whitespace-nowrap">{reaction.text}</span>
          <span
            className={reaction.count > 0 ? 'ml-1 font-bold text-green-600' : 'ml-1 text-gray-500'}
          >
            {reaction.count}
          </span>
        </button>
      ))}
    </div>
  )
}

export default ReactionButtons
