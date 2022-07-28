import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import "./navbar.css"
// import Logo from "../../assets/logo.png"
import Group18 from "../../assets/Group18.png"
import SelectLang from '../selectLanguage'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
          <img src={Group18} alt="" />
      </div>
      <div className="navigations">
          <ul
        className="menu"
        >
          <li 
        activeclassname="active" 
      >
          <Link to="/">HOME</Link>
        </li>
        <li 
        >
          <Link to="/">COMMUNITY</Link>
        </li>
        <li 
        >
          <Link to="/">CONTACT US</Link>
        </li>
        <li 
        >
          <Link to="/">ABOUT US</Link>
        </li>
        <li 
        >
          <Link to="/Login">LOGIN</Link>
        </li>
        <div className="">
          <SelectLang />
        </div>
          </ul>
    
      </div>
    </div>
  )
}

export default Navbar;
