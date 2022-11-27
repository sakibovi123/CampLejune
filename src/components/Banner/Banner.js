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
    })

    let responseToZapier = await fetch("", {
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
    })

    let data1 = responseLeadprosper.json()
    let data2 = responseToZapier.json()
    console.log(responseLeadprosper, data1)
    console.log(data2, responseToZapier)

    navigate("/")

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
              <a href="tel:+18559390621">
                <button  className='phone-button'><i class="fa-solid fa-phone" /> (855) 939-0621</button>
                </a>
                <button className='get-button'>GET MY FREE CLAIM REVIEW</button>
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