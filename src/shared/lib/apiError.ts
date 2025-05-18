export const API_ERROR_NAME = 'ApiError' as const

/**
 * API 요청 중 발생하는 오류를 표현하는 커스텀 에러 클래스입니다.
 * 서버 응답 실패 또는 비즈니스 로직 실패를 명확하게 구분하고,
 * 에러 객체를 통해 코드, 상태, 원인을 함께 전달할 수 있습니다.
 */
export interface ApiErrorOptions {
  code?: string | number
  status?: number
  cause?: unknown
}

export class ApiError extends Error {
  readonly name = API_ERROR_NAME // 에러 이름 (Error.name override)
  readonly code?: string | number // 서버가 내려준 비즈니스 에러 코드 (e.g. 'EMAIL_TAKEN')
  readonly status?: number // HTTP 상태 코드 (e.g. 400, 401, 500)
  readonly cause?: unknown // 원본 응답 전체 or 내부 에러 (디버깅/Sentry 로그용)

  constructor(
    message: string, // 에러 메시지: 사용자 또는 개발자에게 전달할 기본 메시지
    options?: ApiErrorOptions,
  ) {
    super(message)
    this.name = API_ERROR_NAME
    this.code = options?.code
    this.status = options?.status
    this.cause = options?.cause

    // Node.js, Sentry 환경에서 stack trace에서 이 constructor 생략
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError)
    }
  }
}
