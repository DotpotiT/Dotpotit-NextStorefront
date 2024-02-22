"use client"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

function Banner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetchBanner();
    AOS.init({
      duration: 2000,
    });
  }, []);

  const fetchBanner = async () => {
    // Fetch your banner data here
    const response = await fetch("your_banner_data_endpoint");
    const data = await response.json();
    setBanner(data);
  };

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <FaArrowLeft className="slick-arrow slick-prev" />,
    nextArrow: <FaArrowRight className="slick-arrow slick-next" />,
   appendDots: (dots: JSX.Element[]) => (
    <div className="rounded-full" style={{ borderRadius: "10px", padding: "10px" }}>
      <ul style={{ margin: "0px" }}>{dots}</ul>
    </div>
  ),
    customPaging: () => (
      <div className="text-[10vh] transform -translate-y-24 absolute left-5" style={{ width: "30px", height: "40px", color: "white", position: "absolute", display: "flex", justifyContent: "start", alignItems: "center", zIndex: 10 }}>.</div>
    ),
  };

  return (
    <div className="min-h-[75vh] relative">
      {/* <Slider {...settings}> */}
        {/* {banner.map((slide, index) => ( */}
          {/* <div key={index}> */}
            <div className="text-start  bg-blue-500/60 p-3 lg:p-8 lg:left-48 flex flex-col justify-between gap-2 min-w-[400px] lg:gap-5 absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2" data-aos="fade-right">
              <p className="font-bold text-lg">Only today we offer free shopping</p>
              <button className="btn btn-outline  btn-info w-[40%] lg:w-[50%]">Checkout</button>
            </div>
            <Image src='https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706618313/shopping-discounts-concept-young-stylish-modern-girl-posing-with-credit-card-looking-happy-s_sm8boh.jpg' alt="banner" width={1920} height={1080} layout="responsive" />
          {/* </div> */}
        {/* ))} */}
      {/* </Slider> */}
    </div>
  );
}

export default Banner;
