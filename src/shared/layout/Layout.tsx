import { Outlet } from 'react-router-dom'
import Header from '@/shared/components/Header'
import Footer from '@/shared/components/Footer'
import NavigationBar from '@/shared/components/NavigationBar'
import FloatingChat from '@/shared/components/FloatingChat'

export default function Layout() {
  return (
    <>
      <Header />
      <NavigationBar />
      <main className="mb-10 flex w-full flex-col items-center self-stretch sm:mb-25 sm:gap-[40px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingChat />
    </>
  )
}
