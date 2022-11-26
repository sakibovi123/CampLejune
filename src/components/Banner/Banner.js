import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './banner.css';


const Banner = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    description: '',
    country: 'canada',
    agree: false,
    gender: 'Other'
  });

  const [error, setError] = useState({
    name: ''
  });

  const onChange = (e) => {
    const { value, name, type, checked } = e.target;

    setForm((state) => ({
      ...state,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  const showData = () => {
    console.log('Form: ', form);

  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.name.length < 5) {
      setError((state) => ({
        ...state,
        name: 'Too short'
      }));
      return;
    } else {
      setError((state) => ({
        ...state,
        name: ''
      }));
    };
    showData();
    
  }

  return (
    <div className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <div className='article'>
              <h1>WERE YOU OR A LOVED ONE BASED AT CAMP LEJEUNE BETWEEN 1953 TO 1987?</h1>
              <h4>You could be owed $1,000s in compensation.<br /> ACT NOW LIMITED TIME TO FILE!</h4>
              <div className='banner-button'>
                <button className='phone-button'><i class="fa-solid fa-phone" /> (855) 939-0621</button>
                <button className='get-button'>GET MY FREE CLAIM REVIEW</button>
              </div>
            </div>

          </Col>

          {/* *****************banner form*************** */}

          <Col xs={12} md={6} xl={5}>
          <div className='banner-form'>
            <form onSubmit={onSubmit}>

              <label>Name:
                <input onchange={onChange} name='name' value={form.name} />
              </label>
              {!!error.name && (
                <div>
                  <i>{error.name}</i>
                </div>
              )}
              <hr />

              <label>Email:
                <input onchange={onChange} name='email' value={form.email} />
              </label>

              <hr />

              <label>Description:
                <input onchange={onChange} name='email' value={form.description} />
              </label>

              <hr />

              <label>
                Country:
                <select onchange={onChange} value={form.country} name="country">
                  <option value="us">U.S.</option>
                  <option value="us">Canada</option>
                  <option value="us">Ukraine</option>
                </select>
              </label>

              <hr />

              <label>
                Gender:
                <div>
                  <input onchange={onChange} type="radio" value="Male" name='gender' checked={form.gender === 'Male'} />Male
                  <input onchange={onChange} type="radio" value="Female" name='gender' checked={form.gender === 'Female'} />Female
                  <input onchange={onChange} type="radio" value="Other" name='gender' checked={form.gender === 'Other'} />Other
                </div>
              </label>

              <hr />

              <label>
                Agree:
                <input type="checkbox" onChange={onChange} name="agree" value={form.agree} />
              </label>

              <div>
                <button className='form-submit' >Submit</button>
              </div>

            </form>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Banner