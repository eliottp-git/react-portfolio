import React from 'react'
import img from '../img/airbnb-logo.png'

function NavBar() {
    return (
        <nav>
            <img src={img} alt="Logo" className="nav--logo"></img>
        </nav>
    )
}

export default NavBar;