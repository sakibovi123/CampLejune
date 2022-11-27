import React from 'react';
import './footer.css';
import logo from '../../assets/camp.png';


const Footer = () => {
    function pushData(){
        window.dataLayer = window.dataLayer || [];
        var call = document.getElementById("call")

        window.dataLayer.push({
            event: "footer_menu_clicked"
        })
        console.log("clicked")
    }
    function pushFacebook(){
        window.dataLayer = window.dataLayer || [];
        var call = document.getElementById("call")

        window.dataLayer.push({
            event: "footer_menu_clicked"
        })
        console.log("clicked")
    }
    function pushInsta(){
        window.dataLayer = window.dataLayer || [];
        var call = document.getElementById("call")

        window.dataLayer.push({
            event: "insta_clicked"
        })
        console.log("clicked")
    }
    function pushLinkedIn(){
        window.dataLayer = window.dataLayer || [];
        var call = document.getElementById("call")

        window.dataLayer.push({
            event: "linked_in_clicked"
        })
        console.log("clicked")
    }
    function pushYoutube(){
        window.dataLayer = window.dataLayer || [];
        var call = document.getElementById("call")

        window.dataLayer.push({
            event: "youtbe_clicked"
        })
        console.log("clicked")
    }
    return (
        <div class="footer">
            <div class="container">
            <div><img src={logo} alt="" /></div>
                <div className='footer-text'>
                    <p className=''>While we may provide you preliminary information as to whether you may qualify for compensation, the U.S. District Court: Eastern District of North Carolina ultimately determines who qualifies and what claims are paid. This site is provided for informational purposes only. If you have questions about whether you qualify, please contact an attorney.</p>
                </div>
                <div class="second1">
                <a href="" target="_blank" onClick={pushData}> About Us</a>
                    <a href="" target="_blank" onClick={pushData}> Contact Us</a>
                    <a href="" target="_blank" onClick={pushData}> Privacy Policy</a>
                    <a href="" target="_blank" onClick={pushData}>Terms & Condition</a>
                </div>
                <div class="second2">
                    <a href="" target="_blank" onClick={pushFacebook}> <i class="fab fa-facebook fa-2x margin"></i></a>
                    <a href="" target="_blank" onClick={pushInsta}> <i class="fab instagram fa-2x margin"></i></a>
                    <a href="" target="_blank" onClick={pushLinkedIn}> <i class="fab fa-linkedin fa-2x margin"></i></a>
                    <a href="" target="_blank" onClick={pushYoutube}><i class="fab fa-youtube fa-2x margin" ></i></a>
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