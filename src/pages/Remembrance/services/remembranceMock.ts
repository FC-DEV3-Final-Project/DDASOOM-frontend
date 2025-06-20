import type {
  GetDonorsResponse,
  GetDonorsParams,
  DonorApiResponseItem,
} from '@/pages/Remembrance/services/remembranceService'

const MOCK_DONORS: DonorApiResponseItem[] = Array.from({ length: 360 }, (_, i) => {
  const seq = i + 1
  const gender = seq % 2 === 0 ? '남' : '여'
  const age = 20 + (seq % 40)
  const date = new Date()
  date.setDate(date.getDate() - seq * 10)
  const donateDate = date.toISOString().split('T')[0]
  const birthDate = new Date(date.getFullYear() - age, date.getMonth(), date.getDate())
    .toISOString()
    .split('T')[0]

  return {
    donateSeq: seq,
    donorName: `김기증${seq}`,
    donateAge: age,
    genderFlag: gender,
    donateDate: donateDate,
    donorBirthdate: birthDate,
    anonymityFlag: 'N',
    commentCount: seq % 5,
  }
})

// 필터링과 페이지네이션을 시뮬레이션하는 함수
export const getMockDonors = (params: GetDonorsParams): GetDonorsResponse => {
  const { page = 0, size = 18, donorName } = params
  let filteredDonors = MOCK_DONORS

  if (donorName) {
    filteredDonors = MOCK_DONORS.filter((donor) => donor.donorName.includes(donorName))
  }

  const totalElements = filteredDonors.length
  const totalPages = Math.ceil(totalElements / size)
  const startIndex = page * size
  const endIndex = startIndex + size
  const content = filteredDonors.slice(startIndex, endIndex)

  return {
    content,
    totalElements,
    totalPages,
    number: page,
    size,
    first: page === 0,
    last: page === totalPages - 1,
    numberOfElements: content.length,
    empty: content.length === 0,
  }
}
