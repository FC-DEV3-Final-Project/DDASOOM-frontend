import React from 'react'
import Day from '@/pages/home/components/Day'

const day = ['일', '월', '화', '수', '목', '금', '토']

const EventSection: React.FC = () => {
  return (
    <div className="flex flex-col">
      <a className="mb-7 inline-flex cursor-pointer items-center gap-3" href="/event">
        <h2 className="text-gray-95 inline text-[15px] font-bold sm:text-2xl">기관일정 페이지</h2>
        <img
          src="/public/icon/Arrow.svg"
          alt=""
          className="h-[15px] w-[15px] sm:h-[24px] sm:w-[24px]"
        />
      </a>
      <div className="mb-3 flex gap-[19px] text-center">
        {day.map((day) => {
          return <Day key={day} day={day} hasEvent={true} />
        })}
      </div>
      <div className="border-gray-20 flex flex-col gap-3 border-t pt-5">
        <div className="flex flex-col gap-1">
          <p className="text-[19px] font-bold text-[#424242]">2025. 05. 19.</p>
          <div className="flex items-center gap-2">
            <span className="bg-red-40 h-2 w-2 rounded-full"></span>
            <p className="text-[19px] text-[#424242]">
              [기관장 참석] 보건복지부 방문(공공보건정책관 회의)
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[19px] font-bold text-[#424242]">2025. 05. 20.</p>
          <div className="flex items-center gap-2">
            <span className="bg-red-20 h-2 w-2 rounded-full"></span>
            <p className="text-[19px] text-[#424242]">
              [기관장 참석] 보건복지부 방문(공공보건정책관 회의)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-red-20 h-2 w-2 rounded-full"></span>
            <p className="text-[19px] text-[#424242]">
              [기관장 참석] 보건복지부 방문(공공보건정책관 회의)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventSection
