import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
interface AllProductCardProps {
    name: string; // Assuming name is a string
  }
  
  function AllProductCard({ name }: AllProductCardProps) {
  return (
    <div className="card  font-serif bg-base-100 shadow-xl overflow-hidden">
      <figure>
      
        <Image
          src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-5.jpg"
          alt="Shoes"
          width={500}
          height={300}
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-sm md:text-md lg:text-lg">
         {name}
          <div className="badge badge-secondary hidden lg:block">NEW</div>
        </h3>
        <p className='text-xs md:text-sm lg:text-lg '>$ 234 </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline text-md">Fashion</div> 
          <div className="badge badge-outline text-md">Products</div>
        </div>
      </div>
    </div>
  );
}

export default AllProductCard;
