import { create } from 'zustand'
import type { Comment, Reaction } from '../types'

interface LetterStore {
  comments: Comment[]
  setComments: (comments: Comment[]) => void
  reactions: Reaction[]
  setReactions: (reactions: Reaction[]) => void
}

export const useLetterStore = create<LetterStore>((set) => ({
  comments: [],
  setComments: (comments) => set({ comments }),
  reactions: [],
  setReactions: (reactions) => set({ reactions }),
}))
