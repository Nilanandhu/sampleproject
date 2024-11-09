import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";
import logo from '../../src/assets/Bmw.jpg'
import menu_icon from '../../src/assets/menu-icon.png'

const Navbar = () => {

const [mobileMenu, setMobileMenu]=useState(false);
const toggleMenu = ()=>{
  mobileMenu? setMobileMenu(false): setMobileMenu(true);
}

  return (
    <nav className='container dark-nav' >
      <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><NavLink to='/Home' smooth={true} offset={0} duration={500}>HOME</NavLink></li>
            <li><NavLink to='/About' smooth={true} offset={-150} duration={500}> ABOUT</NavLink></li>
            <li><NavLink to='/Models' smooth={true} offset={-260} duration={500}>MODELS</NavLink></li>
            <li><NavLink to='/Images' smooth={true} offset={-260} duration={500}>IMAGES</NavLink></li>
            <li><NavLink to='/Contact' smooth={true} offset={-150} duration={500}><button className='btn'>CONTACT</button></NavLink></li>

        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar


