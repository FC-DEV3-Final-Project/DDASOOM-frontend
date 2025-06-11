import React from 'react'
import SectionHeader from '@/pages/home/components/SectionHeader'

const dummyPosts = [
  {
    date: '2025-06-09',
    title: '[모집] 한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.',
  },
  {
    date: '2025-06-11',
    title: '[이벤트] 한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.',
  },
  {
    date: '2025-06-13',
    title: '한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.',
  },
  {
    date: '2025-06-13',
    title: '장기기증자 추모식',
  },
  {
    date: '2025-06-14',
    title: '장기기증자 추모식',
  },
  {
    date: '2025-06-14',
    title: '장기기증자 추모식',
  },
  {
    date: '2025-06-14',
    title: '장기기증자 추모식',
  },
  {
    date: '2025-06-14',
    title: '장기기증자 추모식',
  },
]

const NoticeItem: React.FC<{ post: { date: string; title: string } }> = ({ post }) => {
  return (
    <div className="flex justify-between text-[#424242]">
      <p className="w-[455px] cursor-pointer overflow-hidden text-[19px] overflow-ellipsis whitespace-nowrap">
        {post.title}
      </p>
      <span className="flex-shrink-0 text-[19px] text-[#616161]">{post.date}</span>
    </div>
  )
}

const NoticeSection: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SectionHeader title="공지사항" link="" />
      <div className="flex flex-col gap-5 overflow-hidden text-[19px] overflow-ellipsis whitespace-nowrap">
        {dummyPosts.slice(0, 6).map((post, i) => (
          <NoticeItem key={i} post={post} />
        ))}
      </div>
    </div>
  )
}

export default NoticeSection
