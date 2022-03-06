import React from 'react';
import logo from '../../img/react-icon-small.png'
import './Header.css'

function Header() {
    return (
        <header>
          <img src={logo} alt="React" className="nav--icon"/>
          <h3 className="nav--logo_text">ReactFacts</h3>
          <h4 className="nav--title">React Course - Project 1</h4>
        </header>
    )
  }

  export default Header;