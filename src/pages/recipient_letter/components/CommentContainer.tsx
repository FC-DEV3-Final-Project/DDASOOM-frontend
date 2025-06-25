import { useState } from 'react'
import { convertDate } from '@/shared/utils/timeUtils'
import EditCommentModal from '@/pages/recipient_letter/components/EditCommentModal'
import DeleteConfirmModal from '@/pages/recipient_letter/components/DeleteConfirmModal'

interface Comment {
  commentWriter: string
  commentPasscode: string
  contents: string
  writeTime: string
  commentSeq: number
}

interface Props {
  comments: Comment[]
  letterSeq: number
  onAddComment?: () => void
}

const CommentContainer = ({ comments, letterSeq, onAddComment }: Props) => {
  const [deleteTarget, setDeleteTarget] = useState<Comment | null>(null)
  const [deletePassword, setDeletePassword] = useState('')
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const [editTarget, setEditTarget] = useState<Comment | null>(null)
  const [editText, setEditText] = useState('')
  const [editPassword, setEditPassword] = useState('')
  const [showEditModal, setShowEditModal] = useState(false)

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
      letterSeq,
    }

    try {
      const res = await fetch(`/api/recipientLetters/${letterSeq}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error()

      alert('댓글이 등록되었습니다.')
      onAddComment?.()
      setName('')
      setPasscode('')
      setCommentText('')
    } catch {
      alert('오류가 발생했습니다.')
    }
  }

  return (
    <div>
      <div className="mb-5">
        <h3 className="text-[17px] font-bold sm:text-[24px]">
          <span className="mr-1">댓글</span>
          <span className="text-red-40">{comments.length}</span>
        </h3>
      </div>

      {/* 안내 */}
      <div className="bg-red-5 text-gray-80 flex w-full items-center gap-4 rounded-[20px] p-4 text-[13px] sm:text-[19px]">
        <img src="/icon/system-info.svg" alt="" />
        <p>기증자에 대한 추모 분위기를 해치거나 비방의 글은 관리자에 의해 삭제될 수 있습니다.</p>
      </div>

      {/* 댓글 작성 */}
      <form className="mt-5" onSubmit={handleSubmit}>
        {/* 이름, 비밀번호 */}
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-[60px]">
          {/* 이름 */}
          <label className="flex justify-between gap-[14px]">
            <h3 className="text-[15px] font-bold sm:text-[19px]">이름</h3>
            <div className="flex flex-col gap-1">
              <input
                placeholder="이름을 입력해주세요"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-gray-20 h-10 w-[240px] rounded-[100px] border p-2 pl-[14px] text-[15px]"
              />
              <span className="text-red-40 px-[14px] text-[13px] font-normal">
                (한글/영문 최대 10글자)
              </span>
            </div>
          </label>
          {/* 비밀번호 */}
          <label className="flex justify-between gap-[14px]">
            <h3 className="text-[15px] font-bold sm:text-[19px]">비밀번호</h3>
            <div className="flex flex-col gap-1">
              <input
                placeholder="비밀번호를 입력해주세요"
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="border-gray-20 h-10 w-[240px] rounded-[100px] border p-2 pl-[14px] text-[15px]"
              />
              <span className="text-red-40 px-[14px] text-[13px] font-normal">
                (영문+숫자 최소 8자 이상)
              </span>
            </div>
          </label>
        </div>

        {/* 댓글 입력 */}
        <div className="border-gray-20 mt-5 flex min-h-[100px] rounded-[20px] border p-3 pl-[15px]">
          <textarea
            placeholder="댓글을 입력해주세요"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full resize-none text-[15px]"
            maxLength={1000}
          />
          <div className="flex items-end gap-[10px]">
            <p className="text-gray-40 w-[90px] text-right">{commentText.length}/1000</p>
            <button
              type="submit"
              className="bg-red-40 flex h-8 w-8 items-center justify-center rounded-full"
            >
              <img src="/icon/btn-shortcut.svg" alt="" />
            </button>
          </div>
        </div>
      </form>

      {/* 댓글 리스트 */}
      <ul className="mt-10 flex flex-col gap-6 sm:mt-[60px]">
        {comments.map((comment, idx) => (
          <li key={idx} className="flex items-end gap-3">
            <span className="bg-gray-5 text-gray-95 border-gray-10 rounded-[20px] rounded-tl-[4px] px-6 py-5 text-[15px]">
              {comment.contents}
            </span>
            <div className="flex items-end gap-2">
              <span className="text-gray-60 text-[13px]">{convertDate(comment.writeTime)}</span>
              <span
                onClick={() => {
                  setEditTarget(comment)
                  setEditText(comment.contents)
                  setEditPassword('')
                  setShowEditModal(true)
                }}
                className="border-gray-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border"
              >
                <img src="/icon/edit.svg" alt="수정" />
              </span>
              <span
                onClick={() => {
                  setDeleteTarget(comment)
                  setDeletePassword('')
                  setShowDeleteModal(true)
                }}
                className="border-gray-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border"
              >
                <img src="/icon/delete.svg" alt="삭제" />
              </span>
            </div>
          </li>
        ))}
      </ul>
      {showDeleteModal && deleteTarget && (
        <DeleteConfirmModal
          password={deletePassword}
          setPassword={setDeletePassword}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={async () => {
            const res = await fetch(
              `/api/recipientLetters/${letterSeq}/comments/${deleteTarget.commentSeq}`,
              {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  commentPasscode: deletePassword,
                  letterSeq: letterSeq,
                  commentSeq: deleteTarget.commentSeq,
                }),
              },
            )

            if (res.ok) {
              alert('삭제되었습니다.')
              setShowDeleteModal(false)
              onAddComment?.()
            } else {
              alert('비밀번호가 틀렸습니다.')
            }
          }}
        />
      )}

      {/* 수정 모달 */}
      {showEditModal && editTarget && (
        <EditCommentModal
          editText={editText}
          setEditText={setEditText}
          password={editPassword}
          setPassword={setEditPassword}
          onCancel={() => setShowEditModal(false)}
          onConfirm={async () => {
            const res = await fetch(
              `/api/recipientLetters/${letterSeq}/comments/${editTarget.commentSeq}`,
              {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  contents: editText,
                  commentPasscode: editPassword,
                  commentWriter: editTarget.commentWriter,
                  commentSeq: editTarget.commentSeq,
                  letterSeq: letterSeq,
                }),
              },
            )

            if (res.ok) {
              alert('수정되었습니다.')
              setShowEditModal(false)
              onAddComment?.()
            } else {
              alert('비밀번호가 틀렸습니다.')
            }
          }}
        />
      )}
    </div>
  )
}

export default CommentContainer
