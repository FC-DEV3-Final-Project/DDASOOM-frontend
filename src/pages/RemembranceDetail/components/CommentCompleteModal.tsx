interface Props {
  title: string
  message: string
  onClose: () => void
  buttonText?: string
}

const CommentCompleteModal = ({ title, message, onClose, buttonText = '확인' }: Props) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
    <div className="w-[320px] rounded-2xl border border-gray-300 bg-white p-6 shadow-xl">
      <div className="mb-1 text-left text-lg font-bold text-[#F25555]">{title}</div>
      <div className="mb-6 text-left text-base text-[#444]">{message}</div>
      <button
        className="w-full rounded-full bg-[#F25555] py-2 text-base font-semibold text-white transition hover:bg-[#e94444]"
        onClick={onClose}
      >
        {buttonText}
      </button>
    </div>
  </div>
)

export default CommentCompleteModal
