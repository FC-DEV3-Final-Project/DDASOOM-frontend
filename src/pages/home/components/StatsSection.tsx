import React from 'react'

const StatsSection: React.FC = () => {
  return (
    <section className="bg-gray-5 flex items-center justify-between rounded-[40px] p-8">
      <div>
        <h2 className="text-gray-95 mb-2 text-2xl font-bold">2025년</h2>
        <h2 className="mb-2 text-2xl font-bold text-green-50">누적 기증자 수</h2>
        <p className="text-gray-40 mb-4 text-base">2025년 5월 26일(주간) 기준</p>
        <div className="mt-[40px] flex space-x-10">
          <div>
            <p className="text-gray-60 text-lg font-semibold">장기</p>
            <p className="text-gray-80 text-5xl font-bold">
              136<span className="text-2xl font-normal">명</span>
            </p>
          </div>
          <div>
            <p className="text-gray-60 text-lg font-semibold">조직</p>
            <p className="text-gray-80 text-5xl font-bold">
              54<span className="text-2xl font-normal">명</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
