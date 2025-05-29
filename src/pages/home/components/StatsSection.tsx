import React from 'react'

const StatsSection: React.FC = () => {
  return (
    <section className="flex items-center justify-between rounded-lg bg-[#F2F2F2] p-8">
      <div>
        <h2 className="mb-2 text-2xl font-bold text-[#212121]">2025년 누적 기증자 수</h2>
        <p className="mb-4 text-base text-[#616161]">2025년 5월 26일(주간) 기준</p>
        <div className="flex space-x-10">
          <div>
            <p className="text-lg font-semibold text-[#424242]">장기</p>
            <p className="text-5xl font-bold text-[#0D47A1]">
              136<span className="text-2xl font-normal">명</span>
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold text-[#424242]">조직</p>
            <p className="text-5xl font-bold text-[#388E3C]">
              54<span className="text-2xl font-normal">명</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
