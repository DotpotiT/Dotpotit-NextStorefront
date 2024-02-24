import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js

function AllProductCard() {
  return (
    <div className="card font-serif bg-base-100 shadow-xl overflow-hidden">
      <figure>
      
        <Image
          src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-5.jpg"
          alt="Shoes"
          width={500}
          height={300}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className='text-sm '>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div> 
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}

export default AllProductCard;
