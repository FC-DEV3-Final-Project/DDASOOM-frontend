import { useState, useRef } from 'react'

export function useCarousel(length: number, swipeThreshold = 50) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + length) % length)
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % length)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current

    if (deltaX > swipeThreshold) {
      prevSlide()
    } else if (deltaX < -swipeThreshold) {
      nextSlide()
    }

    touchStartX.current = null
  }

  return {
    index,
    setIndex,
    prevSlide,
    nextSlide,
    onTouchStart,
    onTouchEnd,
  }
}
