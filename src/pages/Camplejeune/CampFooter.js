import React from 'react'

const CampFooter = () => {
  return (
    <div class="footer">
    <div class="container">
    {/* <div><img src={logo} alt="" /></div> */}
        <div className='footer-text'>
            {/* <p className='mb-5'>LEGAL DISCLAIMER: 
THIS IS A PAID ATTORNEY / ADVOCATE ADVERTISEMENT. This website is a group advertisement and a fee is paid for by participating attorneys and advocates. The site is not an attorney referral service or prepaid legal services plan. This website does not make any representation of the qualifications, expertise, or credentials of participating attorneys/advocates and does not represent that quality is better than services performed by other attorneys/advocates. Any information you submit to this website may not be protected by the attorney-client privilege. An automated matching system will match each request with a member attorney/advocate representing the specific geography.</p> */}
            <p className='mb-5'>While we may provide you preliminary information as to whether you may qualify for compensation, the U.S. District Court: Eastern District of North Carolina ultimately determines who qualifies and what claims are paid. va compensation for camp lejeune water contamination is provided for informational purposes only. If you have questions about whether you qualify, please contact an attorney.</p>
        </div>
        
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="line"></div>
                <div class="second3">
                Copyright © 2023 Camp Lejeune US. All rights reserved.
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default CampFooter