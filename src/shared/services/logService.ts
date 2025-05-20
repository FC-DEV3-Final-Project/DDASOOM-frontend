/* 사용할 코드 */
// import { safeAxios } from '@/shared/lib/safeAxios'
// import type { Log } from '@/shared/stores/logStore'

// //sendLogs API 요청 파라미터 타입
// export interface SendLogsParams {
//   logs: Log[]
// }

// //sendLogs API 응답 타입
// export interface SendLogsResponse {
//   success: boolean // 필수
//   code?: number // 선택: 상세 상태 코드
//   message?: string // 선택: 안내 메시지
// }

// //sendLogs 함수 타입
// export type SendLogs = (params: SendLogsParams) => Promise<SendLogsResponse>

// //logService: 로그 전송 전용 서비스
// export const logService: {
//   sendLogs: SendLogs
// } = {
//   sendLogs: async (params) => {
//     return await safeAxios<SendLogsResponse>({
//       url: `/logs`,
//       method: 'POST',
//       data: params,
//     })
//   },
// }

// 테스트 코드
export interface SendLogsParams {
  logs: unknown[]
}

export interface SendLogsResponse {
  success: boolean
  code?: number
  message?: string
}

export type SendLogs = (params: SendLogsParams) => Promise<SendLogsResponse>

export const logService: {
  sendLogs: SendLogs
} = {
  sendLogs: async (params) => {
    console.log('[MOCK] flush triggered! sendLogs called:', params)
    return { success: true, code: 200, message: 'MOCK: 로그 전송 성공' }
  },
}
