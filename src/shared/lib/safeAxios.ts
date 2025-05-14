import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import { ApiError } from './apiError'

// 에러 메시지 상수
const ERROR_MESSAGES = {
  REQUEST_FAILED: '요청 실패',
  SERVER_ERROR: '서버 오류 발생',
  UNKNOWN_ERROR: '알 수 없는 오류가 발생했습니다.',
} as const

/**
 * safeAxios에 전달할 수 있는 옵션
 */
export interface SafeAxiosOptions<T> {
  /** 응답 성공 여부를 판단하는 함수 (기본값: response.success !== false) */
  validateSuccess?: (responseData: unknown) => boolean
  /** 응답에서 실제 데이터를 추출하는 함수 (기본값: response.data || response) */
  extractPayload?: (responseData: unknown) => T
}

/**
 * safeAxios 함수 타입 정의
 */
export type SafeAxiosRequest = {
  <T = unknown>(config: AxiosRequestConfig, options?: SafeAxiosOptions<T>): Promise<T>
}

/**
 * Axios 요청을 안전하게 처리하는 래퍼 함수
 *
 * - 응답의 성공 여부를 자동으로 확인하고 실패 시 ApiError 발생
 * - 응답에서 필요한 데이터만 추출하여 반환
 * - 에러 상황을 일관된 방식으로 처리
 *
 * @example
 * // 기본 사용법
 * const data = await safeAxios({ url: '/api/users' });
 *
 * // 커스텀 검증 및 데이터 추출
 * const users = await safeAxios(
 *   { url: '/api/users' },
 *   {
 *     validateSuccess: (res) => res.status === 'ok',
 *     extractPayload: (res) => res.items
 *   }
 * );
 */
export const safeAxios: SafeAxiosRequest = async (config, options) => {
  try {
    const response = await axios(config)
    const responseData = response.data ?? {} // fallback 처리

    // 성공 여부 검증
    const isSuccess = options?.validateSuccess
      ? options.validateSuccess(responseData)
      : responseData?.success !== false

    if (!isSuccess) {
      throw new ApiError(responseData?.message || ERROR_MESSAGES.REQUEST_FAILED, {
        status: response.status,
        code: responseData?.code,
        cause: responseData,
      })
    }

    // 페이로드 추출
    const payload = options?.extractPayload
      ? options.extractPayload(responseData)
      : (responseData?.data ?? responseData)

    return payload
  } catch (error: unknown) {
    // Axios 에러인 경우
    if (axios.isAxiosError(error)) {
      const status = error.response?.status
      const responseData = error.response?.data ?? {} // fallback 처리
      const message = responseData?.message || error.message || ERROR_MESSAGES.SERVER_ERROR

      throw new ApiError(message, {
        status,
        code: responseData?.code,
        cause: responseData,
      })
    }

    // 기타 예외
    throw new ApiError(ERROR_MESSAGES.UNKNOWN_ERROR, {
      cause: error,
    })
  }
}
