import { Link } from 'react-router-dom'
const Sidenavbar = () => {
  return (
    <>
    <nav>
        <div className='w-[400px] h-[700px] bg-[#fffbf0] flex justify-center items-center text-center'> 
                <ul>
                  <li><Link className='font-oldenburg font-bold text-[#a1622e]' to="/layoutthree">Breakfast</Link></li>
                  <li><Link className='font-oldenburg font-bold text-[#a1622e]' to="/layoutthree/lunch">Lunch & Dinner</Link></li>
                  <li><Link className='font-oldenburg font-bold text-[#a1622e]' to="/layoutthree/kids">Kids Menu</Link></li>
                  <li><Link className='font-oldenburg font-bold text-[#a1622e]' to="/layoutthree/beverage">Beverages</Link></li>
                </ul>

        </div>
    </nav>
    </>
  )
}

export default Sidenavbar