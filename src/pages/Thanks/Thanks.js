import React from 'react';
import './Thanks.css';
import tick from '../../assets/404-tick.png';

const Thanks = () => {
  return (
    <div className='thanks'>
        {/* <button type='submit' className='btn'>Submit</button> */}
        <div className='popup'>
            <img src={tick} alt="" />
            <h2>Thank You!</h2>
            <p>100% of applicants who called after submitting their application received immediate assistance with their claim. Get in touch now!</p>
            <p className='number'><a href="tel:+18559390621">
                    <i class="fa-solid fa-phone" /> (855) 939-0621
                  </a></p>
            <button onClick="closePopup()" type='button'>Ok</button>
        </div>
    </div>
  )
}

export default Thanks;