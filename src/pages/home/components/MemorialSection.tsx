import React, { useEffect, useState } from 'react'
import SectionHeader from '@/pages/home/components/SectionHeader'
import MemorialBadge from '@/shared/components/MemorialBadge'

interface Donor {
  donateName: string
  donateGender: string
  donateAge: number
}

const MemorialSection: React.FC = () => {
  const [donors, setDonors] = useState<Donor[]>([])

  useEffect(() => {
    fetch('/api/main')
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
      <SectionHeader
        title="기증자 추모관"
        link=""
        description="생명나눔을 실처하신 분들의 고귀한 뜻, 잊지 않겠습니다."
      />
      <div className="grid grid-cols-4 justify-items-center sm:hidden">
        {donors.slice(0, 4).map((donor, i) => {
          return <MemorialBadge key={i} donor={donor} variant="small" />
        })}
      </div>
      <div className="hidden grid-cols-5 justify-items-center gap-[18px] sm:grid">
        {donors.map((donor, i) => {
          return <MemorialBadge key={i} donor={donor} variant="large" />
        })}
      </div>
    </section>
  )
}

export default MemorialSection
