import { cn } from '@/lib/utils'

const LetterCard = ({ isFocused }: { isFocused: boolean }) => {
  return (
    <div
      className={cn(
        'border-gray-20 h-[244px] w-[354px] rounded-tl-[80px] rounded-tr-[20px] rounded-br-[80px] rounded-bl-[20px] border-2 p-[40px]',
        { 'border-red-40': isFocused },
      )}
    >
      <div className="mb-1 flex">
        {isFocused ? (
          <img src="/public/icon/mail.svg" alt="" width={20} className="mr-2 inline" />
        ) : (
          <img src="/public/icon/mail-g.svg" alt="" width={20} className="mr-2 inline" />
        )}
        <span className={cn('text-gray-40', { 'text-red-40': isFocused })}>
          {'1231223'}번째 편지
        </span>
      </div>
      <p className="text-gray-80 multi-line-ellipsis mb-3 h-[58px] text-[19px] font-bold">
        잘 지내는지 궁금하네. 하루하루가 참 낯설고 많이 허전해 어디 있든 잘 지내
      </p>
      <a href="/detail/12331" className="text-gray-40 text-[15px] font-bold">
        더보기
      </a>
      <div
        className={cn('border-gray-20 mt-3 border-t-2 border-dashed', {
          'border-red-10': isFocused,
        })}
      ></div>
      <div
        className={cn('text-gray-60 flex justify-end gap-7 pt-2 text-[15px]', {
          'text-gray-90': isFocused,
        })}
      >
        <div>
          기증자<span className="ml-2 font-bold">{'최*현'}</span>
        </div>
        <div>
          추모자<span className="ml-2 font-bold">{'최*현'}</span>
        </div>
      </div>
    </div>
  )
}
export default LetterCard
