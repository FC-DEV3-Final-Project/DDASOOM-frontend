import React from 'react'
import Header from './shared/components/Header'
import NavigationBar from './shared/components/NavigationBar'
import Footer from './shared/components/Footer'

import HomePage from './pages/home/index' // HomePage 컴포넌트 임포트

function App() {
  return (
    <div className="App flex w-full flex-col items-center">
      {/* 모든 페이지에 공통으로 표시될 헤더 */}
      <Header />
      {/* 모든 페이지에 공통으로 표시될 네비게이션 바 */}
      <NavigationBar />

      {/* 페이지 콘텐츠가 로드될 영역 */}
      {/* 현재는 HomePage만 렌더링합니다. 라우팅 설정 시 이 부분을 동적으로 변경 */}
      <div className="flex w-full flex-col items-center">
        <HomePage />
      </div>

      <Footer />
    </div>
  )
}

export default App
