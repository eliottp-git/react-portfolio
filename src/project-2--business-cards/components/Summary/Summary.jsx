import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import './Summary.css'

function Summary() {
    return (
        <div className="summary">
            <div className="summary-item-1">Eliott Perl</div>
            <div className="summary-item-2">Senior BI Analyst</div>
            <div className="summary-item-3"><a href="https://eliottp-git.github.io/">eliottp-git.github.io</a></div>
            <div className="summary-item-4"><span><GrMail /></span>Email</div>
            <div className="summary-item-5"><span><AiFillLinkedin /></span>Linkedin</div>
        </div>
    )
}

export default Summary;