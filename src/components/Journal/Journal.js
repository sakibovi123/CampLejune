import React from 'react';
import './Journal.css';
import img1 from '../../assets/As-Seen-On.png';
import img2 from '../../assets/wsj1.png';
import img3 from '../../assets/wgs2.png';
import img4 from '../../assets/wgs3.png';
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Journal = () => {
  return (
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
    </div></SwiperSlide>
        <SwiperSlide><div className='journal'>
        <img src={img1} alt="journal" />
        <img src={img2} alt="journal1" />
        <img src={img3} alt="journal2" />
        <img src={img4} alt="journal3" />
    </div></SwiperSlide>
        <SwiperSlide><div className='journal'>
        <img src={img1} alt="journal" />
        <img src={img2} alt="journal1" />
        <img src={img3} alt="journal2" />
        <img src={img4} alt="journal3" />
    </div></SwiperSlide>
        {/* <SwiperSlide><div className='journal'>
        <img src={img1} alt="journal" />
        <img src={img2} alt="journal1" />
        <img src={img3} alt="journal2" />
        <img src={img4} alt="journal3" />
    </div></SwiperSlide>
        <SwiperSlide><div className='journal'>
        <img src={img1} alt="journal" />
        <img src={img2} alt="journal1" />
        <img src={img3} alt="journal2" />
        <img src={img4} alt="journal3" />
    </div></SwiperSlide>
        <SwiperSlide><div className='journal'>
        <img src={img1} alt="journal" />
        <img src={img2} alt="journal1" />
        <img src={img3} alt="journal2" />
        <img src={img4} alt="journal3" />
    </div></SwiperSlide>
        <SwiperSlide><div className='journal'>
        <img src={img1} alt="journal" />
        <img src={img2} alt="journal1" />
        <img src={img3} alt="journal2" />
        <img src={img4} alt="journal3" />
    </div></SwiperSlide>
        <SwiperSlide><div className='journal'>
        <img src={img1} alt="journal" />
        <img src={img2} alt="journal1" />
        <img src={img3} alt="journal2" />
        <img src={img4} alt="journal3" />
    </div></SwiperSlide>
        <SwiperSlide><div className='journal'>
        <img src={img1} alt="journal" />
        <img src={img2} alt="journal1" />
        <img src={img3} alt="journal2" />
        <img src={img4} alt="journal3" />
    </div></SwiperSlide> */}
      </Swiper>
    
  )
}

export default Journal