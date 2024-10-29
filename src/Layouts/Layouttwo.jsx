import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Sidenavbar from '../Components/Sidenavbar/Sidenavbar'

const Layouttwo = () => {
  return (
    <>
     <Navbar/>
     <div className="flex">
     <Sidenavbar/>
     <Outlet/>
     </div>
    <Footer/>
    </>
  )
}
export default Layouttwo