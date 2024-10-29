import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav>
        <div className="main_menu">
            <div className="container">
                <div className="menu_row">
                    <div className="menu_logo"><img src="images/logo3.png" alt="logo" /></div>
                    <div className='menu'>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/layouttwo">Menu</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/facil">Facilities</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar