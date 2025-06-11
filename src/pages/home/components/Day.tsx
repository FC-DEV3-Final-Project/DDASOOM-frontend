interface Props {
  date: number
  day: string
  hasEvent?: boolean
  isToday?: boolean
}

const Day = ({ day, date, hasEvent, isToday }: Props) => {
  return (
    <div className="flex h-[83px] w-[64px] flex-col gap-1">
      <span className="text-[19px]">{day}</span>
      <div className="relative m-auto flex h-[50px] w-[50px] items-center justify-center text-[24px] font-bold">
        {isToday ? (
          <div className="bg-red-40 flex h-[50px] w-[50px] items-center justify-center rounded-full px-3 py-1 text-white">
            {date}
          </div>
        ) : (
          <div className="">{date}</div>
        )}
        {!isToday && hasEvent && (
          <div className="bg-red-20 absolute top-0 right-0 h-2 w-2 rounded-full" />
        )}
      </div>
    </div>
  )
}

export default Day
