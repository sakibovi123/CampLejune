import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CallSec from '../subHeader/CallSec';
import './banner.css';
import { useNavigate } from "react-router-dom";


const Banner = () => {
  const navigate = useNavigate()
  let sendDataToLeadProsper = async (e) => {

    e.preventDefault()
    let responseLeadprosper = await fetch("https://api.leadprosper.io/ingest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "lp_campaign_id": "10056",
        "lp_supplier_id": "21039",
        "lp_key": "xzmjar7ns7ppq",
        "first_name": e.target.first_name.value,
        "last_name": e.target.last_name.value,
        "phone": e.target.phone.value,
        "email": e.target.email.value,
        "camp_lj": e.target.camp_lj.value,
        "comment": e.target.comment.value,
        "representation": e.target.representation.value,
        "lp_action": "test"
      })
    }).then(res => console.log(res))

    // const formData = new FormData()
    // formData.append("lp_campaign_id", "10056")
    // formData.append("lp_supplier_id", "21039")
    // formData.append("lp_key", "xzmjar7ns7ppq")
    // formData.append("first_name", e.target.first_name.value)
    // formData.append("last_name", e.target.last_name.value)
    // formData.append("phone", e.target.phone.value)
    // formData.append("email", e.target.email.value)
    // formData.append("camp_lj", e.target.camp_lj.value)
    // formData.append("comment", e.target.comment.value)
    // formData.append("representation", e.target.representation.value)
    // formData.append("lp_action", "test")

    let responseToZapier = await fetch("https://hooks.zapier.com/hooks/catch/13844305/bnoi84k/", {
      method: "POST",
      body: JSON.stringify({
        "lp_campaign_id": "10056",
        "lp_supplier_id": "21039",
        "lp_key": "xzmjar7ns7ppq",
        "first_name": e.target.first_name.value,
        "last_name": e.target.last_name.value,
        "phone": e.target.phone.value,
        "email": e.target.email.value,
        "camp_lj": e.target.camp_lj.value,
        "comment": e.target.comment.value,
        "representation": e.target.representation.value,
        "lp_action": "test"
      })
    }).catch(e => console.log(e))
    let data1 = await responseToZapier.json()
    console.log(responseToZapier)

    navigate("/")

  }

  function pushData() {
    window.dataLayer = window.dataLayer || [];
    var call = document.getElementById("call")

    window.dataLayer.push({
      event: "call_button"
    })
    console.log("clicked")
  }

  function pushReview() {
    window.dataLayer = window.dataLayer || [];
    var call = document.getElementById("call")

    window.dataLayer.push({
      event: "review_clicked"
    })
    console.log("clicked")
  }

  return (

    <div>

      

      <div className='banner banner-text' id='home'>
        <div className='banner-box'>
          <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
              <div className='article'>
                <h1>$7 billion Compensation for Camp Lejeune Toxic Water Victims and their Loved Ones! </h1>
<h2><span className='apply'>Apply Now</span>   & Get Instant Eligibility Check.</h2>
                <h5><i class="fa-regular fa-circle-check"></i>	Get Your <span className='apply'>Medical Bills</span>
                   Paid.
                </h5>
                <h5><i class="fa-sharp fa-solid fa-scroll"></i>	Complete the <span className='apply'>no-cost claim</span>  review form.
                </h5>
                <h5><i class="fa-solid fa-heart-pulse"></i>	Free Enrollment.
                </h5>
                <h4><span className='million'>you could be owed $3 million</span> in compensation.<br /> ACT NOW LIMITED TIME TO FILE!</h4>
                <div className='banner-button'>
                  <a href="tel:+18559390621">
                    <button className='phone-button'><i class="fa-solid fa-phone" /> (855) 939-0621</button>
                  </a>
                  <button className='get-button'>GET MY FREE CLAIM REVIEW</button>
                </div>
              </div>

            </Col>



            <Col xs={12} md={6} xl={5}>
              <div className='banner-form form-group'>
                <form onSubmit={sendDataToLeadProsper}>

                  {/* <label htmlFor="">Did you or a loved one serve, live, or work at Camp Lejeune for at least 30 days between 1953 and 1987?</label><br />
                                    <select name="camp_lj" id="" className="form-control">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select><br /> */}

                  <label>
                    Did you or a loved one serve, live, or work at Camp Lejeune for at least 30 days between 1953 and 1987?
                    <div className='radio'>
                      <input type="radio" value="Yes" name='text' />Yes
                      <input type="radio" value="No" name='text' />No

                    </div>
                  </label>
                  <br />
                  <br />
                  <label htmlFor="first_name">First Name</label><br />
                  <input className="form-control" type="text" name="first_name" placeholder="Enter First Name..." />

                  <label htmlFor="first_name">Last Name</label><br />
                  <input className="form-control" type="text" name="last_name" placeholder="Enter Last Name..." />

                  <label htmlFor="phone">Phone</label><br />
                  <input className="form-control" type="text" name="phone" placeholder="Enter Phone..." />

                  <label htmlFor="email">Email</label><br />
                  <input className="form-control" type="email" name="email" placeholder="Enter Email..." /><br />

                  {/* <label htmlFor="representation">Do you already have an attorney representing you for this claim?</label><br />
                                    <select name="representation" className="form-control">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select><br /> */}

                  <label>
                    Do you already have an attorney representing you for this claim?
                    <div className='radio'>
                      <input type="radio" value="Yes" name='text' />Yes
                      <input type="radio" value="No" name='text' />No

                    </div>
                  </label>
                  <br />
                  <br />
                  <label>
                    What injury were you or your loved one diagnosed with?
                    <select className="form-control" name="country">
                      <option value="us">Aplastic anemia</option>
                      <option value="us">Appendix cancer</option>
                      <option value="us">Amyotrophic lateral</option>
                      <option value="us">sclerosis (ALS)</option>
                      <option value="us">Autoimmune disease</option>
                      <option value="us">Bile duct cancer</option>
                      <option value="us">Birth defects</option>
                      <option value="us">Bladder cancer</option>
                      <option value="us">Brain cancer</option>
                      <option value="us">Breast cancer</option>
                      <option value="us">Cervical cancer</option>
                      <option value="us">Cirrhosis of the liver</option>
                      <option value="us">Conjoined twins</option>
                      <option value="us">Colorectal (colon) cancer</option>
                      <option value="us">Congenital malformation</option>
                      <option value="us">End-stage renal disease</option>
                      <option value="us">Esophageal cancer</option>
                      <option value="us">Female infertility</option>
                      <option value="us">Gallbladder cancer</option>
                      <option value="us">Hepatic steatosis (Fatty liver disease)</option>
                      <option value="us">Hodgkin's disease</option>
                      <option value="us">Intestinal cancer</option>
                      <option value="us">Kidney cancer</option>
                      <option value="us">Leukemia</option>
                      <option value="us">Liver cancer</option>
                      <option value="us">Lung cancer</option>
                      <option value="us">Miscarriage</option>
                      <option value="us">Multiple myeloma</option>
                      <option value="us">Multiple Sclerosis (MS)
                      </option>
                      <option value="us">Multiple myeloma</option>
                      <option value="us">Myelodysplastic </option>
                      <option value="us">syndromes (MDS)</option>
                      <option value="us">Neurobehavioral effects</option>
                      <option value="us">No Injury</option>
                      <option value="us">Non-Hodgkin's lymphoma (NHL)</option>
                      <option value="us">Ovarian cancer</option>
                      <option value="us">Other Inury</option>
                      <option value="us">Pancreatic cancer</option>
                      <option value="us">Parkinson's disease</option>
                      <option value="us">Prostate cancer</option>
                      <option value="us">Renal toxicity</option>
                      <option value="us">Scleroderma</option>
                      <option value="us">Sinus cancer</option>
                      <option value="us">Thyroid cancer</option>
                      <option value="us">No Injury </option>
                      <option value="us">Other Inury</option>
                    </select>
                  </label>

                  <button className="form-submit ">Send Request</button>

                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Banner