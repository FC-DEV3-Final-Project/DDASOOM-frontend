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
        <h3>댓글 삭제</h3>
        <p>비밀번호를 입력해주세요.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded border p-2"
          placeholder="비밀번호"
        />
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onCancel} className="btn-cancel">
            취소
          </button>
          <button onClick={onConfirm} className="btn-danger">
            삭제
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmModal
