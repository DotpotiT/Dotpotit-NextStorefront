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
          src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-5.jpg"
          alt="Shoes"
          width={500}
          height={300}
          className=''
        />
      </figure>
      <div className="p-4 ">
        <h3 className="card-title text-sm md:text-md lg:text-lg">
         {name}
          <div className="badge badge-secondary hidden lg:block">NEW</div>
        </h3>
        <p className='text-xs md:text-sm lg:text-lg mb-2 '>$ 234 </p>
        <div className=" flex flex-row justify-between ">
          <div className="badge badge-outline text-xs lg:text-lg">Fashion</div> 
          <div className="badge badge-outline text-xs lg:text-lg">Products</div>
        </div>
      </div>
    </div>
  );
}

export default AllProductCard;
