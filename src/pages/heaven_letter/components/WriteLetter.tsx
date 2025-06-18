import { useState } from 'react'

const WriteLetter = () => {
  const options = ['1권역(수도권, 강원, 제주)', '2권역(충청, 전라)', '3권역(영남)']
  const [selected, setSelected] = useState('')

  return (
    <form>
      <div className="mb-[60px] flex flex-col gap-4">
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
                className={`flex h-5 w-5 items-center justify-center gap-2 rounded border transition ${
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
      <div className="flex">
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-95 text-[19px] font-bold">기증자</h3>
        </div>
      </div>
    </form>
  )
}

export default WriteLetter
