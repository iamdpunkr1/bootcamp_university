import React from 'react'
import { TfiMobile, TfiLocationPin } from 'react-icons/tfi'
import { MdMailOutline } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import contactimg from '../assets/contactimg2.png'

const Contact = () => {
  return (
        <section className="hero min-h-screen bg-base-100 relative">
            
            <div className="hero-content flex-col lg:flex-row">
            <div className="w-80 h-80 bg-teal-500 absolute top-30 left-20 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
            <div className="w-80 h-80 bg-slate-500 absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
            
            <img src={contactimg} className="max-w-lg  " />

                <div className="card flex-shrink-0  w-96 shadow-2xl bg-base-100 w-1/2">
                    <div className="card-body ">
                    <form>
                    <h1 className="text-2xl font-bold text-center mb-5">Contact Us</h1>
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-medium text-sm mb-2">
                            Name
                            </label>
                            <input
                            type="text"
                            id="name"
                            className="input input-secondary w-full"
                            placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-medium text-sm mb-2">
                            Email
                            </label>
                            <input
                            type="email"
                            id="email"
                            className="input input-secondary w-full"
                            placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block font-medium text-sm mb-2">
                            Message
                            </label>
                            <textarea
                            id="message"
                            className="textarea textarea-secondary w-full"
                            rows="4"
                            placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn bg-teal-500 sbtn w-full" >
                            Submit
                        </button>
                        </form> 
                </div>
                </div>

            </div>
        </section>
  )
}

export default Contact