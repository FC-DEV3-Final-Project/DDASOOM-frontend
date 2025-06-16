import { cn } from '@/lib/utils'

interface MemorialBadgeProps {
  donor: {
    donateName: string
    donateAge: number
    donateGender: string
  }
  variant: 'small' | 'medium' | 'large'
}

const FlowerBlob = () => (
  <svg
    className="absolute inset-0 h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 140 146"
    fill="none"
  >
    <path
      d="M56.8617 5.71C64.1871 -1.37664 75.8129 -1.37664 83.1383 5.71C87.3273 9.76246 93.152 11.655 98.923 10.8388C109.015 9.41133 118.42 16.2447 120.181 26.2837C121.188 32.0245 124.788 36.9793 129.937 39.711C138.94 44.488 142.533 55.5447 138.057 64.7015C135.497 69.9378 135.497 76.0622 138.057 81.2985C142.533 90.4553 138.94 101.512 129.937 106.289C124.788 109.021 121.188 113.976 120.181 119.716C118.42 129.755 109.015 136.589 98.923 135.161C93.152 134.345 87.3273 136.238 83.1383 140.29C75.8129 147.377 64.1871 147.377 56.8617 140.29C52.6727 136.238 46.848 134.345 41.077 135.161C30.9852 136.589 21.5798 129.755 19.8188 119.716C18.8118 113.976 15.212 109.021 10.0634 106.289C1.05989 101.512 -2.53265 90.4553 1.94345 81.2985C4.50309 76.0622 4.50309 69.9378 1.94346 64.7015C-2.53265 55.5447 1.05989 44.488 10.0634 39.711C15.212 36.9793 18.8118 32.0245 19.8188 26.2837C21.5798 16.2447 30.9852 9.41133 41.077 10.8388C46.848 11.655 52.6727 9.76245 56.8617 5.71Z"
      fill="#E0F5E6"
    />
  </svg>
)

const MemorialBadge = ({ donor, variant = 'medium' }: MemorialBadgeProps) => {
  return (
    <div
      className={cn(
        'relative',
        variant === 'small' && 'h-[68px] w-[68px]',
        variant === 'medium' && 'h-[120px] w-[120px]',
        variant === 'large' && 'h-[146px] w-[146px]',
      )}
    >
      {/* 배경 SVG */}
      <FlowerBlob />
      <div
        className={cn(
          'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-white shadow-[0_0px_20px_0px_rgb(147,220,168)]',
          variant === 'small' && 'h-[50px] w-[50px]',
          variant === 'medium' && 'h-[90px] w-[90px]',
          variant === 'large' && 'h-[110px] w-[110px]',
        )}
      ></div>
      {/* 오버레이 내용 */}
      <div className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center">
        <img
          src="/ribbon.png"
          alt="Memorial Ribbon"
          className={cn(
            variant === 'small' && 'h-[20px] w-[20px]',
            variant === 'medium' && 'h-[38px] w-[38px]',
            variant === 'large' && 'h-[42px] w-[42px]',
          )}
        />
        <p className="text-[10px] font-semibold text-gray-800 sm:text-[17px]">
          {donor.donateName}
          <span className="ml-1 font-normal">님</span>
        </p>
        <p className="text-gray-60 mt-[-4px] hidden text-[10px] font-bold sm:flex sm:text-[13px]">
          {donor.donateGender},{donor.donateAge}
        </p>
      </div>
    </div>
  )
}

export default MemorialBadge
