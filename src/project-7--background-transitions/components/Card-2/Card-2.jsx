import React from 'react'
import '../Card-2/Card-2.css'

function Card2(props) {

    return (
        <div className="card-container">
            <div className="card--title">{props.title}</div>
            <div className="card">
                <img className="card--photo" src="https://www.ilmubahasainggris.com/wp-content/uploads/2017/03/NGC.jpg" alt="" />
                <div className="card--photo-description card--photo-description-blur">
                    <div className="card--photo-description-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quod veniam aspernatur quia asperiores quasi aliquid quos dicta corrupti molestias repellat, nostrum deserunt molestiae voluptatum velit ratione minus perferendis unde.</div>
                </div>
            </div>
        </div>
    )
}

export default Card2;