import React from 'react'

const Members = ({cimg, cheader, cbody}) => {
  return (
    <div className="card  w-80 glass shadow-xl">
        <figure className='h-60 '><img src={cimg} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{cheader}</h2>
            <p>{cbody}</p>
            <div className="card-actions justify-center">
            {/* <Link to={lnk}> <button className="btn sbtn btn-wide bg-teal-500">Book Now</button></Link> */}
            </div>
        </div>
    </div>
  )
}

export default Members