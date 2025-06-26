import { useLocation, useNavigate } from 'react-router-dom'
import Turnstile from 'react-cloudflare-turnstile'
import { useState } from 'react'

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

const LetterEditForm = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const letter = state?.letterData

  const [title, setTitle] = useState(letter?.letterTitle || '')
  const [contents, setContents] = useState(letter?.letterContents || '')
  const [selectedFont, setSelectedFont] = useState<0 | 1 | 2>(letter?.letterFont || 0)
  const [selectedPaper, setSelectedPaper] = useState(letter?.letterPaper || 0)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [passcode, setPasscode] = useState('')

  const validateForm = () => {
    const errors: string[] = []

    if (!title.trim()) {
      errors.push('제목을 입력해주세요.')
    } else if (title.length > 50) {
      errors.push('제목은 최대 50자까지 입력할 수 있습니다.')
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passcode)) {
      errors.push('비밀번호는 영문+숫자 조합으로 8자 이상이어야 합니다.')
    }
    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    validateForm()
    if (!captchaToken) {
      alert('봇 방지 확인을 완료해주세요.')
      return
    }
    const updated = {
      letterTitle: title,
      letterContents: contents,
      letterFont: selectedFont,
      letterPaper: selectedPaper,
      captchaToken,
      letterSeq: letter.letterSeq,
      donorName: letter.donorName,
      donateSeq: letter.donateSeq,
      letterPasscode: passcode,
      areaCode: letter.areaCode,
      anonymityFlag: letter.anonymityFlag,
    }

    await fetch(`/api/heavenLetters/${letter.letterSeq}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    })
    alert('편지가 수정되었습니다.')
    navigate(`/remembrance/letter/${letter.letterSeq}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* 권역 선택 */}
      <div className="mb-[60px] flex flex-col gap-3">
        <h3 className="text-gray-95 text-[15px] font-bold sm:text-[19px]">권역선택</h3>
        <div className="flex flex-col gap-6 sm:flex-row">
          {Object.entries(AREA_CODES).map(([code, label]) => (
            <label key={code} className="flex cursor-pointer items-center gap-2">
              <input type="radio" name="letterOption" value={letter.areaCode} className="hidden" />
              <div
                className={`flex h-5 w-5 items-center justify-center rounded border transition ${
                  letter.areaCode === code ? 'border-red-40 bg-red-40' : 'border-gray-300 bg-white'
                }`}
              >
                {letter.areaCode === code && (
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

      <div className="flex flex-col justify-between gap-10 sm:flex-row sm:gap-0">
        {/* 기증자 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-95 text-[15px] font-bold sm:text-[19px]">기증자</h3>
          <div className="sm:max-w-[270px]">
            <label className="flex h-10 w-full justify-between">
              <input
                type="text"
                readOnly
                placeholder="성함을 입력해주세요"
                className="border-gray-20 mr-2 h-10 w-full rounded-[100px] border p-2 pl-[14px] focus:ring-2 focus:ring-red-500 focus:outline-none"
                value={letter.donorName}
              />
              <button
                type="button"
                disabled
                className="border-red-30 hover:bg-gray-10 text-red-40 h-full rounded-[100px] border-2 px-[18px] text-[15px] whitespace-nowrap"
              >
                검색
              </button>
            </label>
          </div>
        </div>

        {/* 추모자 */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h3 className="text-gray-95 text-[15px] font-bold sm:text-[19px]">추모자</h3>
            <label className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" checked={letter.anonymityFlag} className="hidden" />
              <div
                className={`flex h-5 w-5 items-center justify-center rounded border transition ${
                  letter.anonymityFlag ? 'border-red-40 bg-red-40' : 'border-gray-300 bg-white'
                }`}
              >
                {letter.anonymityFlag && (
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
                value={letter.letterWriter}
                readOnly
                className="border-gray-20 h-10 w-full rounded-[100px] border p-2 pl-[14px] focus:ring-2 focus:ring-red-500 focus:outline-none sm:w-[240px]"
              />
            </label>
            <span className="text-red-40 px-[14px] text-[13px] font-normal">
              (한글/영문 최대 10글자)
            </span>
          </div>
        </div>

        {/* 비밀번호 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-95 text-[15px] font-bold sm:text-[19px]">비밀번호</h3>
          <div className="flex flex-col gap-1">
            <label>
              <input
                type="password"
                placeholder="새 비밀번호를 입력해주세요"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="border-gray-20 h-10 w-full rounded-[100px] border p-2 pl-[14px] focus:ring-2 focus:ring-red-500 focus:outline-none sm:w-[240px]"
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
        className="relative mt-15 mb-10 bg-cover bg-right bg-no-repeat shadow-md sm:mt-30 sm:mb-[60px] sm:h-[800px] sm:w-[960px] sm:bg-contain"
        style={{
          backgroundImage: `url(/letter-paper/${paperImages[selectedPaper]})`,
        }}
      >
        <img
          src="/letter-paper/clip.svg"
          alt=""
          className="absolute top-[-35px] right-7 w-[30px] sm:top-[-60px] sm:right-16 sm:w-[49px]"
        />

        <div className="h-full px-5 py-10 sm:px-20 sm:py-25">
          {/* 제목 */}
          <div className="mb-10">
            <input
              type="text"
              placeholder="제목을 입력하세요"
              style={{ fontFamily: FONT_OPTIONS[selectedFont].value }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-gray-90 border-b border-dashed border-gray-300 bg-transparent pb-2 text-[20px] leading-[36px] outline-none placeholder:text-gray-50 sm:w-[280px] sm:text-[24px]"
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
              className="text-gray-90 relative z-10 h-full w-full resize-none bg-transparent text-[16px] leading-[40px] outline-none placeholder:text-gray-50 sm:text-[17px]"
            />
          </div>
        </div>
      </div>

      {/* 편지지 선택 */}
      <div className="flex flex-col justify-between gap-10 sm:flex-row sm:gap-0">
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-95 text-[15px] font-bold sm:text-[19px]">편지지 선택</h3>
          <div className="flex flex-wrap gap-2 sm:gap-4">
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
                  className={`flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 bg-cover bg-right bg-no-repeat transition sm:h-25 sm:w-25 ${
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
          <h3 className="text-gray-95 text-[15px] font-bold sm:text-[19px]">글꼴 선택</h3>
          <div className="flex gap-2">
            {FONT_OPTIONS.map((font) => (
              <button
                key={font.value}
                type="button"
                onClick={() => setSelectedFont(font.index)}
                style={{ fontFamily: font.value }}
                className={`rounded-full px-3 py-[6px] text-[14px] sm:px-5 sm:py-2 sm:text-[17px] ${
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
          turnstileSiteKey="0x4AAAAAABh7p6RM-c7LcvIz"
          callback={(token: string) => setCaptchaToken(token)}
          theme="light"
          size="normal"
        />
      </div>
      <div className="flex justify-end gap-3 font-bold">
        <button
          type="button"
          onClick={() => {
            navigate(`/remembrance/letter/${letter.letterSeq}`)
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
          편지 수정하기
        </button>
      </div>
    </form>
  )
}

export default LetterEditForm
