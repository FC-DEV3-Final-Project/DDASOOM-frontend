export interface ButtonProps {
  clickHandler: () => void
  label: string
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

function Button({
  clickHandler,
  label,
  size = 'medium',
  disabled = false,
  variant = 'primary',
}: ButtonProps) {
  // tailwindcss를 사용하여 css class를 임시 지정
  // 작업 시에는 KRDS에서 제공하는 css로 변경

  // 기본 스타일 클래스
  const baseClasses = `
    rounded 
    px-4 
    py-2 
    transition 
    shadow 
    font-semibold 
    border-none
  `
  // 사이즈에 따른 스타일 클래스
  const sizeClasses = size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base'

  // variant에 따른 스타일 클래스
  // KRDS의 btn css를 가져오면 쉽게 변경 가능
  const variantClasses =
    variant === 'primary'
      ? 'text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
      : 'text-blue-700 bg-white border border-blue-600 hover:bg-blue-50 active:bg-blue-100 border-gray-300'

  // disabled일 경우 스타일 클래스
  const disabledClasses = `
    bg-gray-300 
    text-gray-500 
    cursor-not-allowed 
    border-none
  `

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={clickHandler}
      aria-label={label}
      className={` ${baseClasses} ${sizeClasses} ${disabled ? disabledClasses : variantClasses} ${disabled ? '' : 'cursor-pointer'} `}
    >
      {label}
    </button>
  )
}

export default Button
