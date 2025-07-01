import { safeAxios } from '@/shared/lib/safeAxios'
import { getMockDonors } from '@/pages/Remembrance/services/remembranceMock'

/**
 * API 응답에 포함된 개별 기증자 데이터 타입 (최신 스펙)
 */
export interface DonorApiResponseItem {
  donateSeq: number
  donorName: string
  anonymityFlag: 'Y' | 'N'
  genderFlag: '남' | '여'
  donateAge: number | null
  donateDate: string
  commentCount: number
  donorBirthdate: string | null
}

/**
 * getDonors 함수 요청 파라미터 타입
 */
export interface GetDonorsParams {
  donorName?: string
  page?: number
  size?: number
  sortField?: 'donateDate' | 'donorBirthdate'
  direction?: 'Desc' | 'Asc'
  searchStart?: string
  searchEnd?: string
  hasBirthdate?: boolean
  year?: string
}

/**
 * getDonors 함수 응답 타입 (최신 스펙)
 */
export interface GetDonorsResponse {
  content: DonorApiResponseItem[]
  totalPages: number
  totalElements: number
  size: number
  number: number
  first: boolean
  last: boolean
  numberOfElements: number
  empty: boolean
}

/**
 * getDonors 함수의 타입 정의
 */
export type GetDonors = (params: GetDonorsParams) => Promise<GetDonorsResponse>

// 목 데이터 사용 여부를 결정하는 플래그
const USE_MOCK_DATA = false // 이 값을 false로 바꾸면 실제 API를 호출합니다.

/**
 * 기증자 정보를 가져오는 API 서비스
 */
export const remembranceService: {
  getDonors: GetDonors
} = {
  getDonors: async (params) => {
    if (USE_MOCK_DATA) {
      // 목 데이터 사용
      console.log('✅ Mocking API call for getDonors with params:', params)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(getMockDonors(params))
        }, 500) // 0.5초 딜레이
      })
    }

    // 실제 API 호출
    return await safeAxios<GetDonorsResponse>({
      url: `/api/remembrance`,
      method: 'GET',
      params: {
        ...params,
        hasBirthdate: params.hasBirthdate ? 'true' : undefined,
      },
    })
  },
}
