import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';
// import gpt3Logo from '../../../asset/logo.svg';

const Footer = () => {
    return (
        <div class="footer">
            <div class="container">
            <div><img src={logo} alt="" /></div>
                <div className='footer-text'>
                    <p className=''>While we may provide you preliminary information as to whether you may qualify for compensation, the U.S. District Court: Eastern District of North Carolina ultimately determines who qualifies and what claims are paid. This site is provided for informational purposes only. If you have questions about whether you qualify, please contact an attorney.</p>
                </div>
                <div class="second2">
                    <a href="https://codepen.io/AndreeaBunget" target="_blank"> <i class="fab fa-codepen fa-2x margin"></i></a>
                    <a href="https://github.com/WebDeveloperCodeRep" target="_blank"> <i class="fab fa-github fa-2x margin"></i></a>
                    <a href="https://www.linkedin.com/in/andreea-mihaela-bunget-a4248812b/" target="_blank"> <i class="fab fa-linkedin fa-2x margin"></i></a>
                    <a href="https://www.youtube.com/channel/UCX674BUbomzBCakbb75lhfA?view_as=subscriber" target="_blank"><i class="fab fa-youtube fa-2x margin" ></i></a>
                </div>

            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="line"></div>
                        <div class="second2">
                            Copyright © 2022 Camp Lejeune Us. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;