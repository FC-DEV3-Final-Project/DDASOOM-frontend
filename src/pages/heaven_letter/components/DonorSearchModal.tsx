import { useEffect, useState } from 'react'

interface Donor {
  id: number
  name: string
  donationDate: string // yyyy-mm-dd
}

interface Props {
  isOpen: boolean
  onClose: () => void
  onSelect: (donor: Donor) => void
}

const DonorSearchModal = ({ isOpen, onClose, onSelect }: Props) => {
  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [results, setResults] = useState<Donor[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    const params = new URLSearchParams()
    if (name) params.append('name', name)
    if (startDate) params.append('startDate', startDate)
    if (endDate) params.append('endDate', endDate)

    setLoading(true)
    try {
      const res = await fetch(`/remembrance/search?${params.toString()}`)
      const data = await res.json()
      setResults(data)
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
      <div className="w-[600px] max-w-full rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">기증자 검색</h2>

        {/* 검색 필터 */}
        <div className="mb-4 flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="기증자명"
            className="rounded border px-3 py-2"
          />
          <div className="flex gap-2">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-1/2 rounded border px-3 py-2"
              placeholder="기증 시작일"
            />
            <span className="flex items-center justify-center text-gray-400">~</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-1/2 rounded border px-3 py-2"
              placeholder="기증 종료일"
            />
          </div>
        </div>

        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={handleSearch}
            className="bg-red-40 rounded px-4 py-2 text-white hover:bg-red-50"
          >
            검색
          </button>
        </div>

        {/* 검색 결과 */}
        {loading ? (
          <p>검색 중...</p>
        ) : results.length > 0 ? (
          <ul className="max-h-64 overflow-y-auto border-t pt-2">
            {results.map((donor) => (
              <li
                key={donor.id}
                onClick={() => {
                  onSelect(donor)
                  onClose()
                }}
                className="cursor-pointer border-b px-3 py-2 hover:bg-gray-100"
              >
                <p className="font-medium">{donor.name}</p>
                <p className="text-sm text-gray-500">기증일: {donor.donationDate}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}

        <div className="mt-6 text-right">
          <button type="button" onClick={onClose} className="text-sm text-gray-600 hover:underline">
            닫기
          </button>
        </div>
      </div>
    </div>
  )
}

export default DonorSearchModal
