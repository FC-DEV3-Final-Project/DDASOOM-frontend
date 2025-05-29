import React from 'react'

const EventSection: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-6 text-2xl font-bold text-[#212121]">기관 일정 &gt;</h2>
      <div className="mb-4 flex space-x-2 text-center">
        {/* 요일 */}
        <div className="flex flex-col">
          <span>일</span>
          <button className="rounded border px-3 py-1">22</button>
        </div>
        <div className="flex flex-col">
          <span>월</span>
          <button className="rounded border bg-[red] px-3 py-1 text-white">19</button>
        </div>
        <div className="flex flex-col">
          <span>화</span>
          <button className="rounded border px-3 py-1">20</button>
        </div>
        <div className="flex flex-col">
          <span>수</span>
          <button className="rounded border px-3 py-1">21</button>
        </div>
        <div className="flex flex-col">
          <span>목</span>
          <button className="rounded border px-3 py-1">22</button>
        </div>
        <div className="flex flex-col">
          <span>금</span>
          <button className="rounded border px-3 py-1">23</button>
        </div>
        <div className="flex flex-col">
          <span>토</span>
          <button className="rounded border px-3 py-1">24</button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-2">
          <span className="text-sm text-[#0D47A1]">•</span>
          <p className="text-base text-[#424242]">
            2025. 05. 19. [기관장 참석] 보건복지부 방문(공공보건정책관 회의)
          </p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-sm text-[#0D47A1]">•</span>
          <p className="text-base text-[#424242]">
            2025. 05. 20. [기관장 참석] 한국공공조직은행 이사회 참석
          </p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-sm text-[#0D47A1]">•</span>
          <p className="text-base text-[#424242]">
            2025. 05. 20. [기관장 참석] 한국공공조직은행 제3차 이사회 참석
          </p>
        </div>
      </div>
    </div>
  )
}

export default EventSection
