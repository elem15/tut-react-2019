import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Header.css'

class Header extends Component {
  state = {
    logged: this.props.logged,
  }
  logInHandle() {
    this.setState(({logged}) => ({ logged: !logged}))
  }
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />          
          <nav className='nav-bar'>
            <button className='btn' onClick={this.logInHandle.bind(this)}>
              Log {this.state.logged ? 'on' : 'off'}
            </button>
            You are currently logged {this.state.logged ? 'on' : 'off'}
          </nav>        
      </header>
    )
  }
}

export default Header;