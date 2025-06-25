import { Outlet } from 'react-router-dom'
import Header from '@/shared/components/Header'
import Footer from '@/shared/components/Footer'
import NavigationBar from '@/shared/components/NavigationBar'
import FloatingChat from '@/shared/components/FloatingChat'

export default function Layout() {
  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <Header />
        <NavigationBar />
      </div>
      <main className="mt-10 mb-10 flex w-full flex-col items-center self-stretch sm:mt-34 sm:mb-25">
        <Outlet />
      </main>
      <Footer />
      <FloatingChat />
    </>
  )
}
