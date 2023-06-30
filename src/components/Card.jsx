import React from 'react'

const Card = ({cimg, cheader, cbody}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure className='h-48'><img src={cimg} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{cheader}</h2>
            <p>{cbody}</p>
            <div className="card-actions justify-center">
            <button className="btn sbtn bg-teal-500">Buy Now</button>
            </div>
        </div>
    </div>
    )
}

export default Card