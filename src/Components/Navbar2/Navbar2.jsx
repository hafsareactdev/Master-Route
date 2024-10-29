import { Link } from 'react-router-dom'
const Navbar2 = () => {
  return (
    <>
    <nav>
        <div className="py-10 bg-[#fffbf0]">
            <div className="container">
              <div>
                  <ul className=' flex justify-around'>
                      <li><Link className='font-oldenburg font-thin text-[#a1622e] text-lg hover:text-black transition-all' to="/">Home</Link></li>
                      <li><Link className='font-oldenburg font-thin text-[#a1622e] text-lg hover:text-black transition-all' to="/layouttwo">Menu</Link></li>
                      <li><Link className='font-oldenburg font-thin text-[#a1622e] text-lg hover:text-black transition-all' to="/about">About Us</Link></li>
                      <li><Link className='font-oldenburg font-thin text-[#a1622e] text-lg hover:text-black transition-all' to="/facil">Facilities</Link></li>
                  </ul>
              </div>
            </div>
        </div>
    </nav>
    </>
  )
}
export default Navbar2