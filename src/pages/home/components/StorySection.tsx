import React from 'react'

const StorySection: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-6 text-2xl font-bold text-[#212121]">생명 나눔 이야기 &gt;</h2>
      <p className="mb-8 text-base text-[#616161]">
        한국장기조직기증원의 새로운 소식을 만나보세요.
      </p>
      <div className="flex gap-8">
        <div className="flex w-1/2">
          <img
            src="/path/to/your/image.jpg"
            alt="생명 나눔 이야기 이미지"
            className="h-auto w-full"
          />
        </div>
        <div className="flex w-1/2 flex-col gap-3">
          <p className="text-base text-[#424242]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시...
          </p>
          <p className="text-base text-[#424242]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시...
          </p>
          <p className="text-base text-[#424242]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시...
          </p>
          <p className="text-base text-[#424242]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시...
          </p>
          <p className="text-base text-[#424242]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시...
          </p>
          <p className="text-base text-[#424242]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시...
          </p>
        </div>
      </div>
    </div>
  )
}

export default StorySection
