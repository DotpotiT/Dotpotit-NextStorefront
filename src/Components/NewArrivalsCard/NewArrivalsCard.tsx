import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
}

interface NewArrivalsCardProps {
  product: Product;
}

const NewArrivalsCard: React.FC<NewArrivalsCardProps> = ({ product }) => {
  const { id, image, name, price } = product;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mb-2 sm:mb-0 relative overflow-hidden">
      <div
        className="shadow-xl transition-transform duration-500 transform hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className={`w-full h-[350px] ${isHovered ? 'scale-110' : 'scale-100'}`}
          src={image}
          alt={name}
          width={500}
          height={400}
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link href={`/productDetails/${id}`} passHref>
  <button className="flex justify-center items-center">
    <AiOutlinePlus />
  </button>
</Link>

        </div>
      </div>
      <div className="product-description p-2 mt-4">
        <p className="">{price}</p>
        <p className="font-bold ">{name}</p>
        <a href="#" className="text-btnbg py-2 rounded-full inline-block mt-3">
          ADD TO CART
        </a>
      </div>
    </div>
  );
};

export default NewArrivalsCard;
