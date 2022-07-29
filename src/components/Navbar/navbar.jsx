import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import "./navbar.css"
import { useTranslation } from 'react-i18next'
// import Logo from "../../assets/logo.png"
import Group18 from "../../assets/Group18.png"
import SelectLang from '../selectLanguage'

function Navbar() {
  const t = useTranslation;
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
          <Link className='route' to="/">{t(navbar.Community)}</Link>
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
