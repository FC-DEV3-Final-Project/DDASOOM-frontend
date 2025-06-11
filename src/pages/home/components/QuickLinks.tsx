import { cn } from '@/lib/utils'
import { HandHeart } from 'lucide-react'
import type { ReactElement } from 'react'

const QuickLinksButton = ({
  icon,
  iconSrc,
  text,
  className,
  link,
}: {
  icon?: ReactElement
  iconSrc?: string
  text: string
  className?: string
  link: string
}) => {
  return (
    <a
      href={link}
      className={cn(
        'flex min-w-[162.5px] flex-1 items-center justify-between rounded-[100px] border-1 border-[#EAEAEA] bg-white px-3 py-2 transition-all duration-300 ease-in-out hover:shadow-md focus:outline-none sm:flex-none sm:gap-[14px] sm:border-[2.5px] sm:px-[28px] sm:py-[20px]',
        className,
      )}
    >
      <div className="flex items-center text-red-500">
        {icon ? (
          icon
        ) : iconSrc ? (
          <img src={iconSrc} className="w-[20px] sm:h-[40px] sm:w-[40px]" alt={text} />
        ) : null}
        <span className="text-gray-80 ml-1 text-[14px] font-bold whitespace-nowrap sm:ml-5 sm:text-[24px]">
          {text}
        </span>
      </div>
      <span className="text-gray-80 text-lg sm:text-[24px]">&gt;</span>
    </a>
  )
}

const QuickLinks = () => {
  return (
    <section className="mx-auto flex w-full max-w-[1300px] bg-white/80 py-6 backdrop-blur-lg sm:py-0">
      <div className="flex w-full flex-wrap gap-[10px] sm:flex-nowrap sm:justify-between">
        <QuickLinksButton
          link=""
          icon={<HandHeart className="w-[20px] sm:h-[40px] sm:w-[40px]" strokeWidth={1.5} />}
          text="기증자 예우"
        />
        <QuickLinksButton
          link=""
          iconSrc="/icon/ecg_heart.svg"
          text="장기·조직기증 소개"
          className="hidden sm:flex"
        />
        <QuickLinksButton
          link=""
          iconSrc="/icon/ecg_heart.svg"
          text="장기·조직기증"
          className="sm:hidden"
        />
        <QuickLinksButton link="" iconSrc="/icon/identity.svg" text="기증 희망등록" />
        <QuickLinksButton
          link="https://koda1458.kr/post/mem/memLogin.c"
          iconSrc="/icon/mail.svg"
          text="생명나눔 희망우체통"
          className="hidden sm:flex"
        />
        <QuickLinksButton
          link="https://koda1458.kr/post/mem/memLogin.c"
          iconSrc="/icon/mail.svg"
          text="희망 우체통"
          className="sm:hidden"
        />
      </div>
    </section>
  )
}

export default QuickLinks
