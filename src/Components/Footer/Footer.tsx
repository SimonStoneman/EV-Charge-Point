import React from 'react';
import './footer.css';

const risky = require('../../assets/images/risky.jpeg');

function Footer() {
  return (
    <footer>
      <p>COPYRIGHT &copy; 2023 RISKY-BISCUITS <img src={risky} alt='team icon' height='50px' width='50px'></img></p>
      <p>Development by Kevin McGowan | Simon Stoneman | Deepa Srinivasan | Olasunkanmi Owolabi</p>
    </footer>
  );
}

export default Footer;