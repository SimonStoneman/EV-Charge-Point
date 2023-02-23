import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './header.css'

function Header() {
  return (
    <header className='container'>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">RechargeRefuel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" variant="light">
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



