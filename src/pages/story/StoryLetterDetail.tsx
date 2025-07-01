import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import WarningBanner from '@/shared/components/WarningBanner'
import Letter from '@/pages/story/components/Letter'
import BackToListButton from '@/shared/components/BackToListButton'
import CommentContainer from '@/pages/story/components/CommentContainer'

interface Letter {
  storyTitle: string
  storyContents: string
  writeTime: string
  areaCode: string
  donorName: string
  readCount: number
  storyWriter: string
  storySeq: number
  letterFont: number
  letterPaper: number
  comments: {
    commentWriter: string
    commentPasscode: string
    contents: string
    writeTime: string
    commentSeq: number
  }[]
}

const StoryLetterDetail = () => {
  const { storySeq } = useParams<{ storySeq: string }>()
  const [storyInfo, setStoryInfo] = useState<Letter | null>(null)

  const fetchLetter = async () => {
    const res = await fetch(`http://koda2.elementsoft.biz:8081/donationLetters/${storySeq}`)
    const data = await res.json()
    setStoryInfo(data)
  }

  useEffect(() => {
    fetchLetter()
  }, [storySeq])

  return (
    <>
      <BackToListButton to="/remembrance/story" label="기증 後 스토리" />
      <section className="mx-auto flex w-full max-w-[1000px] flex-col gap-6 p-5 sm:gap-[80px]">
        <WarningBanner
          title={
            <>
              기증자에 대한 그리움과 사랑을 담은 <b className="text-red-40">‘하늘나라 편지'</b>는
              언제 어디서나 시간과 장소에 제약을 받지 않고 추모를 할 수 있는 온라인 공간으로 익명
              작성이 가능합니다.
            </>
          }
          listItems={[
            <>
              기증자에 대한 추모 분위기를 해치거나, 비방의 글 등이 게시가 될 경우 삭제될 수
              있습니다. 경건한 분위기에서 기증자분을 추모할 수 있도록 많은 노력 부탁드립니다.
            </>,
            <>
              개인정보 노출의 우려가 있으니 게시글 작성 시 개인정보 등록은 자제하여 주시기 바랍니다.
            </>,
            <>
              하늘나라편지에 쓰신 글은{' '}
              <b>기증활성화를 위해 한국장기조직기증원 뉴스레터 및 타 매체</b>에 익명 표기와 뜻을
              훼손하지 않는 범위의 수정을 통해 게재될 수 있습니다.
            </>,
          ]}
        />
        {storyInfo && <Letter item={storyInfo} />}
        {storyInfo && (
          <CommentContainer
            storySeq={storyInfo.storySeq}
            comments={storyInfo.comments}
            onAddComment={fetchLetter}
          />
        )}
      </section>
    </>
  )
}
export default StoryLetterDetail
