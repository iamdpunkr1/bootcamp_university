import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Members from '../components/Members'
import anurag from '../assets/anurag.jpg'
import souvik from '../assets/souvik.jpeg'
import bhaskar from '../assets/bhaskar.jpg'
import shahid from '../assets/shahid.jpeg'
import dip from '../assets/dip.jpeg'

const About = () => {
  return (
    <>

        <Navbar/>
        <section className="hero min-h-screen bg-base-100 relative">
           
           <div className="hero-content ">
           <div className="w-80 h-80 bg-teal-500 absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
           <div className="w-80 h-80 bg-slate-500 absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
               {/* <img src={hero} className="max-w-lg rounded-full " /> */}
               <div>
               <h1 className="text-5xl font-bold text-center">Our Stellar team of Experts</h1>
               <p className="py-6 text-center text-xl">
               At Bootcamp University, our team is a dynamic group of passionate professionals dedicated to delivering exceptional results. With diverse expertise and a shared commitment to excellence, we collaborate seamlessly to bring innovative solutions to our clients. Trust us to exceed your expectations and achieve your goals together.
               </p>
             
               <div className='flex flex-wrap gap-10 justify-center'>
                 <Members  cimg={souvik}  cheader={"CEO | CMO"} cbody="Hi! My name is Souvik Das
                 and I am the Chief Executive Officer as well as Chief Marketing Officer of the Bootcamp University"/> 
                 <Members  cimg={shahid}  cheader={"CPM"} cbody="Hi there! My name is Shahid Afridi Saikia
                 and I am the Chief Product Manager of the Bootcamp University"/> 
                 <Members  cimg={bhaskar}  cheader={"CMO"} cbody="Hi there! My name is Bhaskar Baishya
                 and I am the Chief Marketing Officer of the Bootcamp University"/>  
                 <Members  cimg={dip}  cheader={"CTO"} cbody="Hi there! My name is Dipankar Prasad
                 and I am the Chief Technical Officer of the Bootcamp University"/>    
               </div>
               </div>
           </div>
       </section>
        <Footer/>
    </>
  )
}

export default About