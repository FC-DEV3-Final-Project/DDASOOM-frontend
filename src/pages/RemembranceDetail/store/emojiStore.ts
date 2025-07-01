import { create } from 'zustand'
import { emojiService } from '@/pages/RemembranceDetail/services/emojiService'

interface EmojiStore {
  isLoading: boolean
  postEmoji: (donateSeq: number, emoji: string) => Promise<void>
}

export const useEmojiStore = create<EmojiStore>((set) => ({
  isLoading: false,
  postEmoji: async (donateSeq, emoji) => {
    set({ isLoading: true })
    try {
      await emojiService.postEmoji({ donateSeq, emoji })
      // 성공 후 추가 동작이 필요하면 여기에 작성
    } finally {
      set({ isLoading: false })
    }
  },
}))
