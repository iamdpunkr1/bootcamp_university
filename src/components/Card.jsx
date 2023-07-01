import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({cimg, cheader, cbody, lnk}) => {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure className='h-48'><img src={cimg} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{cheader}</h2>
            <p>{cbody}</p>
            <div className="card-actions justify-center">
            <Link to={lnk}> <button className="btn sbtn btn-wide bg-teal-500">Book Now</button></Link>
            </div>
        </div>
    </div>
    )
}

export default Card