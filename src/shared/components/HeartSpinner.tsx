/**
 * 부드럽게 고동치는 하트 모양의 SVG 아이콘 컴포넌트
 */
const HeartSpinner = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <style>
        {`
          @keyframes heart-beat {
            0% { transform: scale(0.95); }
            5% { transform: scale(1.1); }
            39% { transform: scale(0.85); }
            45% { transform: scale(1); }
            60% { transform: scale(0.95); }
            100% { transform: scale(0.9); }
          }
          .animate-heart-beat {
            animation: heart-beat 2s infinite ease-in-out;
            transform-origin: center;
          }
        `}
      </style>
      <path
        className="animate-heart-beat"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  )
}

export default HeartSpinner
