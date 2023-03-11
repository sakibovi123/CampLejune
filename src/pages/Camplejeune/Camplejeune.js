import React from 'react'
import CampFooter from './CampFooter'
import { BiChevronsDown } from "react-icons/bi";
import './Camplejeune.css';

const Camplejeune = () => {
    return (
        <div>
            <div className='top-header'></div>
            <div className='max-w-[600px] !mx-auto text-center main-body'>
                <div className='flex gap-5 justify-center items-center mt-10 mb-3'>
                    <div className='top-logo' >
                        <img src="https://i.ibb.co/pzYRBLF/clc-logo.png" alt="" className='top-logo' />
                    </div>
                </div>
                <h2 className='text-[#A6192E] lg:text-3xl text-xl font-bold'>Camp Lejeune Water Contamination Lawsuit</h2>
                <img src="https://i.ibb.co/6w6KvK1/camplejeune.png" alt="" className=' pt-2 pb-3 ' />
                <div className="floating-icon ">
                    <a href="#form">
                        <BiChevronsDown color="#00D100" size={55} className="mouse" />
                    </a>
                </div>
                <div className='banner-button'>
                    <a href="https://www.r3hlvtrk.com/3J67C/8BCK8M6/" >
                        <button className='phone-button'>Get Started Now</button>
                    </a>
                </div>
                <h4 className='text-xl font-bold px-3'>If you or your family member, lived or stayed for 30 days for in Camp Lejeune in 1953 to 1987 and suffering a health condition, you can be entitled to the compensation of Million Dollars based on Camp Lejeune Justice ACT 2022!</h4>
                
                {/* <h3 className='text-[#A6192E] font-semibold lg:text-4xl  text-2xl my-3'>Time is limited to file your claim!</h3>
                <h3 className='font-semibold lg:text-4xl text-2xl'>Apply For Compensation:</h3> */}
                {/* <img src="https://i.ibb.co/86DqV2T/hands-gesture-ph-blue.png" alt="" className='mx-auto my-8'/> */}
                {/* multi page start */}


                {/* <p className='text-xl my-4 px-3'> As of August 10th, 2022, the Camp Lejeune Justice Act, which was previously introduced as part of the PACT Act, has been passed by the U.S. Senate.  <span className='font-bold '>0$ No Obligation Expert Consultation - You have to Pay Nothing! We will provide 100% Privacy and Confidentiality about your case!</span></p>
                <h4 className='my-8 font-semibold text-xl px-3'>Get assistance from a Camp Lejeune Expert lawyer who will protect your rights and fight for what you are owed!</h4>
 */}

            </div>
            <CampFooter />
        </div>
    )
}

export default Camplejeune