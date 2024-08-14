import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Header.css"; 
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  return (
    <header className='header'>
      <nav className='navbar'>
        <Link to='/' className='nav-link'>
          Home
        </Link>
        <Link to='/about' className='nav-link'>
          About
        </Link>
        <Link to='/contact' className='nav-link'>
          Contact
        </Link>
      </nav>
      <DarkModeToggle  />
    </header>
  );
}

export default Header;
