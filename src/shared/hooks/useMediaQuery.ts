import { useState, useEffect } from 'react'

/**
 * 미디어 쿼리 문자열을 인자로 받아 해당 쿼리의 충족 여부를 boolean 값으로 반환하는 커스텀 훅.
 * @param query - 감지할 미디어 쿼리 문자열 (e.g., '(max-width: 767px)')
 * @returns 미디어 쿼리 충족 여부 (boolean)
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록 window 객체 존재 여부 확인
    if (typeof window === 'undefined') {
      return
    }

    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => {
      setMatches(media.matches)
    }

    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}
