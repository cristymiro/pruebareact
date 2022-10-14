import React from 'react'
import './Navbar.css'
import {useRef} from "react"
import {FaBars, FaTimes} from "react-icons/fa";


const Navbar = ({isScrolling}) => {
    const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    }

  return (
      <header className={`${isScrolling > 50 ? "scrolling" : null}`}>
        <h3 className="logo">Logo</h3>
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">About</a>
          <a href="/#">Contacto</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
  )
}

export default Navbar;