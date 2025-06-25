import { useQuery } from '@tanstack/react-query'
import { fetchComments } from '../services/commentService'
import { useLetterStore } from '../store/letterStore'

export function useComments(storyId: string) {
  const setComments = useLetterStore((s) => s.setComments)
  return useQuery(['comments', storyId], () => fetchComments(storyId), {
    onSuccess: setComments,
  })
}
