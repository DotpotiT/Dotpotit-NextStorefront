import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

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


  return (
    <div className="w-36 md:w-56 lg:w-72 overflow-hidden font-serif bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <Image
        src={image}
        alt={name}
        width={500}
        height={400}
      
        className="w-36 h-44 md:w-56 md:h-60 lg:h-80 lg:w-72 object-cover rounded-t-xl"
      />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-md lg:text-lg font-bold text-black truncate block capitalize">
          {name}
        </p>
        <div className="flex items-center">
          <p className="text-md font-semibold text-black cursor-auto my-3">
            ${price}
          </p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-2 md:ml-16 lg:ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-bag-plus"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
              />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  </div>
  )
};

export default NewArrivalsCard;

