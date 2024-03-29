import React, { useState } from 'react';
import './banner.css';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Banner = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [perror, setPerror] = useState('');
  const [serror, setSerror] = useState('');

  let sendDataToLeadProsper = async (e) => {
    e.preventDefault()
    let phone = e.target.phone.value
    let state = e.target.state.value
    let is_loved = e.target.is_loved.value
    let have_attorney = e.target.have_attorney.value


    if ((phone.length < 10) || (phone.length > 10) || (state.length < 2) || (state.length > 2)) {
      setPerror('Phone number should contain 10 character')
      setSerror('State should be 2 character longer')
      return;
    }
    else {
      setPerror('');
      setLoading(true);

      if (is_loved == "Yes" && have_attorney == "No") {

        let responseToZapier = await fetch("https://leadmanager.rayadvertising.com/api/post-legal", {
          method: "POST",
          body: JSON.stringify({
            "first_name": e.target.first_name.value,
            "last_name": e.target.last_name.value,
            "phone": e.target.phone.value,
            "email": e.target.email.value,
            "is_loved": e.target.is_loved.value,
            "have_attorney": e.target.have_attorney.value,
            "type_of_legal_problem": e.target.type_of_legal_problem.value,
            "address": e.target.address.value,
            "city": e.target.city.value,
            "state": e.target.state.value,
            "zip_code": e.target.zip_code.value,
          })
        }).then(response2 => response2.json())
          .then(data2 => {
            console.log(data2);
            setLoading(false)
            navigate("/thanks");

          })
          .catch(error2 => console.log(error2))


        // submittinh leads
        let leadSubmit = document.getElementById("form-submit")
        let data = {
          "first_name": e.target.first_name.value,
          "last_name": e.target.last_name.value,
          "phone": e.target.phone.value,
          "email": e.target.email.value,
          "have_attorney": e.target.have_attorney.value,
          "type_of_legal_problem": e.target.type_of_legal_problem.value,
          "is_loved": e.target.is_loved.value,
          "address": e.target.address.value,
          "city": e.target.city.value,
          "state": e.target.state.value,
          "zip_code": e.target.zip_code.value,
        }
        if (Object.keys(data).length > 0) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "lead_submitted",
            "data": data,
          })
          console.log("Form Data Pushed!")
        }
        else {
          toast.warning("Input fields can't be empty", {
            position: toast.POSITION.TOP_CENTER
          })
        }
        // web -> sheets zap
        let responseToZapierSheets = await fetch("https://hooks.zapier.com/hooks/catch/13844305/3yhu59t/", {
          method: "POST",
          body: JSON.stringify({
            "first_name": e.target.first_name.value,
            "last_name": e.target.last_name.value,
            "phone": e.target.phone.value,
            "email": e.target.email.value,
            "is_loved": e.target.is_loved.value,
            "have_attorney": e.target.have_attorney.value,
            "type_of_legal_problem": e.target.type_of_legal_problem.value,
            "address": e.target.address.value,
            "city": e.target.city.value,
            "state": e.target.state.value,
            "zip_code": e.target.zip_code.value,
          })
        }).then(response3 => response3.json())
          .then(data3 => {
            console.log(data3);
            setLoading(false)
            navigate("/thanks");

          })
          .catch(error2 => console.log(error2))

        console.log("YES NO")
        // navigate("/thanks")
      }
      else {
        // submitting leads
        let leadSubmit = document.getElementById("form-submit")
        let data = {
          "first_name": e.target.first_name.value,
          "last_name": e.target.last_name.value,
          "phone": "+" + 1 + e.target.phone.value,
          "email": e.target.email.value,
          "have_attorney": e.target.have_attorney.value,
          "type_of_legal_problem": e.target.type_of_legal_problem.value,
          "address": e.target.address.value,
          "city": e.target.city.value,
          "state": e.target.state.value,
          "zip_code": e.target.zip_code.value,
          "is_loved": e.target.is_loved.value,
        }
        if (Object.keys(data).length > 0) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "lead_submitted",
            "data": data,
          })
          console.log("Form Data Pushed!")
        }
        else {
          toast.warning("Input fields can't be empty", {
            position: toast.POSITION.TOP_CENTER
          })
        }
        // web -> sheets zap
        let responseToZapierSheets = await fetch("https://hooks.zapier.com/hooks/catch/13844305/3yhu59t/", {
          method: "POST",
          body: JSON.stringify({
            "first_name": e.target.first_name.value,
            "last_name": e.target.last_name.value,
            "phone": e.target.phone.value,
            "email": e.target.email.value,
            "is_loved": e.target.is_loved.value,
            "have_attorney": e.target.have_attorney.value,
            "type_of_legal_problem": e.target.type_of_legal_problem.value,
            "address": e.target.address.value,
            "city": e.target.city.value,
            "state": e.target.state.value,
            "zip_code": e.target.zip_code.value,
          })
        }).then(response3 => response3.json())
          .then(data3 => {
            console.log(data3);
            setLoading(false)
            navigate("/thanks");

          })
          .catch(error2 => console.log(error2))
        console.log("ELSE WORKING FINE")
        navigate("/thanks")
      }
    }
    // console.log()
  }

  function pushData() {
    window.dataLayer = window.dataLayer || [];
    let call = document.getElementById("call")

    window.dataLayer.push({
      event: "call_button"
    })
    console.log("clicked")
  }

  function pushReview(e) {
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
                <button className='get-button' onClick={pushReview}>GET FREE CLAIM REVIEW</button>
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
                    <div className='radio'>
                      <select name="is_loved" id="cpform" className="form-control" required>
                        <option value="" selected>Please select...</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </label>
                  <br />
                  <div className='row gx-3 mt-2'>
                    <div className='col'>
                      <input className="form-control" type="text" name="first_name" placeholder='First Name' required />
                    </div>
                    <div className='col'>
                      <input className="form-control" type="text" name="last_name" placeholder='Last Name' required />
                    </div>
                  </div>

                  <div className='row gx-3 mt-3'>
                    <div className='col'>
                      <input className="form-control" type="number" name="phone" placeholder='Phone' required />
                      <p className='text-danger'>{perror}</p>
                    </div>
                    <div className='col'>
                      <input className="form-control" type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" placeholder='Email' required />
                    </div>
                  </div>
                  <br />
                  <label>
                    Do you already have an attorney representing you for this claim?
                    <div className='radio'>
                      <select name="have_attorney" id="" className="form-control" required>
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
                    <select className="form-control" id='pinjur' name="type_of_legal_problem" required>
                      <option value="Please select">Please select...</option>
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
                      <option value="Other Inury">Other Inury</option>
                    </select>
                  </label>
                  <br />
                  <br />
                  {/* <label>Briefly describe what happened</label>
                  <textarea className="form-control" name="comment" id="" cols="30" rows="2" required></textarea> */}
                  {!loading && (
                    <button id='form-submit' className=" form-submit form-control " >Start My free consultation </button>
                  )}
                  {loading && (
                    <button id='form-submit' className=" form-submit form-control " disabled> <i className='fas fa-spinner fa-spin'></i>{" "} Start My free consultation... </button>
                  )}
                  {/* <button id='form-submit' className=" form-submit form-control">Start My free consultation</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>

  )
}

export default Banner