import React from 'react'
import MemorialBadge from '@/pages/home/components/MemorialBadge'

const dummyData = [
  { id: 1, name: '홍길동', date: '2023-01-01', message: '생명나눔에 동참해 주셔서 감사합니다.' },
  { id: 2, name: '김영희', date: '2023-02-01', message: '고귀한 뜻을 잊지 않겠습니다.' },
  { id: 3, name: '이철수', date: '2023-03-01', message: '생명나눔을 실천해 주셔서 감사합니다.' },
  { id: 4, name: '박지민', date: '2023-04-01', message: '고귀한 뜻을 기억하겠습니다.' },
  { id: 5, name: '최수영', date: '2023-05-01', message: '생명나눔에 감사드립니다.' },
]

const MemorialSection: React.FC = () => {
  return (
    <section className="bg-gray-5 min-w-[680px] grow-1 rounded-[40px] px-[40px] py-8">
      <a className="mb-1 inline-flex cursor-pointer items-center gap-3" href="/memorial">
        <h2 className="text-gray-95 inline text-2xl font-bold">기증자 추모관</h2>
        <img src="/public/icon/Arrow.svg" alt="" width={24} height={24} />
      </a>
      <p className="text-gray-60 mb-[28px] text-[19px] font-normal">
        생명나눔을 실천하신 분들의 고귀한 뜻, 잊지 않겠습니다.
      </p>
      <div className="grid grid-cols-5 gap-[18px]">
        {dummyData.map((donor) => {
          return <MemorialBadge key={donor.id} name={donor.name} />
        })}
      </div>
    </section>
  )
}

export default MemorialSection
