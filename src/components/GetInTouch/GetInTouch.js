import React from 'react';
import './GetInTouch.css';
import img1 from '../../assets/spine-injuries.svg';
import img2 from '../../assets/wheel-chair.svg';
import img3 from '../../assets/neck-bone.svg';
import img4 from '../../assets/brain-injuries.svg';
import img5 from '../../assets/broken-bone.svg';

const GetInTouch = () => {
    return (
        <div className='getintouch'>
            <h2 className='why'>
                Why Trust Us?
            </h2>
            <div className='injuries'>


                <div class="row row-cols-1 row-cols-md-5 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title">SPINE INJURIES</h6>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title">CATASTROPHIC INJURIES</h6>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title">NECK INJURIES</h6>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title">BRAIN INJURIES</h6>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title">BROKEN BONE INJURIES</h6>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='item-injure'>
                <div className='row row-cols-1 row-cols-md-4'>
                    <div className='col'>
                        <div className='item injure_item'>
                            <strong>
                                <span>$28.0 </span>
                                 Million
                            </strong>
                            <p>Car V. Pedestrian Truck V. Tructor</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='item injure_item'>
                            <strong>
                                <span>$27.5</span>
                                Million
                            </strong>
                            <p>Work Comp Crossover Pedestrian V. Truck</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='item injure_item'>
                            <strong>
                                <span>$15.5</span>
                                Million
                            </strong>
                            <p>Work Comp Crossover Truck V. Tractor</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='item injure_item'>
                            <strong>
                                <span>$11.0 </span>
                                Million
                            </strong>
                            <p>Truck V. Car Cyclist Premises Truck</p>
                        </div>
                    </div>
                    
                </div>
                <div className='row row-cols-1 row-cols-md-4'>
                        <div className='col'>
                            <div className='item injure_item'>
                                <strong>
                                    <span>$12.0</span>
                                    Million
                                </strong>
                                <p>Truck V. Car</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='item injure_item'>
                                <strong>
                                    <span>$10.0</span>
                                    Million
                                </strong>
                                <p>Car V. Car</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='item injure_item'>
                                <strong>
                                    <span>$9.5</span>
                                    Million
                                </strong>
                                <p>Premises Liability</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='item injure_item'>
                                <strong>
                                    <span>$8.0</span>
                                    Million
                                </strong>
                                <p>Premises Liability</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default GetInTouch