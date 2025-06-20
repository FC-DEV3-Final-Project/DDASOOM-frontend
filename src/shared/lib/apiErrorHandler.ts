import { toast } from 'react-toastify'
import { ApiError } from '@/shared/lib/apiError'

/**
 * ApiError를 기준으로 UI/로깅을 일원적으로 처리합니다.
 */
export function apiErrorHandler(err: unknown) {
  if (!(err instanceof ApiError)) {
    toast.error('알 수 없는 오류가 발생했습니다.')
    console.error(err)
    return
  }

  const { status, code, message } = err

  // HTTP 레벨 에러 (status !== 200)
  if (status !== 200) {
    switch (status) {
      case 401:
        toast.error(message || '로그인이 필요합니다.')
        return
      case 403:
        toast.error(message || '접근 권한이 없습니다.')
        return
      case 404:
        toast.error(message || '리소스를 찾을 수 없습니다.')
        return
      default:
        toast.error(message || '서버 오류가 발생했습니다.')
        return
    }
  }

  // 비즈니스 레벨 에러 (status === 200, code로 분기)
  switch (code) {
    case 201:
      toast.success(message || '정상 처리되었습니다.')
      return
    case 400:
      toast.error(message || '필수 입력값이 누락되었습니다.')
      return
    case 422:
      toast.error(message || '입력 검증에 실패했습니다.')
      return
    case 500:
      toast.error(message || '서버 내부 오류가 발생했습니다.')
      return
    default:
      toast.error(message || '요청 처리 중 오류가 발생했습니다.')
  }
}
