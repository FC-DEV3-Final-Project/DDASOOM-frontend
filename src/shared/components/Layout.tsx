import type { ReactNode } from 'react'
import Header from '@/shared/components/Header'
import NavigationBar from '@/shared/components/NavigationBar'
import Footer from '@/shared/components/Footer'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <NavigationBar />

      <main className="mb-10 flex w-full flex-col items-center self-stretch sm:mb-25">
        {children}
      </main>
      <Footer />
    </>
  )
}
export default Layout
