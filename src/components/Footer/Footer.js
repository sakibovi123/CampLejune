import React from 'react';
import './footer.css';
import logo from '../../assets/camp.png';


const Footer = () => {
    return (
        <div class="footer">
            <div class="container">
            <div><img src={logo} alt="" /></div>
                <div className='footer-text'>
                    <p className=''>While we may provide you preliminary information as to whether you may qualify for compensation, the U.S. District Court: Eastern District of North Carolina ultimately determines who qualifies and what claims are paid. va compensation for camp lejeune water contamination is provided for informational purposes only. If you have questions about whether you qualify, please contact an attorney.</p>
                </div>
                <div class="second1">
                <a href="/"> About Us</a>
                    <a href="/"> Contact Us</a>
                    <a href="/privacy-policy"> Privacy Policy</a>
                    <a href="/terms-condition">Terms & Condition</a>
                </div>
                <div class="second2">
                    <a href="" target="_blank"> <i class="fab fa-facebook fa-2x margin"></i></a>
                    <a href="" target="_blank"> <i class="fab fa-github fa-2x margin"></i></a>
                    <a href="" target="_blank"> <i class="fab fa-linkedin fa-2x margin"></i></a>
                    <a href="" target="_blank"><i class="fab fa-youtube fa-2x margin" ></i></a>
                </div>

            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="line"></div>
                        <div class="second3">
                        Copyright © 2022 Camp Lejeune Us. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;