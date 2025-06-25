import { useState } from 'react'
import { Pencil, X } from 'lucide-react'
import type { Comment } from '@/pages/RemembranceDetail/types'
import EditCommentModal from '@/pages/RemembranceDetail/components/EditCommentModal'
import CommentCompleteModal from '@/pages/RemembranceDetail/components/CommentCompleteModal'

interface CommentItemProps {
  comment: Comment
}

function CommentItem({ comment }: CommentItemProps) {
  // 댓글 본문 상태
  const [editValue, setEditValue] = useState(comment.contents)
  // 수정 모달 노출 상태
  const [showEditModal, setShowEditModal] = useState(false)
  // 완료 모달 노출 상태
  const [showEditComplete, setShowEditComplete] = useState(false)
  const [showDeleteComplete, setShowDeleteComplete] = useState(false)
  // 수정 모달용 상태
  const [editText, setEditText] = useState(comment.contents)
  const [editPassword, setEditPassword] = useState('')
  // 삭제 모달용 상태
  const [deletePassword, setDeletePassword] = useState('')
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  // 수정 아이콘 클릭 시 바로 EditCommentModal 오픈
  const handleEditClick = () => {
    setEditPassword('')
    setEditText(editValue)
    setShowEditModal(true)
  }

  // EditCommentModal에서 수정 완료
  const handleEditConfirm = () => {
    if (editPassword !== comment.password) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }
    setEditValue(editText)
    setShowEditModal(false)
    setEditPassword('')
    setShowEditComplete(true)
  }

  // 삭제 버튼 클릭 시 (비밀번호 입력 모달 오픈)
  const handleDeleteClick = () => {
    setDeletePassword('')
    setShowDeleteModal(true)
  }

  // 삭제 비밀번호 확인 및 삭제 처리
  const handleDeleteConfirm = () => {
    if (deletePassword !== comment.password) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }
    // 실제 삭제 처리 로직 (예: 서버 요청 등)
    setShowDeleteModal(false)
    setShowDeleteComplete(true)
  }

  return (
    <div className="group flex items-end gap-2">
      <div className="relative rounded-[20px] bg-white px-[14px] py-3 text-[15px] shadow">
        {/* X(삭제) 버튼: hover 시만 보임 */}
        <button
          className="absolute top-2 right-2 hidden text-gray-400 transition group-hover:block hover:text-red-500"
          onClick={(e) => {
            e.stopPropagation()
            handleDeleteClick()
          }}
          aria-label="댓글 삭제"
        >
          <X size={16} />
        </button>
        {/* 말풍선 내용 */}
        {editValue}
      </div>
      <div className="flex min-w-[104px] flex-col items-baseline justify-end gap-2 text-[13px] text-[#58616A]">
        <div className="flex items-baseline gap-2">
          <span className="min-w-[60px]">{comment.date}</span>
          {/* 연필(수정) 버튼: 항상 보임 */}
          <button
            className="flex h-8 min-h-[32px] w-8 min-w-[32px] items-center justify-center rounded-full border border-[#CDD1D5] transition-all duration-200 hover:scale-105 hover:bg-[#e0e7ef] hover:shadow-md"
            aria-label="댓글 수정"
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              handleEditClick()
            }}
          >
            <span className="flex h-full w-full items-center justify-center">
              <Pencil size={20} strokeWidth={2} className="text-[#58616A]" />
            </span>
          </button>
        </div>
      </div>
      {/* 댓글 수정 모달 */}
      {showEditModal && (
        <EditCommentModal
          editText={editText}
          setEditText={setEditText}
          password={editPassword}
          setPassword={setEditPassword}
          onCancel={() => setShowEditModal(false)}
          onConfirm={handleEditConfirm}
        />
      )}
      {/* 삭제 비밀번호 입력 모달 (간단하게 구현) */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-[320px] rounded-lg bg-white p-6 text-center shadow-xl">
            <div className="mb-4 text-lg font-bold">댓글 삭제</div>
            <input
              type="password"
              value={deletePassword}
              onChange={(e) => setDeletePassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
              className="mb-4 w-full rounded border px-3 py-2"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="rounded px-4 py-2 text-sm text-gray-600 hover:underline"
              >
                취소
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="rounded bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
      {/* 댓글 수정 완료 모달 */}
      {showEditComplete && (
        <CommentCompleteModal
          title="댓글 수정"
          message="댓글이 수정되었습니다."
          onClose={() => setShowEditComplete(false)}
        />
      )}
      {/* 댓글 삭제 완료 모달 */}
      {showDeleteComplete && (
        <CommentCompleteModal
          title="댓글 삭제"
          message="댓글이 삭제되었습니다."
          onClose={() => setShowDeleteComplete(false)}
        />
      )}
    </div>
  )
}

export default CommentItem
