import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import Programs from '../components/Programs'
import Footer from '../components/Footer'
import About from '../components/About'


const Home = () => {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <Programs/>
    <About/>
    <Footer/>
    </>
  )
}

export default Home