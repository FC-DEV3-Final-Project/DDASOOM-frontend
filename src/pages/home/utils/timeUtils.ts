const getWeekMondayFrom = (dateString: string) => {
  const date = new Date(dateString)
  const day = date.getDay()
  const diff = date.getDate() - day + (day === 0 ? -6 : 1)
  return new Date(date.setDate(diff))
}

const formatDateKorean = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}년 ${month}월 ${day}일(주간) 기준`
}

const getCurrentWeekDates = () => {
  const today = new Date()
  const currentDay = today.getDay()
  const sunday = new Date(today)
  sunday.setDate(today.getDate() - currentDay)

  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(sunday)
    date.setDate(sunday.getDate() + i)
    return date
  })
}

export { getWeekMondayFrom, formatDateKorean, getCurrentWeekDates }
