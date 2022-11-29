import React from 'react';
import './TopFooter.css';
import img1 from '../../assets/american-board-of-trail-advocates.webp';
import img2 from '../../assets/beverlyhill-bar-association.webp';
import img3 from '../../assets/consumer-attorneys-association-of-los-angeles.webp';
import img4 from '../../assets/consumer-attorneys-of-california.webp';
import img5 from '../../assets/los-angeles-county-bar-association.webp';
import img6 from '../../assets/Super-Lawyers.webp'; 

const TopFooter = () => {
  return (
    <div className='topfooter'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
    </div>
  )
}

export default TopFooter