import type { ReactNode } from 'react'
import Header from '@/shared/components/Header'
import NavigationBar from '@/shared/components/NavigationBar'
import Footer from '@/shared/components/Footer'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <NavigationBar />

      {children}

      <Footer />
    </>
  )
}
export default Layout
