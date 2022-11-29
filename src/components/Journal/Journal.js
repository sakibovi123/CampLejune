import React from 'react';
import './Journal.css';
import img1 from '../../assets/american-board-of-trail-advocates.webp';
import img2 from '../../assets/beverlyhill-bar-association.webp';
import img3 from '../../assets/consumer-attorneys-association-of-los-angeles.webp';
import img4 from '../../assets/consumer-attorneys-of-california.webp';
import img5 from '../../assets/los-angeles-county-bar-association.webp';
import img6 from '../../assets/Super-Lawyers.webp'; 
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Journal = () => {
  return (
    <div className='journal'>
      {/* <img src={img1} alt="journal" />
      <img src={img2} alt="journal1" />
      <img src={img3} alt="journal2" />
      <img src={img4} alt="journal3" /> */}

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}


        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><div className='journal'>
        <img src={img1} alt="journal" />
        <img src={img2} alt="journal1" />
        <img src={img3} alt="journal2" />
        <img src={img4} alt="journal3" />
        <img src={img5} alt="journal3" />
        <img src={img6} alt="journal3" />

    </div></SwiperSlide>
        <SwiperSlide><div className='journal'>
        <img src={img1} alt="journal" />
        <img src={img2} alt="journal1" />
        <img src={img3} alt="journal2" />
        <img src={img4} alt="journal3" />
        <img src={img5} alt="journal3" />
        <img src={img6} alt="journal3" />
    </div></SwiperSlide>
        <SwiperSlide><div className='journal'>
        <img src={img1} alt="journal" />
        <img src={img2} alt="journal1" />
        <img src={img3} alt="journal2" />
        <img src={img4} alt="journal3" />
        <img src={img5} alt="journal3" />
        <img src={img6} alt="journal3" />
    </div></SwiperSlide>

      </Swiper>

    </div>
   
  )
}

export default Journal