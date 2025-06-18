import { Outlet } from 'react-router-dom'
import NavigationBar from '@/shared/components/NavigationBar'
import Footer from '@/shared/components/Footer'
import Header from '@/shared/components/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <NavigationBar />

      <main className="mb-10 flex w-full flex-col items-center self-stretch sm:mb-25">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default Layout
