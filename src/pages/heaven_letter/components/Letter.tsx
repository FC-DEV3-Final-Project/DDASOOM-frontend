import { useEffect, useRef, useState } from 'react'
import { formatDate } from '@/shared/utils/timeUtils'
import { areaCodesConvertKR } from '@/shared/utils/areaCodesConvertKR'
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
    letterTitle: string
    letterContents: string
    writeTime: string
    areaCode: string
    donorName: string
    readCount: number
    letterWriter: string
    letterSeq: number
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
  const [lineCount, setLineCount] = useState(12)
  const lineHeight = 40
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const handleEditClick = () => {
    setShowModal(true)
  }

  const handlePasswordConfirm = (inputPassword: string) => {
    if (inputPassword === item.comments[0]?.commentPasscode) {
      // 비밀번호 일치 → 수정 페이지로 이동
      navigate(`/remembrance/letter/${item.letterSeq}/edit`, {
        state: { letterData: item },
      })
    } else {
      alert('비밀번호가 일치하지 않습니다.')
    }
    setShowModal(false)
  }

  useEffect(() => {
    if (textRef.current) {
      const height = textRef.current.offsetHeight
      const calculatedLines = Math.ceil(height / lineHeight)
      setLineCount(Math.max(calculatedLines, 12))
    }
  }, [item.letterContents])

  return (
    <>
      <div>
        <div
          className="relative mt-15 mb-10 bg-cover bg-right bg-no-repeat shadow-md sm:mt-30 sm:mb-[60px] sm:min-h-[900px] sm:w-[960px] sm:bg-contain"
          style={{
            backgroundImage: `url(/letter-paper/${paperImages[item.letterPaper | 0]})`,
            backgroundSize: '100% auto',
          }}
        >
          <img
            src="/letter-paper/clip.svg"
            alt=""
            className="absolute top-[-35px] right-7 w-[30px] sm:top-[-60px] sm:right-16 sm:w-[49px]"
          />

          <div className="px-20 py-25">
            <div className="mb-[60px] flex flex-col gap-6">
              {/* 작성일자 */}
              <div className="text-[19px] font-bold">{formatDate(item.writeTime)}</div>
              <div className="text-gray-80 flex gap-[60px] text-[15px]">
                {/* 권역 */}
                <span>
                  <span className="mr-6">권역</span>
                  <span className="font-bold">{areaCodesConvertKR(item.areaCode)}</span>
                </span>
                {/* 기증자 */}
                <span>
                  <span className="mr-6">기증자</span>
                  <span className="font-bold">{areaCodesConvertKR(item.donorName)}</span>
                </span>
              </div>
            </div>

            {/* 제목 */}
            <div className="mb-[40px]">
              <div
                style={{ fontFamily: FONT_OPTIONS[item.letterFont | 0].value }}
                className="text-gray-90 w-[280px] border-b border-dashed border-gray-300 bg-transparent pb-2 text-[24px] leading-[36px]"
              >
                {item.letterTitle}
              </div>
            </div>

            {/* 본문 */}
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-0 z-0">
                {Array.from({ length: lineCount }).map((_, i) => (
                  <div key={i} className="h-[40px] border-b border-dashed border-gray-300" />
                ))}
              </div>
              <div
                ref={textRef}
                className="text-gray-90 relative z-10 w-full bg-transparent text-[17px] leading-[40px] whitespace-pre-wrap"
                style={{ fontFamily: FONT_OPTIONS[item.letterFont | 0].value }}
              >
                {item.letterContents}
              </div>
            </div>
            <div className="absolute bottom-10 left-0 flex w-full justify-between px-20">
              {/* 조회수 */}
              <span className="flex items-center gap-[6px]">
                <img src="/icon/icon-eye.svg" alt="" />
                {item.readCount}
              </span>
              {/* 추모자 */}
              <span>
                <span className="mr-6">추모자</span>
                <span className="font-bold">{item.letterWriter}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-5 flex justify-end gap-3">
          <button
            type="button"
            onClick={handleEditClick}
            className="border-gray-40 hover:bg-gray-10 flex items-center gap-2 rounded-[100px] border px-[18px] py-1 text-[15px]"
          >
            <img src="/icon/edit.svg" alt="" />
            수정
          </button>
          {showModal && (
            <PasswordPromptModal
              onConfirm={handlePasswordConfirm}
              onCancel={() => setShowModal(false)}
            />
          )}
          <button className="border-gray-40 hover:bg-gray-10 flex items-center gap-2 rounded-[100px] border px-[18px] py-1 text-[15px]">
            <img src="/icon/delete.svg" alt="" />
            삭제
          </button>
        </div>
      </div>
    </>
  )
}

export default Letter
