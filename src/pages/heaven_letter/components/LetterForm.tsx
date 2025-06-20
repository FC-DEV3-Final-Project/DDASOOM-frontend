import { useNavigate } from 'react-router-dom'
import Turnstile from 'react-cloudflare-turnstile'
import { useRef, useState } from 'react'
import DonorSearchModal from '@/pages/heaven_letter/components/DonorSearchModal'

const FONT_OPTIONS = [
  { index: 0, label: 'Cafe24 고운밤', value: 'Cafe24Oneprettynight' },
  { index: 1, label: 'Cafe24 동동', value: 'Cafe24Dongdong' },
  { index: 2, label: '학교안심 그림일기', value: 'HakgyoansimGeurimilgiTTF-R' },
] as const
const AREA_CODES = {
  AREA100: '1권역(수도권, 강원, 제주)',
  AREA200: '2권역(충청, 전라)',
  AREA300: '3권역(영남)',
}
const paperOptions = [0, 1, 2, 3]
const paperImages: Record<string, string> = {
  0: '',
  1: 'letter-paper1.png',
  2: 'letter-paper3.png',
  3: 'letter-paper2.png',
}

const LetterForm = () => {
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')
  const [passcode, setPasscode] = useState('')
  const [writer, setWriter] = useState('')
  const [areaCode, setAreaCode] = useState('AREA100')
  const [selectedPaper, setSelectedPaper] = useState(0)
  const [isAnonymous, setAnonymous] = useState(false)
  const [selectedFont, setSelectedFont] = useState<0 | 1 | 2>(0)
  const [captchaToken, setCaptchaToken] = useState('')
  const [isModalOpen, setModalOpen] = useState(false)
  const [donorName, setDonorName] = useState('')

  const turnstileRef = useRef<{ execute: () => void } | null>(null)

  const navigate = useNavigate()

  const validateForm = () => {
    const errors: string[] = []

    if (!title.trim()) {
      errors.push('제목을 입력해주세요.')
    } else if (title.length > 50) {
      errors.push('제목은 최대 50자까지 입력할 수 있습니다.')
    }

    if (!writer.trim()) {
      errors.push('추모자 이름을 입력해주세요.')
    } else if (!/^[가-힣a-zA-Z]{1,10}$/.test(writer)) {
      errors.push('추모자 이름은 한글 또는 영문 10자 이내로 입력해주세요.')
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passcode)) {
      errors.push('비밀번호는 영문+숫자 조합으로 8자 이상이어야 합니다.')
    }

    return errors
  }

  interface DonationLetterPayload {
    letterWriter: string
    letterTitle: string
    letterContents: string
    captchaToken: string
    anonymityFlag: boolean
    letterPasscode: string
    donorName: string
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const errors = validateForm()
    if (errors.length > 0) {
      alert(errors.join('\n'))
      return
    }

    turnstileRef.current?.execute()

    const payload: DonationLetterPayload = {
      letterWriter: writer,
      letterTitle: title,
      letterContents: contents,
      letterPasscode: passcode,
      captchaToken: captchaToken,
      anonymityFlag: isAnonymous,
      donorName: donorName,
    }

    fetch('/api/heavenletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  }
  const handleDonorSelect = (donor: { id: number; name: string }) => {
    setDonorName(donor.name)
    setModalOpen(false)
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* 권역 선택 */}
      <div className="mb-[60px] flex flex-col gap-3">
        <h3 className="text-gray-95 text-[19px] font-bold">권역선택</h3>
        <div className="flex gap-6">
          {Object.entries(AREA_CODES).map(([code, label]) => (
            <label key={code} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="letterOption"
                value={code}
                checked={areaCode === code}
                onChange={() => setAreaCode(code)}
                className="hidden"
              />
              <div
                className={`flex h-5 w-5 items-center justify-center rounded border transition ${
                  areaCode === code ? 'border-red-40 bg-red-40' : 'border-gray-300 bg-white'
                }`}
              >
                {areaCode === code && (
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-[15px] text-[#444]">{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        {/* 기증자 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-95 text-[19px] font-bold">기증자</h3>
          <div className="h-10 max-w-[270px]">
            <label>
              <input
                type="text"
                readOnly
                placeholder="성함을 입력해주세요"
                className="border-gray-20 mr-2 h-10 rounded-[100px] border p-2 pl-[14px] focus:ring-2 focus:ring-red-500 focus:outline-none"
                onClick={() => setModalOpen(true)}
              />
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="border-red-30 hover:bg-gray-10 text-red-40 h-full rounded-[100px] border-2 px-[18px] text-[15px] whitespace-nowrap"
              >
                검색
              </button>
            </label>
            <DonorSearchModal
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
              onSelect={handleDonorSelect}
            />
          </div>
        </div>

        {/* 추모자 */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h3 className="text-gray-95 text-[19px] font-bold">추모자</h3>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={() => setAnonymous(!isAnonymous)}
                className="hidden"
              />
              <div
                className={`flex h-5 w-5 items-center justify-center rounded border transition ${
                  isAnonymous ? 'border-red-40 bg-red-40' : 'border-gray-300 bg-white'
                }`}
              >
                {isAnonymous && (
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-[15px] text-[#444]">익명</span>
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <label>
              <input
                type="text"
                placeholder="성함을 입력해주세요"
                value={writer}
                onChange={(e) => {
                  setWriter(e.target.value)
                }}
                className="border-gray-20 h-10 w-[240px] rounded-[100px] border p-2 pl-[14px] focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </label>
            <span className="text-red-40 px-[14px] text-[13px] font-normal">
              (한글/영문 최대 10글자)
            </span>
          </div>
        </div>

        {/* 비밀번호 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-95 text-[19px] font-bold">비밀번호</h3>
          <div className="flex flex-col gap-1">
            <label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => {
                  const value = e.target.value
                  setPasscode(value)
                }}
                placeholder="새 비밀번호를 입력해주세요"
                className="border-gray-20 h-10 w-[240px] rounded-[100px] border p-2 pl-[14px] focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </label>
            <span className="text-red-40 px-[14px] text-[13px] font-normal">
              (영문+숫자 최소 8자 이상)
            </span>
          </div>
        </div>
      </div>

      {/* 편지지 */}
      <div
        className="relative mt-30 mb-[60px] h-[800px] w-[960px] bg-contain bg-bottom bg-no-repeat shadow-md"
        style={{
          backgroundImage: `url(/letter-paper/${paperImages[selectedPaper]})`,
        }}
      >
        <img src="/letter-paper/clip.svg" alt="" className="absolute top-[-60px] right-16" />

        <div className="h-full px-20 py-25">
          {/* 제목 */}
          <div className="mb-[40px]">
            <input
              type="text"
              placeholder="제목을 입력하세요"
              style={{ fontFamily: FONT_OPTIONS[selectedFont].value }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-gray-90 w-[280px] border-b border-dashed border-gray-300 bg-transparent pb-2 text-[24px] leading-[36px] outline-none placeholder:text-gray-50"
            />
            <p className="text-red-40 mt-[6px] text-[13px]">(한글/영문/숫자 최대 50글자)</p>
          </div>

          {/* 본문 */}
          <div className="relative h-[500px] w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-[40px] border-b border-dashed border-gray-300" />
              ))}
            </div>
            <textarea
              placeholder="편지를 작성해보세요"
              style={{ fontFamily: FONT_OPTIONS[selectedFont].value }}
              value={contents}
              onChange={(e) => setContents(e.target.value)}
              className="text-gray-90 relative z-10 h-full w-full resize-none bg-transparent text-[17px] leading-[40px] outline-none placeholder:text-gray-50"
            />
          </div>
        </div>
      </div>

      {/* 편지지 선택 */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-95 text-[19px] font-bold">편지지 선택</h3>
          <div className="flex flex-wrap gap-4">
            {paperOptions.map((option) => (
              <label key={option} className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="letterPaper"
                  value={option}
                  checked={selectedPaper === option}
                  onChange={() => setSelectedPaper(option)}
                  className="hidden"
                />
                <div
                  className={`flex h-25 w-25 items-center justify-center rounded-full border-2 bg-cover bg-center bg-no-repeat transition ${
                    selectedPaper === option ? 'border-red-40' : 'border-gray-10'
                  }`}
                  style={{ backgroundImage: `url(/letter-paper/${paperImages[option]})` }}
                >
                  {selectedPaper === option && (
                    <div className="bg-red-40 flex h-[24px] w-[24px] items-center justify-center rounded-full">
                      <svg
                        className="h-[14px] w-[14px] text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* 글꼴 선택 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-95 text-[19px] font-bold">글꼴 선택</h3>
          <div className="flex gap-4">
            {FONT_OPTIONS.map((font) => (
              <button
                key={font.value}
                type="button"
                onClick={() => setSelectedFont(font.index)}
                style={{ fontFamily: font.value }}
                className={`rounded-full px-5 py-2 ${
                  selectedFont === font.index
                    ? 'text-red-40 border-2 border-red-50'
                    : 'text-gray-95 border-gray-20 border-1'
                }`}
              >
                {font.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-none opacity-0">
        <Turnstile
          turnstileSiteKey="1x00000000000000000000AA"
          callback={(token: string) => setCaptchaToken(token)}
        />
      </div>
      <div className="flex justify-end gap-3 font-bold">
        <button
          onClick={() => {
            navigate('/remember/heavenletter')
          }}
          className="border-gray-40 text-gray-80 rounded-[100px] border-2 px-[18px] py-2"
        >
          취소
        </button>
        <button
          type="submit"
          className="bg-red-40 flex items-center gap-2 rounded-[100px] px-[18px] py-2 text-white hover:bg-red-50"
        >
          <img src="/icon/document-check.svg" alt="" className="h-5 w-5" />
          편지 보내기
        </button>
      </div>
    </form>
  )
}

export default LetterForm
