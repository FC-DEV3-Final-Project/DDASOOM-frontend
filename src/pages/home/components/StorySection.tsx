import React from 'react'

const StorySection: React.FC = () => {
  return (
    <div className="">
      <section className="header">
        <a className="mb-1 inline-flex cursor-pointer items-center gap-3" href="/event">
          <h2 className="text-gray-95 inline text-2xl font-bold">생명나눔 페이지</h2>
          <img src="/icon/Arrow.svg" alt="" width={24} height={24} />
        </a>
        <p className="text-gray-60 mb-7 text-[19px] font-normal">
          그리움과 사랑을 담아 소중한 이들을 기억하는 공간입니다.
        </p>
      </section>
      <section className="flex w-full gap-6">
        <div className="bg-red-10 h-[327px] w-[245px] shrink-0 overflow-hidden rounded-[20px]">
          <img
            src="/story_image.png"
            alt="생명 나눔 이야기 이미지"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex max-w-[321px] min-w-[100px] flex-col gap-2">
          <p className="text-gray-80 bg-gray-10 w-full cursor-pointer overflow-hidden rounded-[100px] px-[18px] py-[10px] text-[19px] font-bold overflow-ellipsis whitespace-nowrap">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <p className="w-full cursor-pointer overflow-hidden px-[18px] py-[10px] text-[19px] overflow-ellipsis whitespace-nowrap text-[#424242]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <p className="w-full cursor-pointer overflow-hidden px-[18px] py-[10px] text-[19px] overflow-ellipsis whitespace-nowrap text-[#424242]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <p className="w-full cursor-pointer overflow-hidden px-[18px] py-[10px] text-[19px] overflow-ellipsis whitespace-nowrap text-[#424242]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <p className="w-full cursor-pointer overflow-hidden px-[18px] py-[10px] text-[19px] overflow-ellipsis whitespace-nowrap text-[#424242]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <p className="w-full cursor-pointer overflow-hidden px-[18px] py-[10px] text-[19px] overflow-ellipsis whitespace-nowrap text-[#424242]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
        </div>
      </section>
    </div>
  )
}

export default StorySection
