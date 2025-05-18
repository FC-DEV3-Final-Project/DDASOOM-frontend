import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}
