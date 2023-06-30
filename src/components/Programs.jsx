import React from 'react'
import Card from './Card'
import mern from '../assets/mern.jpg'
import ml from '../assets/ml.jpg'
import rprogram from '../assets/rprogram.jpg'
const Programs = () => {
  return (
    <section className="hero min-h-screen bg-base-100 relative">
           
    <div className="hero-content ">
    <div className="w-80 h-80 bg-teal-500 absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
    <div className="w-80 h-80 bg-slate-500 absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
        {/* <img src={hero} className="max-w-lg rounded-full " /> */}
        <div>
        <h1 className="text-5xl font-bold text-center">Our Internship Programs</h1>
        <p className="py-6 text-center text-xl">Take your career to the next level</p>
      
        <div className='flex gap-10'>
            <Card cimg={mern} cheader={"MERN Stack"} cbody={"Our MERN Stack development offers a comprehensive curriculum that covers everything from front-end to back-end development. Gain practical experience by building real-world applications from scratch."}/>
            <Card  cimg={ml} cheader={"Machine Learning"} cbody={"Our Machine Learning Bootcamp equips you with the skills to excel in the field of machine learning. Learn Python, R, and industry-standard tools for data manipulation, model building, and prediction. "}/>
            <Card cimg={rprogram} cheader={"R programming"} cbody={"Our Statistical Analysis with R Bootcamp enhances your expertise in statistical analysis using R. Learn advanced techniques, including data visualization, hypothesis testing, regression analysis, and more. "}/> 
        </div>
        </div>
    </div>
</section>
  )
}

export default Programs