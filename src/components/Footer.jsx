import React from 'react'
import logo from '../assets/logo.png'
import { BsInstagram } from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
            <footer className="footer items-center p-4 bg-base-300 text-base-content">
            <div className="items-center grid-flow-col">
            <img src={logo} alt="logo" width={50} height={50}/>
                <p>Copyright © 2023 - All right reserved</p>
            </div> 
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <Link to="https://www.linkedin.com/in/bootcamp-university-06392627b/">
                    <FaLinkedinIn size={24} color='black'/>
                </Link> 
                <Link>
                    <BsInstagram size={24} color='black'/>
                </Link>
                <Link>
                     <BiLogoGmail size={24} color='black'/>
                </Link>
            </div>
            </footer>
  )
}

export default Footer