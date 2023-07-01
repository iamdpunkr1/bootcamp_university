import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 ">

    <div className="navbar-start">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        <img src={logo} alt="logo" width={50} height={50}/>
        Bootcamp University
      </Link>
    </div>




    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/contactus">Contact us</Link></li>
      </ul>

      
    </div>

  </div>
  )
}

export default Navbar