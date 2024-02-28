import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
interface AllProductCardProps {
  id: string;
  discount: number;
  price: number;
  name: string;
  image: string;
}

  
const AllProductCard: React.FC<AllProductCardProps> = ({ id, discount, price, name, image }) => {
  return (
    <div className="card font-serif bg-base-100 shadow-xl overflow-hidden">
      <figure>
      
        <Image
          src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg"
          alt="Shoes"
          width={500}
          height={300}
          className=''
        />
      </figure>
      <div className="p-2 ">
        <h3 className="card-title text-sm md:text-md lg:text-lg">
         {name}
          <div className="badge badge-secondary hidden lg:block">NEW</div>
        </h3>
        <p className='text-xs md:text-sm lg:text-lg mb-2 '>$ 234 </p>
        <div className=" flex flex-row justify-between">
          <div className="badge badge-outline text-xs lg:text-md">Fashion</div> 
          <div className="badge badge-outline text-xs lg:text-md">Products</div>
        </div>
      </div>
    </div>
  );
}

export default AllProductCard;
