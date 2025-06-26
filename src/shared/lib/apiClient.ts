import axios from 'axios'
import { ApiError } from '@/shared/lib/apiError'

export const apiClient = axios.create({
  baseURL: '',
  timeout: 50000,
})

// response 인터셉터로 에러 일원화
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // axios 네트워크/HTTP 에러를 ApiError로 변환
    const status = error.response?.status
    const data = error.response?.data ?? {}
    const message = data?.message || error.message || '서버 오류 발생'

    throw new ApiError(message, {
      status,
      code: data?.code,
      cause: data,
    })
  },
)
