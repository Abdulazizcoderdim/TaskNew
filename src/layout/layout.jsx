import { Outlet } from 'react-router-dom'
import Navabr from '../components/Navabr'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
      <Navabr />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
