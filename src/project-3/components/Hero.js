import React from 'react'
import img from '../img/photo-grid.png'

function Hero() {
    return (
        <section className="hero">
            <img src={img} alt="Hero" className="hero--img"/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--subtitle">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;