import React from 'react'
import star from '../img/star.png'

function Card(props) {
    let badgeText;
    if(props.openSpots === 0){
        badgeText = 'SOLD OUT'
    } else if(props.location === 'Online') {
        badgeText = 'ONLINE'
    }
    return (
        <div className="card">
            {badgeText && <div className="card--soldout-badge">{badgeText}</div>}
            <img src={`/images/${props.img}`} alt="Someone" className="card--photo"/>
            <div className="card--summary">
                <img src={star} alt="Star" className="card--summary--star"/> 
                <span>{props.rating}</span>
                <span className='gray'> ({props.reviewCount}) ∙ </span>
                <span className='gray'>{props.location}</span>
            </div>
            <div className="card--description">{props.title}</div>
            <div className="card--price"><span>From £{props.price}</span> / person</div>
        </div>
    )
}

export default Card;