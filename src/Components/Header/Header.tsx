import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <header className='basis-auto bg-blue'>
      <Navbar expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="/" className='d-flex justify-content-start'>
            <img
              src={require('../../assets/images/rechargerefuel_logo.jpeg')}
              width='120'
              height='120'
              className='d-inline-block align-top'
              alt='RechargeRefuel Logo'
            />{''}
            <Navbar.Text className='d-flex justify-content-center align-items-center ms-2'>
              RechargeRefuel
            </Navbar.Text>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              color='#ddd' />
          </Navbar.Toggle>

          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="d-flex justify-content-center">
              <Nav.Item>
                <Nav.Link href="/">
                  <FontAwesomeIcon icon={faHome} color='#ffd700' />
                  <span>Home</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">
                  <FontAwesomeIcon icon={faUser} color='#ffd700' />
                  <span>About</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">
                  <FontAwesomeIcon icon={faEnvelope} color='#ffd700' />
                  <span>Contact</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;