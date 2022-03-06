import React from 'react'
import img from '../../img/me.jpeg'
import './Photo.css'

function Photo() {
    return (
        <img className="img" src={img} alt="A panda"></img>
    )
}

export default Photo;