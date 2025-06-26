import ReactDOM from 'react-dom/client'
import App from '@/App' // App 컴포넌트 내부에서 <HashRouter> 포함됨
import '@/shared/styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
