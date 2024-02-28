'use client'
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import RelatedProducts from "@/Components/RelatedProducts/RelatedProducts";

interface ProductData {
  _id: string;
  name: string;
  price: number;
  rating: number;
  images: {
    black: string;
    red: string;
    blue: string;
    yellow: string;
  };
  stocks: number;
  size: string[];
  description: string;
}

const productData: ProductData = {
  _id: "1",
  name: "Product Name",
  price: 100,
  rating: 4.5,
  images: {
    black: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-5.jpg",
    red: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-1.jpg",
    blue: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-2.jpg",
    yellow: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-3.jpg",
  },
  stocks: 10,
  size: ["S", "M", "L"],
  description: "Product description goes here.",
};

function ProductDetails() {
  const [currentColor, setCurrentColor] = useState("black");

  const handleColorClick = (index: string) => {
    setCurrentColor(index);
  };
  
  return (
    <div>
      <div className="px-2 lg:px-[265px]  pt-20  font-serif py-6 lg:py-32">
        <section>
          <div className=" dark:bg-gray-800 py-8">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="h-[460px] rounded-lg bg-gray-300  mb-4">
                  <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
  {Object.values(productData.images).map((imageUrl, index) => (
    <div key={index}>
      <Image
        src={imageUrl}
        width={500}
        height={450}
        alt={`Slide ${index + 1}`}
      />
    </div>
  ))}
</Carousel>

                  </div>
                  <div className="flex -mx-2 mb-4">
                    {Object.keys(productData.images).map((color, index) => (
                      <div key={index} className="w-1/2 px-2">
                        <button
                          className={`w-full h-20 rounded mb-2 ${currentColor === color ? 'border border-blue-500' : ''}`}
                          style={{ backgroundColor: color }}
                          onClick={() => handleColorClick(color)}
                        ></button>
                      </div>
                    ))}
                  </div>
                  <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                      <button className="w-full bg-cyan-400 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                    </div>
                    <div className="w-1/2 px-2">
                      <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.
                  </p>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                      <span className="text-gray-600 dark:text-gray-300">$29.99</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                      <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                    <div className="flex items-center mt-2">
                      <button className="w-6 h-6 rounded-full bg-black mr-2" onClick={() => handleColorClick("black")}></button>
                      <button className="w-6 h-6 rounded-full bg-red-500 mr-2" onClick={() => handleColorClick("red")}></button>
                      <button className="w-6 h-6 rounded-full bg-blue-500 mr-2" onClick={() => handleColorClick("blue")}></button>
                      <button className="w-6 h-6 rounded-full bg-yellow-500 mr-2" onClick={() => handleColorClick("yellow")}></button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                    <div className="flex items-center mt-2">
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <RelatedProducts />
      </div>
    </div>
  );
}

export default ProductDetails;
