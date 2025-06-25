import type { Comment, Reaction } from '@/pages/RemembranceDetail/types'
import ReactionButtons from '@/pages/RemembranceDetail/components/ReactionButtons'
import CommentList from '@/pages/RemembranceDetail/components/CommentList'
import { MoveUp } from 'lucide-react'

interface CommentSectionProps {
  comments: Comment[]
  reactions: Reaction[]
  myReaction: string | null
  onReaction: (name: string) => void
  comment: string
  password: string
  onCommentChange: (v: string) => void
  onPasswordChange: (v: string) => void
  onRegister: () => void
  className?: string
  // 기타 필요한 핸들러들 추가 가능
}

const CommentSection = ({
  comments,
  reactions,
  myReaction,
  onReaction,
  comment,
  password,
  onCommentChange,
  onPasswordChange,
  onRegister,
  className,
}: CommentSectionProps) => {
  return (
    <aside
      className={`flex w-[420px] flex-col rounded-[20px] border border-[#E6E8EA] bg-[#F4F5F6] px-[20px] py-[20px] shadow-lg ${className ? ` ${className}` : ''}`}
    >
      {/* 타이틀 */}
      <h2 className="font-pretendard mb-2 flex items-center gap-2 text-[24px] font-bold text-[#33363D]">
        댓글
        <span className="text-[#34A354]">{comments.length}</span>
      </h2>
      {/* 댓글 리스트 */}
      <CommentList comments={comments} as="ul" />
      <div className="h-[2px] w-full bg-[#E6E8EA]" />
      <div className="flex w-full flex-col gap-[18px] pt-[14px]">
        {/* 안내문구 */}
        <div className="text-[12px] text-[#8A949E]">
          비방 등 추모를 해치는 댓글은 관리자에 의해 삭제될 수 있습니다.
        </div>
        {/* 리액션 버튼 영역 */}
        <div className="grid min-h-[70px] w-[380px] grid-cols-3 gap-x-[6px] gap-y-[6px] p-0">
          <ReactionButtons reactions={reactions} myReaction={myReaction} onReaction={onReaction} />
        </div>
        <div>
          {/* 비밀번호 입력 (Figma 스타일) */}
          <div className="mb-2 flex items-center gap-[14px]">
            <label className="text-[15px] font-bold text-[#58616A]">비밀번호</label>
            <input
              type="password"
              className="focus:border-primary h-10 flex-1 rounded-full border border-[#E6E8EA] bg-white py-1 pr-[8px] pl-[14px] text-[15px] text-[#8A949E] outline-none placeholder:text-[#8A949E]"
              placeholder="새 비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
            />
          </div>
          {/* 댓글 입력 (Figma 스타일) */}
          <div className="relative flex w-full items-center rounded-[22px] border border-[#E6E8EA] bg-white py-[10px] pr-[100px] pl-5">
            <input
              className="w-full border-none bg-transparent text-[15px] text-[#8A949E] outline-none placeholder:text-[#8A949E]"
              placeholder="댓글을 입력해주세요"
              maxLength={1000}
              value={comment}
              onChange={(e) => onCommentChange(e.target.value)}
            />
            <span className="absolute top-1/2 right-[50px] -translate-y-1/2 text-[15px] text-[#8A949E]">
              {comment.length}/1000
            </span>
            <button
              className="absolute top-1/2 right-3 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#34A354]"
              aria-label="댓글 등록"
              onClick={onRegister}
              type="button"
            >
              <MoveUp size={22} color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default CommentSection
