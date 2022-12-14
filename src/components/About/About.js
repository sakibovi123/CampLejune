import React from 'react';
import './About.css';
import about from '../../assets/about.jfif';

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img width={580} height={500} src={about} alt="" className='about-img' />
                    </div>

                    <div className='col-md-6'>
                        <div class="container">
                            <h2 class="card-title">CAN I CLAIM <br /> COMPENSATION FOR <br /> TOXIC WATER RELATED <br /> ILLNESSES AT CAMP <br /> LEJEUNE?</h2>
                            <p class="card-text">Camp lejeune lawsuit water at the Marine Corps camp in Jacksonville, North Carolina, was found to have been contaminated with benzene, trichloroethylene and perchloroethylene among others between 1953 to 1987. In the time since, residents of the base have experienced severe negative side-effects, like Cancer, Renal Toxicity, Infertitlity, Parkinson’s, Myeloma, so payout for camp lejeune.</p>
                            <div className='card-mute'>
                                <p class="card-text"><small class="text-muted">The U.S. Department of Veteran Affairs (VA) tried to avoid helping US Marines and their families, but a new bipartisan bill allows our heroes to get the help they deserve. Our camp lejeune water lawyers can help you and your family get the maximum compensation you deserve.</small></p>
                            </div>
                            <div className='get-buttn'>
                            <a href="tel:+18559390621">
                                <button><i class="fa-solid fa-phone" /> (855) 939-0621</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;