import React from 'react'

function Meme() {

    
    return (
        <div className="container">
            <input className="form--input" type="text" placeholder="Shut up" />
            <input className="form--input" type="text" placeholder="and take my money" />
            <button className="form--btn">Get a new meme image 🤓</button>
            <img src="https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg" alt="Huh hoh"/>
        </div>
    )
}

export default Meme;