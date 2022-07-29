import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import "./navbar.css"
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
          <Link className='route' to="/">HOME</Link>
        </li>
        <li 
        >
          <Link className='route' to="/">COMMUNITY</Link>
        </li>
        <li 
        >
          <Link className='route' to="/">CONTACT US</Link>
        </li>
        <li 
        >
          <Link className='route' to="/">ABOUT US</Link>
        </li>
        <li 
        >
          <Link className='route'to="/Login">LOGIN</Link>
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
