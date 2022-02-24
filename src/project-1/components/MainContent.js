import React from 'react'
import logo from '../img/react-icon-large.png'

function MainContent() {
    return (
        <main className="main-content">
            <img src={logo} alt="React Background" className="main-content-background"/>
            <h1 className="main-content-title">Fun facts about React</h1>
            <ul className="main-content-list">
                <li><span>Was first released in 2013</span></li>
                <li><span>Was originally created by Jordan Walke</span></li>
                <li><span>Has well over 100K stars on GitHub</span></li>
                <li><span>Is maintained by Facebook</span></li>
                <li><span>Powers thousands of enterprise apps, including mobile apps</span></li>
            </ul>
        </main>
    )
  }
  
export default MainContent;