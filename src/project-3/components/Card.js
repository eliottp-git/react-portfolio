import React from 'react'
import star from '../img/star.png'

function Card(props) {
    
    const info = props.info
    let badgeText;

    if(info.openSpots === 0){
        badgeText = 'SOLD OUT'
    } else if(info.location === 'Online') {
        badgeText = 'ONLINE'
    }

    return (
        <div className="card">
            {badgeText && <div className="card--soldout-badge">{badgeText}</div>}
            <img src={`/images/${info.coverImg}`} alt="Someone" className="card--photo"/>
            <div className="card--summary">
                <img src={star} alt="Star" className="card--summary--star"/> 
                <span className="spaceafter">{info.stats.rating}</span>
                <span className='gray spaceafter'> ({info.stats.reviewCount}) ∙ </span>
                <span className='gray'>{info.location}</span>
            </div>
            <div className="card--description">{info.title}</div>
            <div className="card--price"><span>From £{info.price}</span> / person</div>
        </div>
    )
}

export default Card;