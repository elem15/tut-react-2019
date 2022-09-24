import React from 'react';
import './Footer.css'

const Footer = (props) => (
  props.loading 
  &&
  <footer>
    <h3 className='footer__head'>footer content</h3>
  </footer>  
)

export default Footer;