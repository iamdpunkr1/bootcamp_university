import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Members from '../components/Members'
import anurag from '../assets/anurag.jpg'
import souvik from '../assets/souvik.jpg'
import bhaskar from '../assets/bhaskar.jpg'
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
               <h1 className="text-5xl font-bold text-center">Our Lovely Team</h1>
               <p className="py-6 text-center text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel corporis saepe sequi. Odit commodi veniam non voluptatibus deleniti eum eos saepe ducimus. Tempora impedit recusandae doloremque unde, fugiat odit?
               </p>
             
               <div className='flex flex-wrap gap-10 justify-center'>
                <Members  cimg={anurag}  cheader={"CEO"} cbody="Hi there! My name is Anurag Phukan
                 and I am the CEO of the Bootcamp University"/> 
                 <Members  cimg={souvik}  cheader={"CEO"} cbody="Hi there! My name is Souvik Das
                 and I am the CEO of the Bootcamp University"/> 
                 <Members  cimg={anurag}  cheader={"CEO"} cbody="Hi there! My name is Anurag Phukan
                 and I am the CEO of the Bootcamp University"/> 
                 <Members  cimg={bhaskar}  cheader={"CTO"} cbody="Hi there! My name is Bhaskar Baishya
                 and I am the CTO of the Bootcamp University"/>     
               </div>
               </div>
           </div>
       </section>
        <Footer/>
    </>
  )
}

export default About