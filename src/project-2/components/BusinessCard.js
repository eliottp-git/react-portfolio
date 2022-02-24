import React from 'react'
import Photo from './Photo'
import Summary from './Summary'
import Biography from './Biography'
import Social from './Social'

function BusinessCard() {
    return (
        <div className="business-card">
            <div className="item"><Photo /></div>
            <div className="item"><Summary /></div>
            <div className="item"><Biography /></div>
            <div className="item social"><Social /></div>
        </div>
    )
}

export default BusinessCard;