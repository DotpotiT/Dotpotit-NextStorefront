import React from 'react';
import dynamic from 'next/dynamic';
import { SwiperProps } from 'swiper/react';

// Dynamically import Swiper component
// const Swiper = dynamic<SwiperProps>(() => import('swiper/react'), { ssr: false });

function FlashSale() {
//   const swiperOptions = {
//     slidesPerView: 5,
//     spaceBetween: 5,
//     autoplay: { delay: 3000 },
//     breakpoints: {
//       320: { slidesPerView: 2, spaceBetween: 10 },
//       768: { slidesPerView: 2, spaceBetween: 10 },
//       1024: { slidesPerView: 5, spaceBetween: 10 },
//       1928: { slidesPerView: 5, spaceBetween: 10 },
//     },
//     rewind: true,
   
//     className: "mySwiper"
//   };

  return (
    <div className="p-4 w-full lg:max-w-7xl mx-auto py-8 ">
      <div className="flex flex-row justify-between gap-20 mb-4">
        <div className='flex justify-between gap-6 items-center'>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Flash Sale!</h2>
        </div>
      </div>
      {/* <Swiper {...swiperOptions}> */}
        {/* Your Swiper slides */}
      {/* </Swiper> */}
    </div>
  );
}

export default FlashSale;
