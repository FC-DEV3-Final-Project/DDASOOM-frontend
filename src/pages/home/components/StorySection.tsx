import React from 'react'

const StorySection: React.FC = () => {
  return (
    <div className="">
      <section className="header mb-[10px] sm:mb-7">
        <a className="mb-1 inline-flex cursor-pointer items-center gap-3" href="/event">
          <h2 className="text-gray-95 inline text-[15px] font-bold sm:text-2xl">생명나눔 페이지</h2>
          <img src="/icon/Arrow.svg" alt="" className="h-[15px] w-[15px] sm:h-[24px] sm:w-[24px]" />
        </a>
        <p className="text-gray-60 text-[13px] font-normal sm:text-[19px]">
          그리움과 사랑을 담아 소중한 이들을 기억하는 공간입니다.
        </p>
      </section>
      <section className="flex w-full gap-6">
        <div className="bg-red-10 flex-1 overflow-hidden rounded-[20px] shadow-[0_16px_24px_0px_rgba(0,0,0,0.12)] sm:h-[327px] sm:w-[245px] sm:flex-none sm:shrink-0">
          <img
            src="/story_image.png"
            alt="생명 나눔 이야기 이미지"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex max-w-[321px] min-w-[100px] flex-1 flex-col gap-2 text-[11px] sm:text-[19px]">
          <p className="text-gray-80 bg-gray-10 w-full cursor-pointer overflow-hidden rounded-[100px] px-[10px] py-[6px] font-bold overflow-ellipsis whitespace-nowrap sm:px-[18px] sm:py-[10px]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <p className="w-full cursor-pointer overflow-hidden px-[10px] py-[6px] overflow-ellipsis whitespace-nowrap text-[#424242] sm:px-[18px] sm:py-[10px]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <p className="w-full cursor-pointer overflow-hidden px-[10px] py-[6px] overflow-ellipsis whitespace-nowrap text-[#424242] sm:px-[18px] sm:py-[10px]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <p className="w-full cursor-pointer overflow-hidden px-[10px] py-[6px] overflow-ellipsis whitespace-nowrap text-[#424242] sm:px-[18px] sm:py-[10px]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <p className="w-full cursor-pointer overflow-hidden px-[10px] py-[6px] overflow-ellipsis whitespace-nowrap text-[#424242] sm:px-[18px] sm:py-[10px]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <p className="w-full cursor-pointer overflow-hidden px-[10px] py-[6px] overflow-ellipsis whitespace-nowrap text-[#424242] sm:px-[18px] sm:py-[10px]">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
        </div>
      </section>
    </div>
  )
}

export default StorySection
