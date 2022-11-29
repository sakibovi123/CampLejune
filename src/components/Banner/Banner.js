import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './banner.css';
import { useNavigate } from "react-router-dom";


const Banner = () => {
  const navigate = useNavigate()
  const [error, setError] = useState({
    phone: ''
  });

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
        "phone": 1 + e.target.phone.value,
        "email": e.target.email.value,
        "camp_lj": e.target.camp_lj.value,
        "representation": e.target.representation.value,
        "injury_type_list": e.target.injury_type_list.value,
        "lp_action": "test",
        "comment": e.target.comment.value,


      })
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))

    let responseToZapier = await fetch("https://hooks.zapier.com/hooks/catch/13844305/bnoi84k/", {
      method: "POST",
      body: JSON.stringify({
        "lp_campaign_id": "10056",
        "lp_supplier_id": "21039",
        "lp_key": "xzmjar7ns7ppq",
        "first_name": e.target.first_name.value,
        "last_name": e.target.last_name.value,
        "phone": 1 + e.target.phone.value,
        "email": e.target.email.value,
        "camp_lj": e.target.camp_lj.value,
        "representation": e.target.representation.value,
        "injury_type_list": e.target.injury_type_list.value,
        "lp_action": "test",
        "comment": e.target.comment.value,
      })
    }).then(response2 => response2.json())
      .then(data2 => console.log(data2))
      .catch(error2 => console.log(error2))
    // console.log()
    navigate("/thanks")

  }

  function pushData() {
    window.dataLayer = window.dataLayer || [];
    let call = document.getElementById("call")

    window.dataLayer.push({
      event: "call_button"
    })
    console.log("clicked")
  }

  function pushReview() {
    window.dataLayer = window.dataLayer || [];
    let call = document.getElementById("call")

    window.dataLayer.push({
      event: "review_clicked"
    })
    console.log("clicked")
  }

  return (

    <div >


      <div className='banner banner-text' id='home'>
        <div className='d-flex justify-content-center'>
          <div className='article'>
            <h1>$7 billion Compensation for Camp Lejeune Toxic Water Victims and their Loved Ones! </h1>
            <h2><a href="/#left-form" className='apply'>Apply Now</a>   & Get Instant Eligibility Check.</h2>
            <h5><i class="fa-regular fa-circle-check"></i> <span>Get Your Medical Bills
              Paid.</span>
            </h5>
            <h5><i class="fa-sharp fa-solid fa-scroll"></i> <span>Complete the<span className='cost'> no-cost</span>  claim review form.</span>
            </h5>
            <h5><i class="fa-solid fa-heart-pulse"></i> <span>Free Enrollment.</span>
            </h5>
            <h4>you could be owed <span className='million'> $3 million</span> in compensation.<br /> ACT NOW LIMITED TIME TO FILE!</h4>
            <div className='banner-button'>
              <a href="tel:+18559390621" onClick={pushData}>
                <button className='phone-button'><i class="fa-solid fa-phone" /> (855) 939-0621</button>
              </a>
              <a href="/#left-form">
                <button className='get-button' onClick={pushData}>GET FREE CLAIM REVIEW</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div>

            <div className='d-flex justify-content-center'>
              <div className='banner-form form-group'>
              <h4>Request a Free Legal Consultation</h4>
                <form id='left-form' onSubmit={sendDataToLeadProsper}>
                  <label>
                    Did you or a loved one serve, live, or work at Camp Lejeune for at least 30 days between 1953 and 1987?

                    <select name="camp_lj" id="" className="form-control">
                      <option value="" selected className="form-control">Please Select...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>


                  </label>
                  <br />

                  <label htmlFor="first_name">First Name</label><br />
                  <input className="form-control" type="text" name="first_name" required />

                  <label htmlFor="first_name">Last Name</label><br />
                  <input className="form-control" type="text" name="last_name" required />

                  <label htmlFor="phone">Phone</label><br />
                  <input className="form-control" type="number" name="phone" required />

                  <label htmlFor="email">Email</label><br />
                  <input className="form-control" type="email" name="email" required /><br />



                  <label>
                    Do you already have an attorney representing you for this claim?
                    <div className='radio'>
                      <select name="representation" id="" className="form-control" required>
                        <option value="" selected>Please select...</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>

                    </div>
                  </label>
                  <br />
                  <br />
                  <label>
                    What injury were you or your loved one diagnosed with?
                    <select className="form-control" name="injury_type_list" required>
                      <option value="Aplastic anemia">Aplastic anemia</option>
                      <option value="Appendix cancer">Appendix cancer</option>
                      <option value="Amyotrophic lateral">Amyotrophic lateral</option>
                      <option value="sclerosis (ALS)">sclerosis (ALS)</option>
                      <option value="Autoimmune disease">Autoimmune disease</option>
                      <option value="Bile duct cancer">Bile duct cancer</option>
                      <option value="Birth defects">Birth defects</option>
                      <option value="Bladder cancer">Bladder cancer</option>
                      <option value="Brain cancer">Brain cancer</option>
                      <option value="Breast cancer">Breast cancer</option>
                      <option value="Cervical cancer">Cervical cancer</option>
                      <option value="Cirrhosis of the liver">Cirrhosis of the liver</option>
                      <option value="Conjoined twins">Conjoined twins</option>
                      <option value="Colorectal (colon) cancer">Colorectal (colon) cancer</option>
                      <option value="Congenital malformation">Congenital malformation</option>
                      <option value="End-stage renal disease">End-stage renal disease</option>
                      <option value="Esophageal cancer">Esophageal cancer</option>
                      <option value="Female infertility">Female infertility</option>
                      <option value="Gallbladder cancer">Gallbladder cancer</option>
                      <option value="Hepatic steatosis (Fatty liver disease)">Hepatic steatosis (Fatty liver disease)</option>
                      <option value="Hodgkin's disease">Hodgkin's disease</option>
                      <option value="Intestinal cancer">Intestinal cancer</option>
                      <option value="Kidney cancer">Kidney cancer</option>
                      <option value="Leukemia">Leukemia</option>
                      <option value="Liver cancer">Liver cancer</option>
                      <option value="Lung cancer">Lung cancer</option>
                      <option value="Miscarriage">Miscarriage</option>
                      <option value="Multiple myeloma">Multiple myeloma</option>
                      <option value="Multiple Sclerosis (MS)">Multiple Sclerosis (MS)</option>
                      <option value="Multiple myeloma">Multiple myeloma</option>
                      <option value="Myelodysplastic">Myelodysplastic</option>
                      <option value="syndromes (MDS)">syndromes (MDS)</option>
                      <option value="Neurobehavioral effects">Neurobehavioral effects</option>
                      <option value="No Injury">No Injury</option>
                      <option value="Non-Hodgkin's lymphoma (NHL)">Non-Hodgkin's lymphoma (NHL)</option>
                      <option value="Ovarian cancer">Ovarian cancer</option>
                      <option value="Other Inury">Other Inury</option>
                      <option value="Pancreatic cancer">Pancreatic cancer</option>
                      <option value="Parkinson's disease">Parkinson's disease</option>
                      <option value="Prostate cancer">Prostate cancer</option>
                      <option value="Renal toxicity">Renal toxicity</option>
                      <option value="Scleroderma">Scleroderma</option>
                      <option value="Sinus cancer">Sinus cancer</option>
                      <option value="Thyroid cancer">Thyroid cancer</option>
                      <option value="No Injury ">No Injury </option>
                      <option value="Other Inury">Other Inury</option>
                    </select>
                  </label>
                  <br />
                  <br />
                  <label>Briefly describe what happened</label>
                  <textarea className="form-control" name="comment" id="" cols="30" rows="2" required></textarea>

                  <button className="form-submit ">Submit</button>

                  <button id='form-submit' className=" form-control ">Start My free consultation</button>


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner