import { useState, useEffect } from 'react'
import CommentSection from '@/pages/RemembranceDetail/components/CommentSection'
import { INITIAL_REACTIONS } from '@/pages/RemembranceDetail/constants'
import type { Comment, Reaction } from '@/pages/RemembranceDetail/types'
import { useGetRemembranceDetail } from '@/pages/RemembranceDetail/queries/useGetRemembranceDetail'
import { useParams } from 'react-router-dom'
import { formatKoreanDate } from '@/pages/RemembranceDetail/utils/dateUtils'
import { usePostEmoji } from '@/pages/RemembranceDetail/queries/usePostEmoji'

const MAX_COMMENT_LENGTH = 1000

const RemembranceDetailPage = () => {
  // 댓글 상태
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      writer: '이',
      contents: '삼가 고인의 명복을 빕니다.',
      date: '25. 05. 26.',
      password: '1234',
    },
    { id: 2, writer: '홍', contents: '🙏', date: '25. 06. 04.', password: '1111' },
    {
      id: 3,
      writer: '홍',
      contents: '삼가 고인의 명복을 빕니다.',
      date: '25. 06. 04.',
      password: '1111',
    },
    {
      id: 4,
      writer: '나',
      contents: '삼가 고인의 명복을 빕니다.. 헌신에 감사드립니다.',
      date: '25. 06. 04.',
      password: '0000',
    },
  ])
  const { donateSeq } = useParams<{ donateSeq: string }>()
  const donateSeqNumber = Number(donateSeq)
  const { data } = useGetRemembranceDetail(donateSeqNumber)

  // 이모지(헌화) POST 훅
  const { mutate: postEmoji, isPending: isFlowerPending } = usePostEmoji()

  const [comment, setComment] = useState('')
  const [password, setPassword] = useState('')
  const [reactions, setReactions] = useState<Reaction[]>(INITIAL_REACTIONS)
  const [myReaction, setMyReaction] = useState<string | null>(null)

  // flowerCount를 로컬 상태로 관리
  const [localFlowerCount, setLocalFlowerCount] = useState<number>(data?.flowerCount ?? 0)
  // 헌화하기 버튼 클릭 여부 로컬 상태
  const [isFlowerClicked, setIsFlowerClicked] = useState<boolean>(false)

  // data가 바뀌면 flowerCount도 동기화
  useEffect(() => {
    setLocalFlowerCount(data?.flowerCount ?? 0)
  }, [data?.flowerCount])

  // 댓글 등록
  const handleRegister = () => {
    if (!comment.trim() || !password.trim() || comment.length > MAX_COMMENT_LENGTH) return
    const newId = Date.now()
    setComments([
      ...comments,
      {
        id: newId,
        writer: '나',
        contents: comment,
        date: new Date().toLocaleDateString('ko-KR').slice(2),
        password,
      },
    ])
    setComment('')
    setPassword('')
  }

  // 리액션 클릭
  const handleReaction = (name: string) => {
    if (myReaction) return
    setReactions(reactions.map((r) => (r.name === name ? { ...r, count: r.count + 1 } : r)))
    setMyReaction(name)
  }

  // 헌화하기 버튼 클릭 핸들러
  const handleFlower = () => {
    if (!donateSeqNumber || isFlowerClicked) return
    setLocalFlowerCount((prev) => prev + 1) // UI에서 즉시 증가
    setIsFlowerClicked(true) // 한 번만 클릭 가능
    postEmoji({ donateSeq: donateSeqNumber, emoji: 'flower' })
  }

  return (
    <>
      <main className="flex w-[1300px] items-start px-[20px] py-[20px]">
        {/* Memorial Section */}
        <div className="flex w-[740px] flex-col gap-[100px]">
          <section className="relative flex flex-col gap-[60px]">
            <div className="flex flex-col gap-10">
              <h1 className="mb-2 font-[#1E2124] text-[40px] font-bold">추모합니다.</h1>
              <div className="flex gap-10 text-[19px]">
                <div className="flex items-center gap-3">
                  <span>기증자</span>
                  <span className="font-bold">{data?.donorName}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>기증일</span>
                  <span className="font-bold">{data?.donateDate}</span>
                </div>
              </div>
            </div>
            <div className="h-[2px] w-[50px] bg-[#E6E8EA]" />
            <div className="flex flex-col gap-10 text-[17px] text-[#000000]">
              <p className="font-bold">
                {`기증자 ${data?.donorName}(${data?.genderFlag}, ${data?.donateAge})님은 ${formatKoreanDate(data?.donateDate)} 환자들에게 귀중한 장기를 선물해주셨습니다.`}
              </p>
              <p>
                한국장기조직기증원은 귀한 생명을 나눠주신 기증자와 유가족께 깊이 감사드리며,
                앞으로도 기증자 유가족들이 건강한 삶을 유지할 수 있도록 최선을 다해 지원할 것입니다.
              </p>
              <p className="font-bold">고인의 명복을 빕니다.</p>
            </div>
            <img
              src="/images/letter-page/flower1.png"
              alt="Flower"
              className="absolute top-8 right-8 hidden w-48 md:block"
            />
          </section>

          {/* Flower Offering Section */}
          <section className="flex flex-col items-start gap-6">
            <button
              className={`flex items-center gap-2 rounded-full border border-[#E6E8EA] bg-[#F4F5F6] px-5 py-[10px] transition-all duration-200 hover:scale-105 hover:bg-[#e0e7ef] hover:shadow-md ${isFlowerClicked ? 'border-green-600' : ''}`}
              onClick={handleFlower}
              disabled={isFlowerPending || isFlowerClicked}
            >
              <span className="font-bold">헌화하기</span>
              <span className="font-bold text-green-600">{localFlowerCount}</span>
            </button>
            <div className="relative flex w-full">
              <div className="flex gap-3">
                {Array.from({ length: 10 }).map((_, idx) => {
                  let opacity = 1
                  if (idx === 7) opacity = 0.8
                  if (idx === 8) opacity = 0.7
                  if (idx === 9) opacity = 0.4
                  return (
                    <img
                      key={idx}
                      src="/images/letter-page/flower2.png"
                      alt="Flower"
                      className="h-15 w-15 transition-opacity duration-300"
                      style={{ opacity }}
                    />
                  )
                })}
              </div>
              <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white" />
            </div>
          </section>

          {/* Letters to Heaven Section */}
          <section className="flex flex-col gap-6">
            <div className="mb-2 flex items-end justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">홍*동 님에게 도착한 하늘나라 편지</h2>
                <button className="text-gray-600 hover:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 opacity-40 hover:bg-gray-100">
                  &lt;
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 hover:bg-gray-100">
                  &gt;
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-4 rounded-2xl border border-red-200 bg-white p-6 shadow-md"
                >
                  <div className="flex items-center gap-2 text-sm text-red-500">
                    <span>💌</span>
                    <span>12539번째 편지</span>
                  </div>
                  <p className="text-gray-800">
                    잘 지내는지 궁금하네. 하루하루가 참 낯설고 많이 허전해 어디 있든 잘 지내
                  </p>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-sm">
                    <div className="text-gray-700">
                      <span className="font-semibold">To.</span> 기증자 홍*동
                    </div>
                    <div className="text-gray-700">
                      <span className="font-semibold">From.</span> 추모자 김*수
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>2025. 06. 04.</span>
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1">👁️ 123</span>
                      <span className="flex items-center gap-1">💬 456</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* 우측 댓글 */}
        <CommentSection
          comments={comments}
          reactions={reactions}
          myReaction={myReaction}
          onReaction={handleReaction}
          comment={comment}
          password={password}
          onCommentChange={setComment}
          onPasswordChange={setPassword}
          onRegister={handleRegister}
          className="ml-auto"
        />
      </main>
    </>
  )
}

export default RemembranceDetailPage
