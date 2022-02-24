import React from 'react'
import { AiFillTwitterSquare, AiFillFacebook, AiFillInstagram, AiOutlineGithub } from "react-icons/ai";

function Social() {
    return (
        <div className="section--social">
            <div><AiFillTwitterSquare /></div>
            <div><AiFillFacebook /></div>
            <div><AiFillInstagram /></div>
            <div><AiOutlineGithub /></div>
        </div>
    )
}

export default Social;