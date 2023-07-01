import React from 'react'
import Card from './Card'
import mern from '../assets/mern.jpg'
import ml from '../assets/ml.jpg'
import rprogram from '../assets/rprogram.jpg'
import { Link } from 'react-router-dom'
const Programs = () => {
  return (
    <section className="hero min-h-screen bg-base-100 relative">
           
    <div className="hero-content ">
    <div className="w-80 h-80 bg-teal-500 absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
    <div className="w-80 h-80 bg-slate-500 absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
        {/* <img src={hero} className="max-w-lg rounded-full " /> */}
        <div>
        <h1 className=" text-5xl   font-bold text-center">Our Internship Programs</h1>
        <p className="py-6 text-center md:text-xl  sm:text-sm">Take your career to the next level</p>
      
        <div className='flex flex-wrap gap-10 justify-center'>
            <Card cimg={mern} lnk="https://docs.google.com/forms/d/e/1FAIpQLScG8fP5jjhZH_tnR_CrF9sH7n2qsFtO7b0pN7jN-Hyb7wReoQ/viewform" cheader={"MERN Stack"} cbody={"Our MERN Stack development offers a comprehensive curriculum that covers everything from front-end to back-end development. Gain practical experience by building real-world applications from scratch."}/>
            <Card  cimg={ml} lnk="https://docs.google.com/forms/d/e/1FAIpQLScWC7BrUmlEQ6kLZGO9jOrDHUbA6yM92MjNUh7xMSLmYjeeWg/viewform" cheader={"Machine Learning"} cbody={"Our Machine Learning Bootcamp equips you with the skills to excel in the field of machine learning. Learn Python, R, and industry-standard tools for data manipulation, model building, and prediction. "}/>
            <Card cimg={rprogram} lnk="https://docs.google.com/forms/d/e/1FAIpQLSe_1PwDjE0nIwu5s-CgoV9vaGaVtxbEW8-CYDwz7CaTP3JwXw/viewform" cheader={"R programming"} cbody={"Our Statistical Analysis with R Bootcamp enhances your expertise in statistical analysis using R. Learn advanced techniques, including data visualization, hypothesis testing, regression analysis, and more. "}/> 
            
        </div>
        
        <Link to="internships" className='flex justify-center'><button className="hover:underline  mt-5 font-bold">View All</button></Link>
        </div>
    </div>
</section>
  )
}

export default Programs