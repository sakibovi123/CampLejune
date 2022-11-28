import React from 'react';
import './GetInTouch.css';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
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
        <div className='getintouch'>
            <div className='getbanner banner-text' id='home'>
                <div className='banner-box'>
                    <Row className='align-items-center'>
                        <Col xs={12} md={6} xl={7}>
                            <div className='camp'>
                                <h1>Making a “Camp Lejeune Justice Act of 2022” Claim</h1>
                                

                                <div className='get'>
                                    <h5><i class="fa-regular fa-circle-check"></i>	Get Your
Medical Bills Paid.
                                    </h5>
                                    <p>We treat you like you’re family. Our motto, “Experience you can trust,” is a reflection of our lawyers’ compassion, track record, and relentless need to fight for justice.</p>
                                </div>
                                <div className='get'>
                                    <h5><i class="fa-sharp fa-solid fa-scroll"></i>	Complete the no-cost claim review form.
                                    </h5>
                                    <p>In the event, they win your case, your attorneys will receive a contingency fee based on the funds they recover to pay for costs..</p>
                                </div>
                                <div className='get'>
                                    <h5><i class="fa-solid fa-heart-pulse"></i>	Enrollment.
                                    </h5>
                                    <p>Camp lejeune lawyers guide you through the enrollment process step by step. Securing your coverage online or over the phone.</p>
                                </div>
                                {/* <h4>You could be owed $1,000s in compensation.<br /> ACT NOW LIMITED TIME TO FILE!</h4> */}
                                {/* <div className='banner-button'>
                  <a href="tel:+18559390621">
                    <button className='phone-button'><i class="fa-solid fa-phone" /> (855) 939-0621</button>
                  </a>
                  <button className='get-button'>GET MY FREE CLAIM REVIEW</button>
                </div> */}
                            </div>

                        </Col>

                        {/* *****************banner form*************** */}

                        <Col xs={12} md={6} xl={5}>
                            <div className='banner-form form-group'>
                                <form onSubmit={sendDataToLeadProsper}>

                                    <label htmlFor="">Did you or a loved one serve, live, or work at Camp Lejeune for at least 30 days between 1953 and 1987?</label><br />
                                    <select name="camp_lj" id="" className="form-control">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select><br />

                                    <label htmlFor="first_name">First Name</label><br />
                                    <input className="form-control" type="text" name="first_name" placeholder="Enter First Name..." /><br />

                                    <label htmlFor="first_name">Last Name</label><br />
                                    <input className="form-control" type="text" name="last_name" placeholder="Enter Last Name..." /><br />

                                    <label htmlFor="phone">Phone</label><br />
                                    <input className="form-control" type="text" name="phone" placeholder="Enter Phone..." /><br />

                                    <label htmlFor="email">Email</label><br />
                                    <input className="form-control" type="email" name="email" placeholder="Enter Email..." /><br />

                                    <label htmlFor="representation">Do you already have an attorney representing you for this claim?</label><br />
                                    <select name="representation" className="form-control">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select><br />

                                    <label htmlFor="representation">Do you already have an attorney representing you for this claim?</label><br />
                                    <select name="representation" className="form-control">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select><br />

                                    <label htmlFor="Briefly describe what happened:">Briefly describe what happened:</label><br />
                                    <textarea name="comment" id="" cols="30" rows="10" className="form-control" placeholder="Briefly Describe what happened"></textarea><br />

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

export default GetInTouch;