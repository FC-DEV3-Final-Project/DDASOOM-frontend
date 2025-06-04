const Day = ({ day, hasEvent }: { day: string; hasEvent: boolean }) => {
  return (
    <div className="flex h-[83px] w-[64px] flex-col gap-1">
      <span className="text-[19px]">{day}</span>
      <div className="relative m-auto h-[50px] w-[50px] px-3 py-1 text-[24px] font-bold">
        {day}
        {hasEvent && <div className="bg-red-20 absolute top-0 right-0 h-2 w-2 rounded-full"></div>}
      </div>
    </div>
  )
}

export default Day
