import React from 'react';
import img1 from '../../assets/img1.jfif';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import './blog.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Blog = () => {
    function pushData() {
        window.dataLayer = window.dataLayer || [];
        var call = document.getElementById("call")

        window.dataLayer.push({
            event: "call_button"
        })
        console.log("clicked")
    }
    return (
        <div className='blog'>
            <div>
                <h1>3 SIMPLE STEPS TO MAKING A CAMP LEJEUNE CLAIM</h1>






<div className='content-blog'>
                    <div className='blog-box'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='card-blog'>
                                    <div className='imgbox'>
                                        <img src={img1} alt="" />
                                    </div>

                                    <div className='content'>
                                        <h2>ONLINE ELIGIBILITY CHECK</h2>
                                        <p>The easiest way to find out and start the process is to answer a few simple questions via our online form. camp lejeune water contamination benefits
                                            are eligble to receive a settlement figure for suffering.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card-blog'>
                                    <div className='imgbox'>
                                        <img src={img2} alt="" />
                                    </div>

                                    <div className='content'>
                                        <h2>FREE EXPERT ADVICE</h2>
                                        <p>Camp.lejeune water contamination attorney offer a free initial chat to discuss your illmesses and eligibility. They can assess how much compensation you should be owed, taking into account medical bills etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card-blog'>
                                    <div className='imgbox'>
                                        <img src={img3} alt="" />
                                    </div>

                                    <div className='content'>
                                        <h2>MAXIMUM COMPENSATION</h2>
                                        <p>We believe that
                                            affected is due the maximum compensation for their suffering.Contaminated water at camp lejeune lawsuit we ensure we get you the maximum settlement you deserve.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

<div className='get-buton'><a href="/#left-form"><button onClick={pushData}>GET FREE QUOTE</button></a></div>

            </div >
        </div >
    );
};

export default Blog;