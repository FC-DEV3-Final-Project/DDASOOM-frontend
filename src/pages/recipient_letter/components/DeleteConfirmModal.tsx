interface Props {
  password: string
  setPassword: (val: string) => void
  onConfirm: () => void
  onCancel: () => void
}

const DeleteConfirmModal = ({ password, setPassword, onConfirm, onCancel }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="w-[500px] rounded bg-white p-6">
        <h2 className="mb-4 text-lg font-bold">댓글 삭제</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded border p-2"
          placeholder="비밀번호를 입력해주세요"
        />
        <div className="mt-4 flex justify-end gap-4">
          <button onClick={onCancel} className="btn-cancel">
            취소
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-40 rounded px-4 py-2 text-white hover:bg-red-50"
          >
            삭제하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmModal
