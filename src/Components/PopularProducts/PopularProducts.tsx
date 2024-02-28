'use client'
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import AllProductCard from "../AllProductCard/AllProductCard";

const PopularProducts: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      // Simulating API call to fetch products
      const dummyProducts = [
        { id: 1, name: "Product" },
        { id: 2, name: "Product" },
        { id: 3, name: "Product" },
        { id: 4, name: "Product" },
        { id: 5, name: "Product" },
        { id: 6, name: "Product" },
      ];
      setProducts(dummyProducts);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  const toggleShowMore = () => {
    setShowAll(!showAll);
  };

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 5,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="w-full lg:max-w-7xl mx-auto mb-8 px-2">
      <div className="flex flex-row justify-between gap-20 mb-4">
        <h2 className="text-md md:text-xl lg:text-2xl font-bold mb-2">
          Popular Products
        </h2>
        <div>
          {products.length > 3 && (
            <Link href="/flashSalePage">
              <button className="mt-4 bg-[#009DE4] text-white px-2 text-sm lg:text-lg py-1 lg:py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800" onClick={toggleShowMore}>
                {/* {showAll ? <Shop/> : 'See More'} */}
              </button>
            </Link>
          )}
        </div>
      </div>

      <div>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="slick-slide">
              <div  style={{ padding: "0 15px" }}>
              <AllProductCard
  key={product.id}
  id={product.id}
  discount={0} // Placeholder value
  price={0} // Placeholder value
  name={product.name}
  image="" // Placeholder value
/>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};


export default PopularProducts