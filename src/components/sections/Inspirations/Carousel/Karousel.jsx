import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import dataImages from '@/assets/data/carousel/carousel-data.js'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Carousel.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Karousel() {
  console.log("dataImages:", dataImages);
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={0} // Явно задаем первый слайд
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        breakpoints={{
          320: { slidesPerView: 1 }, 
          480: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 2.5 }, 
        }}
        className="mySwiper"
      >
        {dataImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`Slide ${idx + 1}`} className="shadow-lg" />
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
}
