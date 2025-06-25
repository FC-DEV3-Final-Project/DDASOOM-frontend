import { safeAxios } from '@/shared/lib/safeAxios'

// 이모지 POST 요청 파라미터 타입
export interface PostEmojiParams {
  donateSeq: number
  emoji: string
}

// 이모지 POST 응답 타입
export interface PostEmojiResponse {
  success: boolean
  donateSeq: number
  emoji: string
}

const USE_MOCK_DATA = true // false로 바꾸면 실제 API 호출

// 실제 API가 동작하지 않을 때 사용할 mock 함수
async function mockPostEmoji(params: PostEmojiParams): Promise<PostEmojiResponse> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return { success: true, donateSeq: params.donateSeq, emoji: params.emoji }
}

export interface EmojiService {
  postEmoji: (params: PostEmojiParams) => Promise<PostEmojiResponse>
}

export const emojiService: EmojiService = {
  postEmoji: async (params) => {
    if (USE_MOCK_DATA) {
      return mockPostEmoji(params)
    }
    // 실제 API 호출
    return await safeAxios<PostEmojiResponse>({
      url: `/remembrance/${params.donateSeq}/emoji`,
      method: 'POST',
      params: { emoji: params.emoji },
    })
  },
  // 추후 getEmojis, deleteEmoji 등 추가 가능
}
