// src/shared/lib/safeAxios.ts
import type { AxiosRequestConfig } from 'axios'
import { apiClient } from './apiClient'
import { ApiError } from './apiError'

export type ApiResponse<T = unknown> = {
  success?: boolean
  data?: T
  code?: string | number
  message?: string
} & Record<string, unknown>

export interface SafeAxiosOptions<T> {
  /** 응답 성공 여부 판단 (기본: res.success !== false) */
  validateSuccess?: (res: ApiResponse<T>) => boolean
  /** 실제 데이터 추출 (기본: res.data ?? res) */
  extractPayload?: (res: ApiResponse<T>) => T
}

export interface SafeAxiosRequest {
  <T = unknown>(config: AxiosRequestConfig, options?: SafeAxiosOptions<T>): Promise<T>
}

/**
 * - HTTP 에러는 apiClient 인터셉터에서 이미 ApiError로 변환됨
 * - 여기서는 **비즈니스 실패**(success=false 등)와 **payload 추출**만 처리
 */
export const safeAxios: SafeAxiosRequest = async <T = unknown>(
  config: AxiosRequestConfig,
  options?: SafeAxiosOptions<T>,
) => {
  const response = await apiClient.request<ApiResponse<T>>(config)
  const data = response.data ?? {}

  // 1) 비즈니스 로직 실패 감지
  const isSuccess = options?.validateSuccess
    ? options.validateSuccess(data)
    : data.success !== false

  if (!isSuccess) {
    throw new ApiError(data.message || '요청 실패', {
      status: response.status,
      code: data.code,
      cause: data,
    })
  }

  // 2) 커스텀 extract가 있으면 먼저 호출
  if (options?.extractPayload) {
    return options.extractPayload(data)
  }

  // 3) data 필드가 있으면 반환, 없으면 전체 객체 반환
  if (data.data !== undefined) {
    return data.data as T
  }

  return data as T
}
