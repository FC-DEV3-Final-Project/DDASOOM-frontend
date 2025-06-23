import React, { useState } from 'react'

interface Props {
  onConfirm: (inputPassword: string) => void
  onCancel: () => void
}

const PasswordPromptModal = ({ onConfirm, onCancel }: Props) => {
  const [input, setInput] = useState('')

  return (
    <div className="bg-opacity-30 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-[360px] rounded-lg bg-white p-6 shadow-lg">
        <h3 className="mb-4 text-lg font-bold">비밀번호 확인</h3>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="댓글 비밀번호를 입력해주세요"
          className="mb-4 w-full rounded border px-3 py-2"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="rounded px-4 py-2 text-sm text-gray-600 hover:underline"
          >
            취소
          </button>
          <button
            onClick={() => onConfirm(input)}
            className="bg-red-40 rounded px-4 py-2 text-sm text-white hover:bg-red-50"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  )
}

export default PasswordPromptModal
