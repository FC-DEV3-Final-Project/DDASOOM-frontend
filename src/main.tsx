import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/globals.css'
import App from './App.tsx'
import '@krds-ui/core/dist/style.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
