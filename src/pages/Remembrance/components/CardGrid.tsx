import MemorialBadge from '@/shared/components/MemorialBadge'
import { useNavigate } from 'react-router-dom'
import { Mail } from 'lucide-react'

interface Donor {
  donateName: string
  donateAge: number | null
  donateGender: string
  donateDate: string
  id: string | number
  donorBirthDate: string | null
}

interface CardGridProps {
  donors: Donor[]
}

const CardGrid = ({ donors }: CardGridProps) => {
  const navigate = useNavigate()
  return (
    <ul className="grid w-full grid-cols-2 gap-y-8 py-8 md:grid-cols-4 md:py-16 lg:grid-cols-6">
      {donors.map((donor) => (
        <li
          key={donor.id}
          className="flex cursor-pointer flex-col items-center"
          onClick={() => navigate(`/remembrance/${donor.id}`)}
          onClick={() => navigate(`/remembrance/${donor.id}`)}
        >
          <MemorialBadge donor={donor} variant="medium" />
          <div className="mt-3 text-[15px] text-[#33363D]">
            <span className="font-bold">기증일</span> {donor.donateDate || '-'}
          </div>
          <button
            className="mt-2 flex items-center gap-2 rounded-full border border-[#CDD1D5] bg-white px-[14px] py-2 text-[15px] font-bold text-[#33363D] transition hover:bg-[#34A354] hover:text-white"
            onClick={(e) => {
              e.stopPropagation()
              navigate(`/remembrance/${donor.id}`)
            }}
            aria-label={`${donor.donateName}님께 추모편지 쓰기`}
          >
            <Mail size={22} />
            추모편지 쓰기
          </button>
        </li>
      ))}
    </ul>
  )
}

export default CardGrid
