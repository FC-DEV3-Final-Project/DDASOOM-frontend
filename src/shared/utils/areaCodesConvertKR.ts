export const areaCodesConvertKR = (code: string): string => {
  const areaMap: Record<string, string> = {
    AREA100: '1권역(수도권, 강원, 제주)',
    AREA200: '2권역(충청, 전라)',
    AREA300: '3권역(영남)',
  }

  return areaMap[code] || '알 수 없음'
}
