import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import AllProductCard from "../AllProductCard/AllProductCard";

interface Product {
  imageSrc: string;
  price: number;  description: string;
}

function RelatedProducts() {
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  const products: Product[] = [
    // Add your product data here
    {
      imageSrc:
        "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg",
      price: 39.90,
      description: "Jeans midi cocktail dress",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-2_im20vg.jpg",
      price: 39.90,
      description: "Jeans midi cocktail dress",
    },
    // Add more products as needed
  ];

  return (
    <div>
      <h1 className="text-center text-2xl py-6">Related Products</h1>
      <Slider {...settings}>
        {products.map((product, index) => (
          <AllProductCard
            key={index}
            id={index.toString()} // Provide a unique ID for each product
            discount={0} // Placeholder value if not available
            price={product.price} // Pass the product price
            name={product.description} // Pass the product description as the name
            image={product.imageSrc} // Pass the product image source
          />
        ))}
      </Slider>
    </div>
  );
}

export default RelatedProducts;

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  arrows: boolean;
}
