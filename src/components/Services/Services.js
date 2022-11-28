import React from 'react';
import './services.css';
import service1 from '../../assets/box-1.png';
import service2 from '../../assets/box-2.png';
import service3 from '../../assets/box-3.png';
import service4 from '../../assets/box-4.png';

const Services = () => {
    return (
        <div className='container'>
            <div class="card-group">
                <div class="card">
                    <img src={service1} class="rounded mx-auto d-block" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">FREE INITIAL ASSESSMENT</h5>
                        <p class="card-text">Justice ACT 2022  provide you the best advice and action to get the most compensation.</p>
                        
                    </div>
                </div>
                <div class="card">
                    <img src={service2} class="rounded mx-auto d-block" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">SPECIALIST ATTORNEYS</h5>
                        <p class="card-text">Our law firm utlizes high grade security and technology to ensure all client personally identifiable information is kept private.</p>
                        
                    </div>
                </div>
                <div class="card">
                    <img src={service3} class="rounded mx-auto d-block" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">UPTO 3 MILLION SETTLEMENT</h5>
                        <p class="card-text">Camp lejeune attorneys make sure you are compensated for the most money your are eligible for.</p>
                        
                    </div>
                </div>
                <div class="card">
                    <img src={service4} class="rounded mx-auto d-block" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Fast 2-Minute Form</h5>
                        <p class="card-text">Find out if you qualify in under 120 seconds. If you do qualify, then the rest of the forms will only take 2 more minutes to fill out.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services