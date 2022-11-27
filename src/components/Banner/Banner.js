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

  function pushData(){
    window.dataLayer = window.dataLayer || [];
    var call = document.getElementById("call")

    window.dataLayer.push({
      event: "call_button"
    })
    console.log("clicked")
  }

  function pushReview(){
    window.dataLayer = window.dataLayer || [];
    var call = document.getElementById("call")

    window.dataLayer.push({
      event: "review_clicked"
    })
    console.log("clicked")
  }

  return (

    <div>
    <CallSec />
    <div className='banner banner-text' id='home'>
      <Container className=''>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <div className='article'>
              <h1>WERE YOU OR A LOVED ONE BASED AT CAMP LEJEUNE BETWEEN 1953 TO 1987?</h1>
              <h4>You could be owed $1,000s in compensation.<br /> ACT NOW LIMITED TIME TO FILE!</h4>
              <div className='banner-button'>
              <a href="tel:+18559390621" onClick={pushData} id="call">
                <button  className='phone-button' onClick={pushData}><i class="fa-solid fa-phone" /> (855) 939-0621</button>
                </a>
                <button className='get-button' onClick={pushReview}>GET MY FREE CLAIM REVIEW</button>
              </div>
            </div>

          </Col>

          {/* *****************banner form*************** */}

          <Col xs={12} md={6} xl={5}>
          <div className='banner-form form-group'>
            <form onSubmit={sendDataToLeadProsper}>
              
              <label htmlFor="">Did you or a loved one serve, live, or work at Camp Lejeune for at least 30 days between 1953 and 1987?</label><br/>
              <select name="camp_lj" id="" className="form-control">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select><br/>

              <label htmlFor="first_name">First Name</label><br/>
              <input className="form-control" type="text" name="first_name" placeholder="Enter First Name..."/><br/>

              <label htmlFor="first_name">Last Name</label><br/>
              <input className="form-control" type="text" name="last_name" placeholder="Enter Last Name..."/><br/>

              <label htmlFor="phone">Phone</label><br/>
              <input className="form-control" type="text" name="phone" placeholder="Enter Phone..."/><br/>

              <label htmlFor="email">Email</label><br/>
              <input className="form-control" type="email" name="email" placeholder="Enter Email..."/><br/>

              <label htmlFor="representation">Do you already have an attorney representing you for this claim?</label><br/>
              <select name="representation" className="form-control">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select><br/>

              <label htmlFor="representation">Do you already have an attorney representing you for this claim?</label><br/>
              <select name="representation" className="form-control">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select><br/>

              <label htmlFor="Briefly describe what happened:">Briefly describe what happened:</label><br/>
              <textarea name="comment" id="" cols="30" rows="10" className="form-control" placeholder="Briefly Describe what happened"></textarea><br/>

              <button className="btn btn-outline-primary">Send Request</button>
  
            </form>
            </div>
          </Col>
        </Row>
      </Container>
</div>
    </div>
  )
}

export default Banner