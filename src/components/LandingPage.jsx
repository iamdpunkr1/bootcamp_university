import React from 'react'
import hero from '../assets/hero.png'
const LandingPage = () => {
  return (
        <section className="hero min-h-screen bg-base-100 relative">
           
            <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-80 h-80 bg-slate-500 absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
            <div className="w-80 h-80 bg-teal-500 absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
                <img src={hero} className="max-w-lg rounded-full " />
                <div>
                <h1 className="text-5xl font-bold">Fuel Your Career Aspirations</h1>
                <p className="py-6 text-xl">At Bootcamp University, we offer hands-on learning experiences tailored to empower students for professional success. Click here to learn more about how we can help fuel your career aspirations.</p>
                <button className="btn sbtn bg-teal-500 ">Learn more</button>
                </div>
            </div>
        </section>
  )
}

export default LandingPage