import React from 'react';

function FreeShipping(): JSX.Element {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="hero min-h-[55vh]" style={{backgroundImage: 'url(https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706097602/discount_mhbw0g.jpg)'}}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-start text-white ml-[10%] lg:ml-[35%] ">
            <div className="max-w-xl">
              <h2 className='text-2xl lg:text-7xl font-bold text-white mb-2 lg:mb-3'>White t-shirt <span className="">Hot</span></h2>
              <p className='text-neutral-content text-xs lg:text-md'>* Free shipping until 25 Dec 2017</p>
              <div className="offer-product-price ml-2 py-2">
                <h3><span className="regular-price ">৳25.90</span> ৳15.90</h3>
              </div>
              <button className="btn btn-info">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
    </div>
  );
}

export default FreeShipping;
