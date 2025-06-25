export const areaCodesConvertKR = (code: string): string => {
  const areaMap: Record<string, string> = {
    AREA100: '1권역(수도권, 강원, 제주)',
    AREA200: '2권역(충청, 전라)',
    AREA300: '3권역(영남)',
  }

  return areaMap[code] || '알 수 없음'
}

export const organCodesConvertKR = (code: string): string => {
  const organMap: Record<string, string> = {
    ORGAN001: '신장',
    ORGAN002: '간장',
    ORGAN003: '췌장',
    ORGAN004: '심장',
    ORGAN005: '폐',
    ORGAN006: '췌도',
    ORGAN007: '소장',
    ORGAN008: '대장',
    ORGAN009: '위장',
    ORGAN010: '십이지장',
    ORGAN011: '비장',
    ORGAN012: '손, 팔',
    ORGAN013: '안구',
    ORGAN014: '인체조직',
    ORGAN000: '직접입력',
  }

  return organMap[code] || '알 수 없음'
}
