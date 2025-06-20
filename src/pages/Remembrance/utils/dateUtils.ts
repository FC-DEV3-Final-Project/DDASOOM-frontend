/**
 * 검색 날짜 범위를 시작/종료일 객체로 변환하는 헬퍼 함수
 * @param searchDateRange - { from: string; to: string } 형태의 객체
 * @returns { start: string, end: string } | null
 */
export function getSearchDateRange(searchDateRange: { from: string; to: string }) {
  const today = new Date().toISOString().split('T')[0]
  const oldestDate = '2013-01-01'

  if (searchDateRange.from && searchDateRange.to) {
    return { start: searchDateRange.from, end: searchDateRange.to }
  } else if (searchDateRange.from && !searchDateRange.to) {
    return { start: searchDateRange.from, end: today }
  } else if (!searchDateRange.from && searchDateRange.to) {
    return { start: oldestDate, end: searchDateRange.to }
  }
  return null
}

/**
 * YYYYMMDD 형식의 문자열을 YYYY-MM-DD로 변환합니다.
 * @param dateStr - YYYYMMDD 형식의 날짜 문자열
 * @returns YYYY-MM-DD 형식의 날짜 문자열, 유효하지 않으면 원래 값을 반환
 */
export function formatDate(dateStr: string | null): string {
  if (!dateStr || dateStr.length !== 8) return dateStr || ''
  return `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`
}
