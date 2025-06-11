import { formatDateKorean, getWeekMondayFrom } from '@/pages/home/utils/timeUtils'

const response = {
  baseDate: '2025-06-29T08:00:00.000Z', // UTC 기준
  year: 2025,
  organ: 136,
  tissue: 54,
}

const StatsSection = () => {
  const baseMonday = getWeekMondayFrom(response.baseDate)
  const subtitle = formatDateKorean(baseMonday)

  return (
    <section className="bg-gray-5 flex min-w-[320px] grow-3 justify-between rounded-[20px] px-[16px] py-3 sm:flex-col sm:gap-[40px] sm:rounded-[40px] sm:px-[40px] sm:py-8">
      <div>
        <h2 className="text-gray-95 mb-1 hidden text-[15px] font-bold sm:flex sm:text-2xl">
          {response.year}년
        </h2>
        <h2 className="mb-1 hidden text-[15px] font-bold text-green-50 sm:flex sm:text-2xl">
          누적 기증자 수
        </h2>
        <h2 className="text-gray-95 mb-[2px] text-[15px] font-bold sm:hidden">
          {response.year}년{' '}
          <b className="mb-[2px] text-[15px] font-bold text-green-50">누적 기증자</b>
        </h2>
        <p className="text-gray-40 text-[11px] sm:text-base">{subtitle}</p>
      </div>
      <div className="flex gap-[20px] sm:gap-[40px]">
        <div>
          <p className="text-gray-60 text-[11px] font-semibold sm:text-lg">장기</p>
          <p className="text-gray-80 text-2xl font-bold sm:text-5xl">
            {response.organ}
            <span className="ml-[2px] text-[16px] font-normal sm:ml-1 sm:text-2xl">명</span>
          </p>
        </div>
        <div>
          <p className="text-gray-60 text-[11px] font-semibold sm:text-lg">조직</p>
          <p className="text-gray-80 text-2xl font-bold sm:text-5xl">
            {response.tissue}
            <span className="ml-[2px] text-[16px] font-normal sm:ml-1 sm:text-2xl">명</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
