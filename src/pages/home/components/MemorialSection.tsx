import React, { useEffect, useState } from 'react'
import MemorialBadge from '@/pages/home/components/MemorialBadge'

interface Donor {
  donateName: string
  donateGender: string
  donateAge: number
}

const MemorialSection: React.FC = () => {
  const [donors, setDonors] = useState<Donor[]>([])

  useEffect(() => {
    fetch('http://koda2.elementsoft.biz:8081/main')
      .then((res) => res.json())
      .then((data) => {
        setDonors(data.rememberanceMainDtoList)
      })
      .catch((err) => {
        console.error('호출 에러:', err)
      })
  }, [])

  return (
    <section className="border-gray-20 grow-1 rounded-[20px] border-1 px-[16px] py-3 sm:min-w-[680px] sm:rounded-[40px] sm:px-[40px] sm:py-8">
      <a className="mb-1 inline-flex cursor-pointer items-center gap-3" href="/memorial">
        <h2 className="text-gray-95 inline text-[15px] font-bold sm:text-2xl">기증자 추모관</h2>
        <img src="/public/icon/Arrow.svg" alt="" className="h-[14px] w-[14px] sm:h-6 sm:w-6" />
      </a>
      <p className="text-gray-60 mb-3 text-[13px] font-normal sm:mb-[28px] sm:text-[19px]">
        생명나눔을 실천하신 분들의 고귀한 뜻, 잊지 않겠습니다.
      </p>
      <div className="grid grid-cols-4 justify-items-center sm:hidden">
        {donors.slice(0, 4).map((donor) => {
          return <MemorialBadge key={donors.indexOf(donor)} donor={donor} variant="small" />
        })}
      </div>
      <div className="hidden grid-cols-5 justify-items-center gap-[18px] sm:grid">
        {donors.map((donor) => {
          return <MemorialBadge key={donors.indexOf(donor)} donor={donor} variant="large" />
        })}
      </div>
    </section>
  )
}

export default MemorialSection
