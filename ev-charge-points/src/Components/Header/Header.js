import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import risky from '../../assets/images/risky.jpeg'
import './header.css'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src={risky} alt='logo' />
        <a className="navbar-brand" href="/">
          EV Charging Facilities
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <FontAwesomeIcon icon={faHome} color='#ffd700'/> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <FontAwesomeIcon icon={faUser} color='#ffd700' /> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#ffd700'/> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;



     