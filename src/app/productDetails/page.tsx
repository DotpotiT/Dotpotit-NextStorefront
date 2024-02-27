"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import RelatedProducts from "@/Components/RelatedProducts/RelatedProducts";
const productData = {
  _id: "1",
  name: "Product Name",
  price: 100,
  rating: 4.5,
  images: [
    "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-5.jpg",
    "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-5.jpg",
    "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-5.jpg",
  ],
  stocks: 10,
  size: ["S", "M", "L"],
  description: "Product description goes here.",
};

interface Product {
  _id: string;
  name: string;
  price: number;
  rating: number;
  images: string[];
  stocks: number;
  size?: string[];
  description: string;
}

function ProductDetails() {
  const [product, setProduct] = useState<Product>({
    _id: "",
    name: "",
    price: 0,
    rating: 0,
    images: [],
    stocks: 0,
    description: "",
  });

  useEffect(() => {
    // Set the product data from the imported JSON
    setProduct(productData);
  }, []);

  const renderRatingStars = () => {
    const roundedRating = Math.round(product.rating);
    const stars = [];
    for (let i = 0; i < roundedRating; i++) {
      stars.push(<FaRegStar key={i} className="w-4 h-4 text-yellow-300" />);
    }
    return stars;
  };

  return (
    <div>
      <div className="px-2 lg:px-[320px] font-serif py-6 lg:py-32">
        <section>
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row  justify-between gap-5">
              <div className="w-full lg:w-[55vh] h-auto ">
                <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
                  {product.images &&
                    product.images.map((image, index) => (
                      <div key={index}>
                        <Image
                          src={image}
                          width={500}
                          height={450}
                          alt={`Slide ${index + 1}`}
                        />
                      </div>
                    ))}
                </Carousel>
              </div>

              <div className="single_product_desc w-full">
                <h4 className="title">
                  <a href="#">{product.name}</a>
                </h4>

                <h4 className="price">৳ {product.price}</h4>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {renderRatingStars()}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    {product.rating}
                  </span>
                </div>
                <p className="text-md">
                  Available:
                  {product.stocks > 0 ? (
                    <span className="text-muted">
                      In Stock ({product.stocks})
                    </span>
                  ) : (
                    <span className="text-muted">Stock Out</span>
                  )}
                </p>

                <div className="widget size mb-5 lg:mb-50">
                  <h6 className="widget-title mb-2">Size</h6>
                  <div className="widget-desc ">
                    <ul className="flex">
                      {product.size?.map((s) => (
                        <li key={s} className="mx-1 lg:mx-2">
                          <a href="#">{s}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <form
                  className="cart clearfix mb-5 lg:mb-50 d-flex"
                  method="post"
                >
                  <div className="flex items-center">
                    <button
                      className="bg-btnbg text-white px-4 py-2 mx-1 lg:mx-2 rounded-l"
                      onClick={() => {
                        /* updateQuantity(-1) */
                      }}
                    >
                      <AiOutlineMinus />
                    </button>
                    <input
                      type="number"
                      className="border px-4 py-1 text-center rounded"
                      id="qty"
                      step="1"
                      min="1"
                      max="12"
                      name="quantity"
                      value="1"
                      readOnly
                    />
                    <button
                      className="bg-btnbg text-white px-4 py-2 mx-1 lg:mx-2 rounded-r"
                      onClick={() => {
                        /* updateQuantity(1) */
                      }}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>

                  <button
                    type="submit"
                    name="addtocart"
                    value="5"
                    className="bg-btnbg px-3 py-2 mt-2 rounded-sm text-white ml-9 lg:ml-14"
                  >
                    Add to cart
                  </button>
                </form>

                <div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingTwo">
                      <h6 className="mb-0">
                        <a>Cart Details</a>
                      </h6>
                    </div>
                    <div>
                      <div className="card-body text-justify">
                        <p>{product.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Reviews />*/}

        <RelatedProducts />
      </div>
    </div>
  );
}

export default ProductDetails;
