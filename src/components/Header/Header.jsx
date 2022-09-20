import React from 'react';
import logo from '../../logo.svg';
import './Header.css'

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <nav className='nav-bar'>nav bar</nav>
  </header>
)

export default Header;