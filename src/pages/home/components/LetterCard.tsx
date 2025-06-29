import { cn } from '@/lib/utils'
interface Props {
  isFocused: boolean
  letter: {
    donorName: string
    letterSeq: number
    letterTitle: string
    letterWriter: string
  }
  onClick: () => void
}

const LetterCard = ({ isFocused, letter, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'border-gray-20 h-[164px] w-[200px] cursor-pointer rounded-tl-[40px] rounded-tr-[10px] rounded-br-[40px] rounded-bl-[10px] border-2 px-[22px] py-5 shadow-[0_4px_8px_0px_rgba(0,0,0,0.12)] sm:h-[250px] sm:w-[354px] sm:rounded-tl-[80px] sm:rounded-tr-[20px] sm:rounded-br-[80px] sm:rounded-bl-[20px] sm:px-[40px] sm:py-[40px]',
        isFocused && 'border-red-40 shadow-[0_16px_24px_0px_rgba(230,232,234,1)]',
      )}
    >
      <div className="mb-1 flex">
        {isFocused ? (
          <img src="/icon/mail.svg" alt="" className="mr-2 inline w-3 sm:w-5" />
        ) : (
          <img src="/icon/mail-g.svg" alt="" className="mr-2 inline w-3 sm:w-5" />
        )}
        <span className={cn('text-gray-40 text-[10px] sm:text-base', isFocused && 'text-red-40')}>
          {letter.letterSeq}번째 편지
        </span>
      </div>
      <p className="text-gray-80 multi-line-ellipsis mb-1 h-[40px] text-[14px] font-bold sm:mb-3 sm:h-[58px] sm:text-[19px]">
        {letter.letterTitle}
      </p>
      <a href="/detail/12331" className="text-gray-40 text-[12px] font-bold sm:text-[15px]">
        더보기
      </a>
      <div
        className={cn(
          'border-gray-20 mt-2 border-t-2 border-dashed sm:mt-[14px]',
          isFocused && 'border-red-10',
        )}
      ></div>
      <div
        className={cn(
          'text-gray-60 flex gap-5 pt-[10px] text-[12px] sm:justify-end sm:gap-7 sm:pt-[14px] sm:text-[15px]',
          isFocused && 'text-gray-90',
        )}
      >
        <div>
          기증자 <span className="font-bold">{letter.donorName}</span>
        </div>
        <div>
          추모자 <span className="font-bold">{letter.letterWriter}</span>
        </div>
      </div>
    </div>
  )
}
export default LetterCard
