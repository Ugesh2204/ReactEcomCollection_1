import React from 'react'
import Product from './Product'

const Home = () => {
  return (
    <div className='hero'>
        <div className="card text-bg-dark border-0">
            <img src="/assets/bg.jpg" className="card-img" alt="Background" height="600px"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className='container '>
                    <h5 className="card-title display-3 fw-bolder mb-0 text-dark">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2 text-dark">
                        CHECK OUT ALL THE TRENDS
                    </p>
                </div>
            </div>
        </div>
        <Product/>
    </div>
  )
}

export default Home