import { useState } from 'react'
import { formatDate } from '@/shared/utils/timeUtils'

interface Comment {
  commentWriter: string
  commentPasscode: string
  contents: string
  writeTime: string
}

interface Props {
  comments: Comment[]
  letterSeq: number
  onAddComment?: () => void // 등록 후 갱신 요청 콜백 (선택)
}

const CommentContainer = ({ comments, letterSeq, onAddComment }: Props) => {
  const [name, setName] = useState('')
  const [passcode, setPasscode] = useState('')
  const [commentText, setCommentText] = useState('')

  const validateForm = () => {
    const errors: string[] = []

    if (!name.trim()) {
      errors.push('추모자 이름을 입력해주세요.')
    } else if (!/^[가-힣a-zA-Z]{1,10}$/.test(name)) {
      errors.push('추모자 이름은 한글 또는 영문 10자 이내로 입력해주세요.')
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passcode)) {
      errors.push('비밀번호는 영문+숫자 조합으로 8자 이상이어야 합니다.')
    }

    if (!commentText.trim()) {
      errors.push('댓글 내용을 입력해주세요.')
    }

    return errors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errors = validateForm()
    if (errors.length > 0) {
      alert(errors.join('\n'))
      return
    }

    const payload = {
      commentWriter: name,
      commentPasscode: passcode,
      contents: commentText,
    }

    try {
      const res = await fetch(`/api/heavenLetters/${letterSeq}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('댓글 등록 실패')

      alert('댓글이 등록되었습니다.')

      // 댓글 등록 후 갱신 요청
      onAddComment?.()

      // 입력값 초기화
      setName('')
      setPasscode('')
      setCommentText('')
    } catch (err) {
      alert('오류가 발생했습니다.')
      console.error(err)
    }
  }

  return (
    <div>
      <div className="mb-5">
        <h3>
          <span className="mr-1 text-[24px] font-bold">댓글</span>
          <span className="text-red-40 text-[24px] font-bold">{comments.length}</span>
        </h3>
      </div>
      <div className="bg-red-5 text-gray-80 flex w-full items-center gap-4 rounded-[20px] p-4">
        <img src="/icon/system-info.svg" alt="" />
        <p>
          기증자에 대한 추모 분위기를 해치거나, 비방의 글 등이 게시가 될 경우 관리자에 의해 삭제될
          수 있습니다.
        </p>
      </div>

      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="flex gap-[60px]">
          <label className="flex gap-[14px]">
            <h3 className="text-[19px] font-bold">이름</h3>
            <div className="flex flex-col gap-1">
              <input
                placeholder="이름을 입력해주세요"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-gray-20 h-10 w-[240px] rounded-[100px] border p-2 pl-[14px] focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
              <span className="text-red-40 px-[14px] text-[13px] font-normal">
                (한글/영문 최대 10글자)
              </span>
            </div>
          </label>
          <label className="flex gap-[14px]">
            <h3 className="text-[19px] font-bold">비밀번호</h3>
            <div className="flex flex-col gap-1">
              <input
                placeholder="비밀번호를 입력해주세요"
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="border-gray-20 h-10 w-[240px] rounded-[100px] border p-2 pl-[14px] focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
              <span className="text-red-40 px-[14px] text-[13px] font-normal">
                (영문+숫자 최소 8자 이상)
              </span>
            </div>
          </label>
        </div>

        <div className="border-gray-20 mt-5 flex min-h-[100px] rounded-[20px] border p-3 pl-[15px]">
          <textarea
            placeholder="댓글을 입력해주세요"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full resize-none text-[15px]"
            maxLength={1000}
          />
          <div className="flex items-end gap-[10px]">
            <p className="text-gray-40 flex w-[90px] justify-end">{commentText.length}/1000</p>
            <button
              type="submit"
              className="bg-red-40 flex h-8 w-8 items-center justify-center rounded-full"
            >
              <img src="/icon/btn-shortcut.svg" alt="" />
            </button>
          </div>
        </div>
      </form>

      <ul className="mt-[60px] flex flex-col gap-6">
        {comments.map((comment, idx) => (
          <li key={idx} className="flex items-end gap-3">
            <span className="bg-gray-5 text-gray-95 border-gray-10 rounded-[20px] rounded-tl-[4px] px-6 py-5 text-[15px]">
              {comment.contents}
            </span>
            <div className="flex items-end gap-2">
              <span className="text-gray-60 text-[13px]">{formatDate(comment.writeTime)}</span>
              <span className="border-gray-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border">
                <img src="/icon/edit.svg" alt="수정" />
              </span>
              <span className="border-gray-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border">
                <img src="/icon/delete.svg" alt="삭제" />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommentContainer
