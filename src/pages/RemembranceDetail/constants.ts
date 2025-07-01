import type { Reaction } from '@/pages/RemembranceDetail/types'

export const INITIAL_REACTIONS: Reaction[] = [
  {
    text: '감사해요',
    name: 'seeCount',
    count: 2,
    icon: '/images/letter-page/reaction_thankyou.png',
  },
  { text: '사랑해요', name: 'loveCount', count: 0, icon: '/images/letter-page/reaction_love.png' },
  { text: '좋아요', name: 'hardCount', count: 0, icon: '/images/letter-page/reaction_missyou.png' },
  {
    text: '그리워요',
    name: 'missCount',
    count: 0,
    icon: '/images/letter-page/reaction_longing.png',
  },
  {
    text: '대단해요',
    name: 'proudCount',
    count: 0,
    icon: '/images/letter-page/reaction_proud.png',
  },
  { text: '슬퍼요', name: 'sadCount', count: 0, icon: '/images/letter-page/reaction_sad.png' },
]
