import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Programs from './components/Programs'
import Footer from './components/Footer'
import About from './components/About'
function App() {

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

export default App
