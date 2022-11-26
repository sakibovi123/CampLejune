import React from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import './blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <div>
                <h1>3 SIMPLE STEPS TO MAKING A CAMP LEJEUNE CLAIM</h1>
                <div className='container'>
                    <div className='blog-box'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='card-blog'>
                                    <div className='imgbox'>
                                        <img src={img1} alt="" />
                                    </div>

                                    <div className='content'>
                                        <h2>ONLINE ELIGIBILITY CHECK</h2>
                                        <p>The easiest way to find out and start the process is to answer a few simple questions via our online form. We can check today if you are eligble to receive a settlement figure for your suffering.</p>
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
                                        <p>Our attorneys offer a free initial chat to discuss your illmesses and eligibility. They can then assess how much compensation you should be owed, taking into account medical bills etc.</p>
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
                                        <p>We believe everyone that has been affected is due the maximum compensation for their suffering. With all the information and your authority we ensure we get you the maximum settlement you deserve.</p>
                                    </div>
                                </div>
                                </div>
                            
                        </div>
                    </div>
                   
                </div>
                <div className='get-buton'><button>GET FREE QUOTE</button></div>

            </div>
        </div>
    )
}

export default Blog