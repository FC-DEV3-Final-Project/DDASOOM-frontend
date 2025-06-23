import React, { useEffect, useState } from 'react'
import Day from '@/pages/home/components/Day'
import { getCurrentWeekDates } from '@/shared/utils/timeUtils'
import SectionHeader from '@/pages/home/components/SectionHeader'

const dayKor = ['일', '월', '화', '수', '목', '금', '토']

// 예시 fetch 함수 (실제 DB 호출로 교체)
const fetchEvents = async (): Promise<EventItem[]> => {
  return [
    {
      date: '2025-06-27',
      title: '[기관장 참석] 생명나눔 캠페인',
    },
    {
      date: '2025-06-29',
      title: '장기기증자 추모식',
    },
    {
      date: '2025-06-23',
      title: '장기기증자 추모식',
    },
    {
      date: '2025-06-22',
      title: '장기기증자 추모식',
    },
    {
      date: '2025-06-26',
      title: 'dlfwjd',
    },
  ]
}

type EventItem = {
  date: string // ISO 포맷: 'YYYY-MM-DD'
  title: string
}

// 날짜별로 이벤트 묶기
const groupEventsByDate = (events: EventItem[]) => {
  return events.reduce<Record<string, EventItem[]>>((acc, event) => {
    if (!acc[event.date]) acc[event.date] = []
    acc[event.date].push(event)
    return acc
  }, {})
}

const EventSection: React.FC = () => {
  const weekDates = getCurrentWeekDates()
  const [allEvents, setAllEvents] = useState<EventItem[]>([])
  const [futureEvents, setFutureEvents] = useState<EventItem[]>([])

  useEffect(() => {
    const load = async () => {
      const data = await fetchEvents()
      const today = new Date()

      const weekStart = weekDates[0].toISOString().slice(0, 10)
      const weekEnd = weekDates[6].toISOString().slice(0, 10)

      const thisWeekEvents = data.filter((event) => {
        return event.date >= weekStart && event.date <= weekEnd
      })

      const upcoming = thisWeekEvents.filter((event) => {
        return new Date(event.date) >= new Date(today.toDateString())
      })

      setAllEvents(thisWeekEvents)
      setFutureEvents(upcoming)
    }

    load()
  }, [weekDates])
  const groupedEvents = groupEventsByDate(futureEvents)

  return (
    <div className="flex flex-col">
      <SectionHeader link="" title="기관일정" />

      {/* 요일 표시 */}
      <div className="mb-3 flex gap-[1rem] text-center">
        {weekDates.map((date, i) => {
          const dayName = dayKor[i]
          const iso = date.toISOString().slice(0, 10)
          const hasEvent = allEvents.some((e) => e.date === iso)
          const isToday = date.toDateString() === new Date().toDateString()

          return (
            <Day
              key={dayName}
              day={dayName}
              date={date.getDate()}
              hasEvent={hasEvent}
              isToday={isToday}
            />
          )
        })}
      </div>

      {/* 일정 표시 */}
      <div className="border-gray-20 flex flex-col gap-3 border-t pt-5">
        {Object.entries(groupedEvents).map(([date, events]) => (
          <div key={date} className="flex flex-col gap-1">
            {/* 날짜는 한 번만 표시 */}
            <p className="text-[19px] font-bold text-[#424242]">
              {new Date(date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </p>
            {events.map((event, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className={`bg-red-40 h-2 w-2 rounded-full`}></span>
                <p className="text-[19px] text-[#424242]">{event.title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventSection
