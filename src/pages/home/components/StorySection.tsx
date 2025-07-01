import React, { useState } from 'react'
import SectionHeader from '@/pages/home/components/SectionHeader'

const dummyData = [
  {
    title: '한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.',
    description: '한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.',
    imageUrl: '/story_image.png',
    link: '/story/1',
  },
  {
    title: '한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.',
    description: '한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.',
    imageUrl: '/story_image.png',
    link: '/story/1',
  },
  {
    title: '한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.',
    description: '한 사람의 따뜻한 선택이, 누군가의 내일을 다시 뛰게 합니다.',
    imageUrl: '/story_image.png',
    link: '/story/1',
  },
  {
    title: '기적은 누군가의 용기에서 시작됩니다.',
    description: '이 이야기는 기적처럼 시작된 사랑의 기록입니다.',
    imageUrl: '/hopes-seed.png',
    link: '/story/2',
  },
  {
    title: '기적은 누군가의 용기에서 시작됩니다.',
    description: '이 이야기는 기적처럼 시작된 사랑의 기록입니다.',
    imageUrl: '/hopes-seed.png',
    link: '/story/2',
  },
  {
    title: '기억하고 싶은 이야기',
    description: '우리의 마음 속에 남은 그날의 이야기',
    imageUrl: '/story_image.png',
    link: '/story/3',
  },
]

const StorySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const currentImage = dummyData[selectedIndex].imageUrl

  return (
    <div>
      <SectionHeader
        title="생명나눔 이야기"
        description="그리움과 사랑을 담아 소중한 이들을 기억하는 공간입니다."
        link=""
      />

      <section className="flex w-full gap-6">
        {/* 대표 이미지 */}
        <div className="bg-red-10 flex-1 overflow-hidden rounded-[20px] shadow-[0_16px_24px_0px_rgba(0,0,0,0.12)] sm:h-[327px] sm:w-[245px] sm:flex-none sm:shrink-0">
          <img
            src={currentImage}
            alt="대표 이미지"
            className="h-full w-full object-cover transition-all duration-300"
          />
        </div>

        {/* 텍스트 리스트 */}
        <div className="flex max-w-[321px] min-w-[100px] flex-1 flex-col gap-2 text-[11px] sm:text-[19px]">
          {dummyData.slice(0, 6).map((item, i) => (
            <p
              key={i}
              onMouseEnter={() => setSelectedIndex(i)}
              onClick={() => (window.location.href = item.link)}
              className={`text-gray-80 w-full cursor-pointer overflow-hidden rounded-[100px] px-[10px] py-[6px] overflow-ellipsis whitespace-nowrap transition-colors sm:px-[18px] sm:py-[10px] ${selectedIndex === i ? 'bg-gray-10 font-bold' : 'hover:bg-gray-10 hover:font-bold'}`}
            >
              {item.title}
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}

export default StorySection
