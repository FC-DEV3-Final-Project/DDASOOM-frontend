import { Outlet } from 'react-router-dom'
import { ActionLogProvider } from '../context/ActionLogProvider'

export default function Layout() {
  return (
    <ActionLogProvider>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </ActionLogProvider>
  )
}
