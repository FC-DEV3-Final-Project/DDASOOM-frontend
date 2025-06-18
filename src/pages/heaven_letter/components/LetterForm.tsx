import { useState } from 'react'

const LetterForm = () => {
  const options = ['1권역(수도권, 강원, 제주)', '2권역(충청, 전라)', '3권역(영남)']
  const [selected, setSelected] = useState('')
  const [isAnonymous, setAnonymous] = useState(false)

  return (
    <form>
      {/* 상단 인풋 구성 */}
      <div className="mb-[60px] flex flex-col gap-3">
        {/* 권역 선택 */}
        <h3 className="text-gray-95 text-[19px] font-bold">권역선택</h3>
        <div className="flex gap-6">
          {options.map((option) => (
            <label key={option} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="letterOption"
                value={option}
                checked={selected === option}
                onChange={() => setSelected(option)}
                className="hidden"
              />
              <div
                className={`flex h-5 w-5 items-center justify-center rounded border transition ${
                  selected === option ? 'border-red-40 bg-red-40' : 'border-gray-300 bg-white'
                }`}
              >
                {selected === option && (
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
              <span className="text-[15px] text-[#444]">{option}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        {/* 기증자 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-95 text-[19px] font-bold">기증자</h3>
          <div className="h-10 max-w-[270px]">
            <label key="기증자 이름">
              <input
                type="text"
                readOnly
                placeholder={'성함을 입력해주세요'}
                className="border-gray-20 mr-2 h-10 rounded-[100px] border p-2 pl-[14px] focus:ring-2 focus:ring-red-500 focus:outline-none"
                onClick={() => alert('검색 기능은 아직 구현되지 않았습니다.')}
              />
              <button
                onClick={() => alert('검색 기능은 아직 구현되지 않았습니다.')}
                className="border-red-30 hover:bg-gray-10 text-red-40 h-full rounded-[100px] border-2 px-[18px] text-[15px] whitespace-nowrap"
              >
                검색
              </button>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {/* 추모자 */}
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
                placeholder={'성함을 입력해주세요'}
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
                type="text"
                placeholder={'새 비밀번호를 입력해주세요'}
                className="border-gray-20 h-10 w-[240px] rounded-[100px] border p-2 pl-[14px] focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </label>
            <span className="text-red-40 px-[14px] text-[13px] font-normal">
              (영문+숫자 최소 8자 이상)
            </span>
          </div>
        </div>
      </div>

      {/* 편지 영역 전체 */}
      <div className="relative mt-30 h-[800px] w-[960px] bg-[url(/letter-paper/letter-paper1.png)] bg-contain bg-bottom bg-no-repeat">
        <img src="/letter-paper/clip.svg" alt="" className="absolute top-[-60px] right-16" />

        <div className="h-full px-20 py-25">
          {/* 제목 영역 */}
          <div className="mb-[40px]">
            <input
              type="text"
              placeholder="제목을 입력하세요"
              className="text-gray-90 w-[280px] border-b border-dashed border-gray-300 bg-transparent pb-2 text-[24px] leading-[36px] outline-none placeholder:text-gray-50"
              style={{ height: '36px' }}
            />
            <p className="text-red-40 mt-[6px] text-[13px]">(한글/영문/숫자 최대 50글자)</p>
          </div>

          {/* 본문 영역 */}
          <div className="relative h-[500px] w-full">
            {/* 줄 배경 */}
            <div className="absolute inset-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-[28px] border-b border-dashed border-gray-300" />
              ))}
            </div>

            {/* 편지 내용 입력 */}
            <textarea
              className="text-gray-90 relative z-10 h-[328px] w-full resize-none bg-transparent text-[16px] leading-[28px] outline-none placeholder:text-gray-50"
              placeholder="편지를 작성해보세요"
            />
          </div>
        </div>
      </div>
    </form>
  )
}

export default LetterForm
