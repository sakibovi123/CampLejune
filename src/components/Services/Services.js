import React from 'react';
import './services.css';
import service1 from '../../assets/image 12.png';
import service2 from '../../assets/image 13.png';
import service3 from '../../assets/image 14.png';

const Services = () => {
    return (
        <div className='container'>
            <div class="card-group">
                <div class="card">
                    <img src={service1} class="rounded mx-auto d-block" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">FREE INITIAL ASSESSMENT</h5>
                        <p class="card-text">We will provide you the best advice and action to get the most compensation.</p>
                        
                    </div>
                </div>
                <div class="card">
                    <img src={service2} class="rounded mx-auto d-block" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">SPECIALIST ATTORNEYS</h5>
                        <p class="card-text">Experienced and successful attorneys to assist you with your compensation</p>
                        
                    </div>
                </div>
                <div class="card">
                    <img src={service3} class="rounded mx-auto d-block" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">MAXIMUM SETTLEMENT</h5>
                        <p class="card-text">We aim to make sure you are compensated for the most money your are eligible for.</p>
                        
                    </div>
                </div>
                <div class="card">
                    <img src={service2} class="rounded mx-auto d-block" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">JUSTICE SERVED</h5>
                        <p class="card-text">Negotiating on your behalf to make sure you’re properly compensated, we do the hard work to make it a success.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services