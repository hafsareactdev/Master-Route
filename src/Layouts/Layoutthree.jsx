import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Navbar2 from '../Components/Navbar2/Navbar2'
import Sidenavbar from '../Components/Sidenavbar/Sidenavbar'

const Layoutthree = () => {
  return (
    <>
    <Navbar2/>
    <div className="flex">
    <Sidenavbar/>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}
export default Layoutthree