import React from 'react'
import bootcamp from '../assets/bootcamp.png'
const About = () => {
  return (
    <section className="hero min-h-screen bg-base-100 relative">
           
        <div className="hero-content flex-col lg:flex-row">
        <div className="w-80 h-80 bg-slate-500 absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
        <div className="w-80 h-80 bg-teal-500 absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
            <img src={bootcamp} className="max-w-md " />
            <div className='ml-5'>
            <h1 className="text-5xl font-bold ">About Us</h1>
            <p className="py-6 text-xl">At Bootcamp University, we believe in the power of transformative education. Our programs are designed to empower students with the skills and knowledge they need to succeed in their careers. Our experienced instructors bring years of industry experience to the classroom, providing students with practical insights and hands-on training. We offer a supportive learning environment that encourages collaboration and growth. Join us and transform your future today.</p>
            {/* <button className="btn sbtn bg-teal-500 ">Learn more</button> */}
            </div>
        </div>
    </section>
  )
}

export default About