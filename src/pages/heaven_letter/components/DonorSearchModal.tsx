import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Donor {
  id: number
  donorName: string
  donateDate: string // yyyy-mm-dd
  genderFlag: 'M' | 'F'
  donateAge: number
  donateSeq: number
}

interface Props {
  isOpen: boolean
  onClose: () => void
  onSelect: (donor: Donor, name: string) => void
}

const formatDate = (dateStr: string) => {
  return dateStr.replace(/-/g, '')
}

const DonorSearchModal = ({ isOpen, onClose, onSelect }: Props) => {
  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [results, setResults] = useState<Donor[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    const params = new URLSearchParams()
    params.append('donateName', name)
    params.append('startDate', startDate ? formatDate(startDate) : '')
    params.append('endDate', endDate ? formatDate(endDate) : '')

    setLoading(true)
    try {
      const res = await fetch(`/api/heavenLetters/donorSearch?${params.toString()}`)
      const data = await res.json()
      const parsed = data.content.map((item: Donor) => ({
        id: item.donateSeq,
        donateSeq: item.donateSeq,
        donorName: item.donorName,
        donateDate: item.donateDate,
        genderFlag: item.genderFlag === 'M' ? '남' : '여',
        donateAge: item.donateAge,
      }))
      setResults(parsed)
    } catch (e) {
      console.error('검색 실패:', e)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      setName('')
      setStartDate('')
      setEndDate('')
      setResults([])
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.2)]">
      <div className="flex w-[800px] max-w-full flex-col gap-6 rounded-[20px] bg-white p-8 shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-red-40 text-[19px] font-bold">기증자 검색</h2>
          <button type="button" onClick={onClose} className="text-sm text-gray-600 hover:underline">
            <X />
          </button>
        </div>
        {/* 검색 필터 */}

        <div className="flex justify-between gap-4">
          <div className="flex flex-1 items-center gap-3">
            <h3 className="text-[15px] font-bold">기증일</h3>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="rounded-full border px-3 py-2"
              placeholder="기증 시작일"
            />
            <span className="flex items-center justify-center text-gray-400">~</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="rounded-full border px-3 py-2"
              placeholder="기증 종료일"
            />
          </div>
          <div className="flex items-center gap-3">
            <h3 className="text-[15px] font-bold">기증자명</h3>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="기증자명"
              className="rounded-full border px-3 py-2"
            />
          </div>
          <button
            type="button"
            onClick={handleSearch}
            className="bg-red-40 rounded-[100px] px-4 py-2 text-white hover:bg-red-50"
          >
            검색
          </button>
        </div>
        <div className="border-gray-20 border-t-1 pt-6">
          <h3 className="text-[19px] font-bold">
            총 <b className="text-red-40">{results.length}</b>건
          </h3>

          {loading ? (
            <p className="mt-4">검색 중...</p>
          ) : results.length > 0 ? (
            <div className="mt-4 max-h-64 overflow-y-auto">
              <table className="w-full table-auto border-collapse text-left text-sm">
                <thead className="text-gray-60 sticky top-0 text-[13px] font-bold">
                  <tr>
                    <th className="px-4 py-2">기증자명</th>
                    <th className="px-4 py-2">기증일</th>
                    <th className="px-4 py-2">성별</th>
                    <th className="px-4 py-2">나이</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((donor) => (
                    <tr
                      key={donor.id}
                      onClick={() => {
                        onSelect(donor, name)
                        onClose()
                      }}
                      className="text-gray-95 hover:bg-gray-10 cursor-pointer text-[15px] font-bold"
                    >
                      <td className="border-t px-4 py-2">{donor.donorName}</td>
                      <td className="border-t px-4 py-2">{donor.donateDate}</td>
                      <td className="border-t px-4 py-2">{donor.genderFlag}</td>
                      <td className="border-t px-4 py-2">{donor.donateAge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-4">검색 결과가 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default DonorSearchModal
