import React from 'react'

const LetterSection: React.FC = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="mb-6 text-2xl font-bold text-[#212121]">하늘나라 편지 &gt;</h2>
      <p className="mb-8 text-base text-[#616161]">
        그리움과 사랑을 담아 소중한 이들을 기억하는 공간입니다.
      </p>

      <div className="flex space-x-6 overflow-x-auto">
        <div className="w-80 flex-none rounded-lg bg-white p-6 shadow-md">
          <p className="mb-4 text-sm text-[#424242]">
            잘 지내는지 궁금하네, 하루하루가 참 낯설고...
          </p>
          <div className="text-xs text-[#9E9E9E]">
            <span>작성자: 홍*동</span> | <span>2023.01.01</span>
          </div>
        </div>
        <div className="w-80 flex-none rounded-lg bg-white p-6 shadow-md">
          <p className="mb-4 text-sm text-[#424242]">
            잘 지내는지 궁금하네, 하루하루가 참 낯설고...
          </p>
          <div className="text-xs text-[#9E9E9E]">
            <span>작성자: 홍*동</span> | <span>2023.01.01</span>
          </div>
        </div>
        <div className="w-80 flex-none rounded-lg bg-white p-6 shadow-md">
          <p className="mb-4 text-sm text-[#424242]">
            잘 지내는지 궁금하네, 하루하루가 참 낯설고...
          </p>
          <div className="text-xs text-[#9E9E9E]">
            <span>작성자: 홍*동</span> | <span>2023.01.01</span>
          </div>
        </div>
        <div className="w-80 flex-none rounded-lg bg-white p-6 shadow-md">
          <p className="mb-4 text-sm text-[#424242]">
            잘 지내는지 궁금하네, 하루하루가 참 낯설고...
          </p>
          <div className="text-xs text-[#9E9E9E]">
            <span>작성자: 홍*동</span> | <span>2023.01.01</span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center space-x-2">
        {/* 슬라이드 네비게이션 아이콘/버튼 */}
        {/* 예: <button>〈</button> <button>●</button> <button>●</button> <button>〉</button> */}
      </div>
    </section>
  )
}

export default LetterSection
