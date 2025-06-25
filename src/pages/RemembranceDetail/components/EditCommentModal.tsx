interface Props {
  editText: string
  setEditText: (val: string) => void
  password: string
  setPassword: (val: string) => void
  onCancel: () => void
  onConfirm: () => void
}

const EditCommentModal = ({
  editText,
  setEditText,
  password,
  setPassword,
  onCancel,
  onConfirm,
}: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-[500px] rounded bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-lg font-bold">댓글 수정</h2>
        <textarea
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="w-full resize-none border p-2"
          rows={4}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
          className="mt-3 w-full rounded border p-2"
        />
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onCancel} className="text-gray-500 hover:underline">
            취소
          </button>
          <button
            onClick={onConfirm}
            className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            수정하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditCommentModal
