import React from 'react';
import './Tbanner.css';

const Tbanner = () => {
    function pushData() {
        window.dataLayer = window.dataLayer || [];
        let call = document.getElementById("call")

        window.dataLayer.push({
            event: "call_button"
        })
        console.log("clicked")
    }
    return (
        <div className='tbanner'>
            <div className='artcle'>
                <h1>Thank you</h1>
                <div class="checkmark-circle">
                    <div class="background"></div>
                    <div class="checkmark draw"></div>
                </div>
                {/* <i class="fa-regular fa-circle-check"></i>  */}
                <h2> <span className='application'>100% of</span>  applicants who Called after submitting their application received immediate assistance with their claim.</h2>
                
                <h4> Get in touch now <span className='excla'>!</span> </h4>
                
               
                
                <div className='banner-button'>

                    <a href="tel:+18559390621" onClick={pushData}>
                        <button className='phone-buton'><i class="fa-solid fa-phone" /> (855) 939-0621</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Tbanner