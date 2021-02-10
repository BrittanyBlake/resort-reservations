import React, {useState} from 'react'
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

 const Navbar = () => {
     const [open, setOpen] = useState(false)
     const handleToggle = () => {
         setOpen(!open)
     }
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
              <Link to='/'>
                  <img src={logo} alt='beach resort logo'/>
              </Link>
              <button type='button' className='nav-btn' onClick={handleToggle}>
                  <FaAlignRight className='nav-icon'/>
              </button>
          </div>
          <ul className={open ? 'nav-links show-nav': 'nav-links'}>
              <li>
                  <Link to='/'> Home</Link>
              </li>
              <li>
                  <Link to='/rooms'> Rooms</Link>
              </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar