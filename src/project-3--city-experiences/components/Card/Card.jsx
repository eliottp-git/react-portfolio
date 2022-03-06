import React from 'react'
import star from '../../img/star.png'
import './Card.css'

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
            <div className="card--photo-container">
                <img src={`/images/p3/${props.coverImg}`} alt="Someone" className="card--photo"/>
                <div className="card--photo-description">
                    <div className="card--photo-description-txt">{props.description}</div>
                </div>
            </div>
            <div className="card--summary">
                <img src={star} alt="Star" className="card--summary--star"/> 
                <span className="spaceafter">{props.stats.rating}</span>
                <span className='gray spaceafter'> ({props.stats.reviewCount}) ∙ </span>
                <span className='gray'>{props.location}</span>
            </div>
            <div className="card--description">{props.title}</div>
            <div className="card--price"><span>From £{props.price}</span> / person</div>
        </div>
    )
}

export default Card;