import { safeAxios } from '@/shared/lib/safeAxios'

export interface Reply {
  replySeq: number
  donateSeq: number
  replyWriter: string
  replyWriterId: string | null
  replyContents: string
  replyWriteTime: string
  replyModifyTime: string | null
  replyModifierId: string | null
}

export interface RemembranceDetailResponse {
  donateSeq: number
  donorName: string
  donateDate: string
  contents: string
  genderFlag: string
  donateAge: number
  flowerCount: number
  loveCount: number
  seeCount: number
  missCount: number
  proudCount: number
  hardCount: number
  sadCount: number
  replies: Reply[]
  heavenLetters: string[]
  new: boolean
}

const USE_MOCK_DATA = true

async function mockGetRemembranceDetail(donateSeq: number): Promise<RemembranceDetailResponse> {
  return {
    donateSeq,
    donorName: '홍*동',
    donateDate: '2013-11-14',
    contents:
      '<strong>기증자&nbsp;홍*동(남, 12)님은 2013년 4월 14일 환자들에게 귀중한 생명을 선물해주셨습니다.<br />\r\n<br />\r\n</strong>한국장기기증원은 귀한 생명을 나눠주신 기증자와 유가족께 깊이 감사드리며, <br />\r\n앞으로도 기증자 유가족들이 건강한 삶을 유지할 수 있도록 최선을 다해 지원할 것입니다. <br />\r\n<br />\r\n고인의 명복을 빕니다.',
    genderFlag: '남',
    donateAge: 12,
    flowerCount: 2,
    loveCount: 0,
    seeCount: 0,
    missCount: 0,
    proudCount: 0,
    hardCount: 0,
    sadCount: 0,
    replies: [],
    heavenLetters: [],
    new: false,
  }
}

export interface RemembranceDetailService {
  getRemembranceDetail: (donateSeq: number) => Promise<RemembranceDetailResponse>
}

export const remembranceDetailService: RemembranceDetailService = {
  getRemembranceDetail: async (donateSeq) => {
    if (USE_MOCK_DATA) {
      return mockGetRemembranceDetail(donateSeq)
    }
    return await safeAxios<RemembranceDetailResponse>({
      url: `/remembrance/${donateSeq}`,
      method: 'GET',
    })
  },
}
