import { useState, useRef, useEffect } from 'react'
import { formatDate } from '@/shared/utils/timeUtils'

const DEFAULT_ERR_MSG = '데이터를 불러오는 데 실패했습니다. 잠시 후 다시 이용해 주세요.'

const QuickButtons = [
  '기증희망등록',
  '유가족 모임',
  '유가족 지원',
  '기증종사자',
  '생명나눔이야기',
  '협약병원',
  '채용문의',
]

const ChatBot = () => {
  const [input, setInput] = useState('')
  const [chat, setChat] = useState<{ sender: 'user' | 'bot'; message: string }[]>([
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

  // ChatBot 컴포넌트 내부
  const handleSubmit = async (customMessage?: string) => {
    const message = (customMessage ?? input).trim()
    if (!message || loading) return

    setLoading(true)
    setChat((prev) => [...prev, { sender: 'user', message }])
    setInput('')
    scrollToBottom()

    try {
      const response = await fetch(`/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: message }),
      })
      const result = await response.json()

      const botMessage =
        response.ok && result.success ? result.data?.message || DEFAULT_ERR_MSG : DEFAULT_ERR_MSG

      setChat((prev) => [...prev, { sender: 'bot', message: botMessage }])
    } catch (err) {
      console.error('API 호출 실패:', err)
      setChat((prev) => [...prev, { sender: 'bot', message: DEFAULT_ERR_MSG }])
    } finally {
      setInput('')
      setLoading(false)
      scrollToBottom()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [chat])

  return (
    <div className="flex w-[430px] flex-col justify-between overflow-hidden rounded-[12px]">
      <header className="border-gray-10 flex items-center gap-2 border-b bg-white p-5">
        <h4 className="text-[17px] font-semibold">KODA 한국장기조직기증원</h4>
      </header>

      <section className="flex h-[400px] flex-col p-5 pb-0">
        <div className="mb-4 flex flex-col gap-2 text-center">
          <img src="/KODA_logo.svg" alt="KODA 캐릭터" className="mx-auto" />
          <h3 className="text-[15px] font-bold">
            KODA 한국장기조직기증원 <br />
            조직 안내 챗봇
          </h3>
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
        <div className="flex flex-col gap-3 overflow-y-auto pt-[16px]">
          <p className="text-gray-80 text-center text-[13px]">{formatDate(new Date())}</p>
          {chat.map((entry, i) => (
            <p
              key={i}
              className={`max-w-xs px-[14px] py-3 text-[15px] shadow-xs ${
                entry.sender === 'bot'
                  ? 'text-gray-95 rounded-[14px] rounded-bl-[2px] bg-white'
                  : 'bg-red-40 self-end rounded-[14px] rounded-br-[2px] text-white'
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
      </section>
      <div className="border-t-gray-20 border-1 p-5 pt-[14px]">
        <ul className="mb-[18px] flex flex-wrap gap-2">
          {QuickButtons.map((button) => (
            <li
              key={button}
              className={`tracking-0 text-gray-80 cursor-pointer rounded-full bg-white px-3 py-[6px] text-[15px] font-bold hover:bg-orange-100 ${
                loading ? 'pointer-events-none opacity-50' : ''
              }`}
              onClick={() => {
                if (!loading) {
                  handleSubmit(button)
                }
              }}
            >
              {button}
            </li>
          ))}
        </ul>
        <div className="flex justify-between rounded-full bg-white px-3 py-[10px]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-[15px] outline-none"
            placeholder="개인정보를 활용한 상담은 지원하지 않습니다."
          />
          <button type="button" onClick={() => handleSubmit()}>
            <img src="/icon/Upload_BTN.svg" alt="보내기" className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBot
