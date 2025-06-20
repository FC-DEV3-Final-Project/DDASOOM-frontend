import { useState } from 'react'
import ChatBot from '@/shared/components/ChatBot'

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* 플로팅 버튼 (토글 + 아이콘 전환) */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? '채팅 닫기' : '채팅 열기'}
        className="bg-red-40 fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-105"
      >
        {isOpen ? (
          // 닫기 아이콘
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // 챗봇 아이콘
          <img src="/icon/hugeicons_chat-bot.svg" alt="챗봇 아이콘" className="h-[30px] w-[30px]" />
        )}
      </button>

      {/* 챗봇 패널 */}
      <div
        className={`fixed right-6 bottom-24 z-40 w-[360px] max-w-full rounded-2xl bg-white shadow-xl transition-all duration-500 ease-in-out ${isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-0 opacity-0'} origin-bottom-right`}
      >
        <div className="h-[500px] overflow-hidden rounded-2xl p-4">
          <ChatBot />
        </div>
      </div>
    </>
  )
}

export default FloatingChat
