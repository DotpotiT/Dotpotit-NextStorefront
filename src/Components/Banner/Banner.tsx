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
    <div className=" font-serif">
      {/* <Slider {...settings}> */}
        {/* {banner.map((slide, index) => ( */}
          {/* <div key={index}> */}
          <section
  className="relative bg-[url(https://images.pexels.com/photos/2861656/pexels-photo-2861656.jpeg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-start  ">
      <h1 className="text-3xl text-gray-300  font-extrabold sm:text-5xl">
        Let us find your

        <strong className="block font-extrabold text-rose-700"> Forever Products. </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
          {/* </div> */}
        {/* ))} */}
      {/* </Slider> */}
    </div>
  );
}

export default Banner;


