import React from 'react'

const NoticeSection: React.FC = () => {
  return (
    <div className="flex flex-col">
      <a className="mb-7 inline-flex cursor-pointer items-center gap-3" href="/event">
        <h2 className="text-gray-95 inline text-2xl font-bold">공지사항</h2>
        <img src="/public/icon/Arrow.svg" alt="" width={24} height={24} className="mb-1" />
      </a>
      <div className="flex flex-col gap-5 overflow-hidden text-[19px] overflow-ellipsis whitespace-nowrap">
        <div className="flex justify-between text-[#424242]">
          <p className="w-[455px] overflow-hidden text-[19px] overflow-ellipsis whitespace-nowrap">
            [모집] 한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <span className="flex-shrink-0 text-[19px] text-[#616161]">2025. 05. 27.</span>
        </div>
        <div className="flex justify-between text-[#424242]">
          <p className="w-[455px] overflow-hidden text-[19px] overflow-ellipsis whitespace-nowrap">
            [이벤트] 한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <span className="flex-shrink-0 text-[19px] text-[#616161]">2025. 05. 27.</span>
        </div>
        <div className="flex justify-between text-[#424242]">
          <p className="w-[455px] overflow-hidden text-[19px] overflow-ellipsis whitespace-nowrap">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <span className="flex-shrink-0 text-[19px] text-[#616161]">2025. 05. 27.</span>
        </div>
        <div className="flex justify-between text-[#424242]">
          <p className="w-[455px] overflow-hidden text-[19px] overflow-ellipsis whitespace-nowrap">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <span className="flex-shrink-0 text-[19px] text-[#616161]">2025. 05. 27.</span>
        </div>
        <div className="flex justify-between text-[#424242]">
          <p className="w-[455px] overflow-hidden text-[19px] overflow-ellipsis whitespace-nowrap">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <span className="flex-shrink-0 text-[19px] text-[#616161]">2025. 05. 27.</span>
        </div>
        <div className="flex justify-between text-[#424242]">
          <p className="w-[455px] overflow-hidden text-[19px] overflow-ellipsis whitespace-nowrap">
            한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.
          </p>
          <span className="flex-shrink-0 text-[19px] text-[#616161]">2025. 05. 27.</span>
        </div>
      </div>
    </div>
  )
}

export default NoticeSection
