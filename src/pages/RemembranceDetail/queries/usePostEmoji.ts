import { useMutation } from '@tanstack/react-query'
import { emojiService } from '@/pages/RemembranceDetail/services/emojiService'
import type { PostEmojiParams } from '@/pages/RemembranceDetail/services/emojiService'

export const usePostEmoji = () => {
  return useMutation({
    mutationFn: (params: PostEmojiParams) => emojiService.postEmoji(params),
  })
}
