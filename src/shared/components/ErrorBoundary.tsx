import { ErrorBoundary as ReactErrorBoundary, type FallbackProps } from 'react-error-boundary'
import React from 'react'

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div style={{ padding: 40, textAlign: 'center', color: '#F04E45' }}>
      <h2>문제가 발생했습니다.</h2>
      <pre
        style={{
          color: '#333',
          background: '#f4f4f4',
          padding: 16,
          borderRadius: 8,
          marginTop: 16,
        }}
      >
        {error.message}
      </pre>
      <button
        style={{
          marginTop: 24,
          padding: '8px 24px',
          borderRadius: 8,
          background: '#F04E45',
          color: '#fff',
          border: 'none',
          fontWeight: 600,
          cursor: 'pointer',
        }}
        onClick={resetErrorBoundary}
      >
        새로고침
      </button>
    </div>
  )
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  onReset?: () => void
}

const ErrorBoundary = ({ children, onReset }: ErrorBoundaryProps) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset}>
      {children}
    </ReactErrorBoundary>
  )
}

export default ErrorBoundary
