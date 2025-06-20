import { useState, useRef, useEffect } from 'react'

const DEFAULT_ERR_MSG = '데이터를 불러오는 데 실패했습니다. 잠시 후 다시 이용해 주세요.'
const NO_MSG = '메시지 없음'

const BASE_URL = import.meta.env.VITE_CHAT_API_URL || ''

const ChatBot = () => {
  const [input, setInput] = useState('')
  const [chat, setChat] = useState<{ sender: 'user' | 'bot'; message: string }[]>([
    {
      sender: 'bot',
      message:
        '안녕하세요, 한국장기조직기증원입니다. 우리 기관이 하는 일과 관련하여 궁금한 점이 있다면 편하게 채팅으로 문의해 주세요!🥰',
    },
    {
      sender: 'bot',
      message:
        '안녕하세요, 한국장기조직기증원입니다. 우리 기관이 하는 일과 관련하여 궁금한 점이 있다면 편하게 채팅으로 문의해 주세요!🥰',
    },
    {
      sender: 'bot',
      message:
        '안녕하세요, 한국장기조직기증원입니다. 우리 기관이 하는 일과 관련하여 궁금한 점이 있다면 편하게 채팅으로 문의해 주세요!🥰',
    },
    {
      sender: 'bot',
      message:
        '안녕하세요, 한국장기조직기증원입니다. 우리 기관이 하는 일과 관련하여 궁금한 점이 있다면 편하게 채팅으로 문의해 주세요!🥰',
    },
    {
      sender: 'bot',
      message:
        '안녕하세요, 한국장기조직기증원입니다. 우리 기관이 하는 일과 관련하여 궁금한 점이 있다면 편하게 채팅으로 문의해 주세요!🥰',
    },
    {
      sender: 'bot',
      message:
        '안녕하세요, 한국장기조직기증원입니다. 우리 기관이 하는 일과 관련하여 궁금한 점이 있다면 편하게 채팅으로 문의해 주세요!🥰',
    },
  ])
  const [loading, setLoading] = useState(false)
  const chatRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  const handleSubmit = async () => {
    const message = input.trim()
    if (!message) return

    setChat((prev) => [...prev, { sender: 'user', message }])
    setInput('')
    setLoading(true)
    scrollToBottom()

    try {
      const response = await fetch(`${BASE_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: message }),
      })
      const result = await response.json()

      let botMessage = DEFAULT_ERR_MSG
      if (response.ok && result.success) {
        botMessage = result.data?.message || DEFAULT_ERR_MSG
      } else {
        console.error('API 응답 오류:', result.message || NO_MSG)
      }
      setChat((prev) => [...prev, { sender: 'bot', message: botMessage }])
    } catch (err) {
      console.error('API 호출 실패:', err)
      setChat((prev) => [...prev, { sender: 'bot', message: DEFAULT_ERR_MSG }])
    } finally {
      setLoading(false)
      scrollToBottom()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit()
  }

  useEffect(() => {
    scrollToBottom()
  }, [chat])

  return (
    <div className="h-full w-full">
      <header className="border-gray-10 flex items-center gap-2 border-b p-5">
        <h4 className="text-[17px] font-semibold">KODA 한국장기조직기증원</h4>
      </header>

      <section className="bg-gray-5 flex flex-col p-4 pb-24">
        <div className="mb-4 flex flex-col gap-2 text-center">
          <img src="/KODA_logo.svg" alt="KODA 캐릭터" className="mx-auto" />
          <h3 className="text-[15px] font-bold">KODA 한국장기조직기증원 조직 안내 챗봇</h3>
          <h4 className="text-sm">
            <a
              href="https://www.koda1458.kr/newKoda/groupInfo.do"
              target="_blank"
              className="text-gray-80 border-gray-20 rounded-[100px] border-1 bg-white px-[14px] py-1 text-[13px] hover:underline"
            >
              전체 조직도 확인하기
            </a>
          </h4>
        </div>

        <div className="flex max-h-[400px] flex-col gap-2 overflow-y-auto">
          {chat.map((entry, i) => (
            <p
              key={i}
              className={`msg max-w-xs rounded-lg px-4 py-2 text-sm ${
                entry.sender === 'bot'
                  ? 'bg-gray-10 text-left'
                  : 'self-end bg-orange-300 text-right'
              }`}
            >
              {entry.message}
            </p>
          ))}
          {loading && (
            <div className="flex items-center gap-2">
              <img src="/img/main-character.png" alt="KODA" className="h-6 w-6" />
              <i className="fa fa-spinner fa-spin text-gray-500"></i>
            </div>
          )}
          <div ref={chatRef} />
        </div>

        <div className="fixed bottom-16 w-full px-4">
          <div className="flex rounded-lg bg-gray-100 px-2 py-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent px-2 text-base outline-none"
              placeholder="> 개인정보를 활용한 상담은 지원하지 않습니다."
            />
            <button onClick={handleSubmit} className="px-3">
              <img src="/img/icon-send-button.png" alt="보내기" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChatBot
