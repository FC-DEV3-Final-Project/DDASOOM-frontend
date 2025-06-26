import { useEffect, useRef, useState } from 'react'
import { convertDate } from '@/shared/utils/timeUtils'
import { useNavigate } from 'react-router-dom'
import PasswordPromptModal from '@/pages/heaven_letter/components/PasswordPromptModal'

const FONT_OPTIONS = [
  { index: 0, label: 'Cafe24 고운밤', value: 'Cafe24Oneprettynight' },
  { index: 1, label: 'Cafe24 동동', value: 'Cafe24Dongdong' },
  { index: 2, label: '학교안심 그림일기', value: 'HakgyoansimGeurimilgiTTF-R' },
] as const

const paperImages: Record<string, string> = {
  0: '',
  1: 'letter-paper1.png',
  2: 'letter-paper3.png',
  3: 'letter-paper2.png',
}

interface Props {
  item: {
    storyTitle: string
    storyContents: string
    writeTime: string
    areaCode: string
    donorName: string
    readCount: number
    storyWriter: string
    storySeq: number
    letterFont: number
    letterPaper: number
    comments: {
      commentWriter: string
      commentPasscode: string
      contents: string
      writeTime: string
    }[]
  }
}

const Letter = ({ item }: Props) => {
  const textRef = useRef<HTMLDivElement>(null)
  const [lineCount, setLineCount] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [actionMode, setActionMode] = useState<'edit' | 'delete' | null>(null)
  const lineHeight = 40
  const navigate = useNavigate()

  useEffect(() => {
    if (textRef.current) {
      const height = textRef.current.offsetHeight
      setLineCount(Math.max(Math.ceil(height / lineHeight), 1))
    }
  }, [item.storyContents])

  const handlePasswordConfirm = async (inputPassword: string) => {
    if (!actionMode) return

    if (actionMode === 'edit') {
      try {
        const res = await fetch(`/api/donationLetters/${item.storySeq}/verifyPwd`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ storySeq: item.storySeq, letterPasscode: inputPassword }),
        })

        if (!res.ok) throw new Error()
        const { success } = await res.json()

        if (success) {
          navigate(`/remembrance/story/${item.storySeq}/edit`, {
            state: { letterData: item },
          })
        } else {
          alert('비밀번호가 일치하지 않습니다.')
        }
      } catch {
        alert('비밀번호 확인 중 오류가 발생했습니다.')
      }
    }

    if (actionMode === 'delete') {
      try {
        const res = await fetch(`/api/donationLetters/${item.storySeq}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ letterPasscode: inputPassword, storySeq: item.storySeq }),
        })

        if (res.ok) {
          alert('편지가 삭제되었습니다.')
          navigate('/remembrance/story')
        } else {
          const data = await res.json()
          alert(data.message || '비밀번호가 일치하지 않거나 삭제에 실패했습니다.')
        }
      } catch {
        alert('비밀번호 확인 중 오류가 발생했습니다.')
      }
    }

    setShowModal(false)
    setActionMode(null)
  }

  return (
    <>
      <div>
        <div
          className="relative mt-15 mb-10 bg-cover bg-bottom bg-no-repeat shadow-[0_0_10px_rgba(0,0,0,0.25)] sm:mt-30 sm:mb-[60px] sm:w-[960px] sm:bg-contain"
          style={{
            backgroundImage: `url(/letter-paper/${paperImages[item.letterPaper || 0]})`,
            backgroundColor:
              item.letterPaper === 1
                ? '#EEE0DF'
                : item.letterPaper === 2
                  ? '#BFCE7E'
                  : item.letterPaper === 3
                    ? '#B8CEE5'
                    : 'transparent',
          }}
        >
          <img
            src="/letter-paper/clip.svg"
            alt=""
            className="absolute top-[-35px] right-7 w-[30px] sm:top-[-60px] sm:right-16 sm:w-[49px]"
          />

          <div className="flex h-full flex-col gap-10 px-5 py-10 sm:px-20 sm:py-25">
            <div className="flex flex-col gap-6">
              <div className="text-[19px] font-bold">{convertDate(item.writeTime)}</div>
            </div>

            <div>
              <div
                style={{ fontFamily: FONT_OPTIONS[item.letterFont || 0].value }}
                className="text-gray-90 w-[280px] border-b border-dashed border-gray-300 bg-transparent pb-2 text-[20px] leading-[36px] sm:text-[24px]"
              >
                {item.storyTitle}
              </div>
            </div>

            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-0 z-0">
                {Array.from({ length: lineCount }).map((_, i) => (
                  <div key={i} className="h-[40px] border-b border-dashed border-gray-300" />
                ))}
              </div>
              <div
                ref={textRef}
                className="text-gray-90 relative z-10 w-full bg-transparent text-[16px] leading-[40px] whitespace-pre-wrap sm:text-[17px]"
                style={{ fontFamily: FONT_OPTIONS[item.letterFont || 0].value }}
              >
                {item.storyContents}
              </div>
            </div>

            <div className="flex w-full justify-between sm:absolute sm:bottom-10 sm:left-0 sm:px-20">
              <span className="flex items-center gap-[6px]">
                <img src="/icon/icon-eye.svg" alt="" />
                {item.readCount}
              </span>
              <span>
                <span className="mr-6">코디네이터</span>
                <span className="font-bold">{item.storyWriter}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-5 flex justify-between gap-3 sm:justify-end">
          <button
            type="button"
            onClick={() => {
              setShowModal(true)
              setActionMode('edit')
            }}
            className="border-gray-40 hover:bg-gray-10 flex flex-1 items-center justify-center gap-2 rounded-[100px] border px-[18px] py-1 text-[15px] sm:flex-none"
          >
            <img src="/icon/edit.svg" alt="" />
            수정
          </button>
          <button
            type="button"
            onClick={() => {
              setShowModal(true)
              setActionMode('delete')
            }}
            className="border-gray-40 hover:bg-gray-10 flex flex-1 items-center justify-center gap-2 rounded-[100px] border px-[18px] py-1 text-[15px] sm:flex-none"
          >
            <img src="/icon/delete.svg" alt="" />
            삭제
          </button>
        </div>

        {showModal && (
          <PasswordPromptModal
            placeholder="편지 비밀번호를 입력하세요"
            onConfirm={handlePasswordConfirm}
            onCancel={() => {
              setShowModal(false)
              setActionMode(null)
            }}
          />
        )}
      </div>
    </>
  )
}

export default Letter
