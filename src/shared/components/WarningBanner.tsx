import React from 'react'

interface WarningBannerProps {
  title?: React.ReactNode
  listItems: React.ReactNode[]
  className?: string
}

const WarningBanner = ({ title, listItems, className = '' }: WarningBannerProps) => {
  return (
    <article
      className={`bg-red-5 flex w-full items-start gap-[14px] rounded-[20px] p-5 sm:gap-5 sm:p-6 ${className}`}
    >
      <img src="icon/emergency.svg" alt="경고" />
      <div>
        {title && (
          <p className="text-[15px] font-bold text-[#222] sm:mb-3 sm:text-[17px]">{title}</p>
        )}
        {listItems.length > 0 && (
          <ul className="hidden list-disc pl-5 text-[14px] leading-[200%] text-[#444] sm:block">
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export default WarningBanner
