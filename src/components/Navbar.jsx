import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-2xl">

    <div className="navbar-start">
      <a className="btn btn-ghost normal-case text-xl">
        <img src={logo} alt="logo" width={50} height={50}/>
        Bootcamp University</a>
    </div>




    <div className="navbar-end sm:hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>About us</a></li>
        <li><a>Services</a></li>
        <li><a>Contact us</a></li>
      </ul>

      
    </div>

  </div>
  )
}

export default Navbar