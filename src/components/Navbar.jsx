import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        <img src={logo} alt="logo" width={50} height={50}/>
        Bootcamp University
      </Link>
  </div>
  <div className="navbar-end">
    <ul className="menu menu-horizontal px-1  hidden lg:flex">
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/contactus">Contact us</Link></li>
    </ul>

    <div className="dropdown  dropdown-end">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/contactus">Contact us</Link></li>
      </ul>
    </div>
  </div>

</div>
  )
}

export default Navbar