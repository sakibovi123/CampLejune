import React, { Component } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CallSec from '../subHeader/CallSec';

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <div>
      <Navbar>
      <Container>
        <Navbar.Brand href="/"><img
              alt=""
              src={logo}
              className="d-inline-block align-top"
            />{' '}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text> <h2 className='over'>Over $1 Billion Recovered</h2>
            <p className='settle'>in Verdicts & Settlements*</p>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <CallSec />
    </div>
    )
  }

}

export default Header;