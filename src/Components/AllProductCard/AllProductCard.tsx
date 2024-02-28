import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import { FaHeart } from 'react-icons/fa'; // Import the heart icon

interface AllProductCardProps {
  id: string;
  discount: number;
  price: number;
  name: string;
  image: string;
}

const AllProductCard: React.FC<AllProductCardProps> = ({ id, discount, price, name, image }) => {
  return (
    <div className="card font-serif bg-base-100 shadow-xl overflow-hidden relative">
      <FaHeart className="absolute top-2 right-2 text-red-500" /> {/* Heart icon */}
      <p className="absolute top-2 left-.5 text-white rounded-r-box bg-rose-900 px-2" >10%</p> {/* Heart icon */}
      <figure>
        <Image
            src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-5.jpg"
          alt={name}
          width={500}
          height={100}
          className='h-auto'
        />
      </figure>
      <div className="p-4">
        <h3 className="card-title text-sm md:text-md lg:text-lg">
         {name}
          <div className="badge badge-secondary hidden lg:block">NEW</div>
        </h3>
        <p className='text-xs md:text-sm lg:text-lg mb-2 '>${price} {discount > 0 && <span className="text-red-500">- {discount}%</span>}</p> {/* Display discount if available */}
        <div className=" flex flex-row justify-between ">
          <div className="badge badge-outline text-xs lg:text-lg">Fashion</div> 
          <div className="badge badge-outline text-xs lg:text-lg">Products</div>
        </div>
      </div>
    </div>
  );
}

export default AllProductCard;
