import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Card from './Card'
import data from '../data.js'

function Page() {

    const card = data.map(
        e => 
        <Card 
        key={e.id}
        openSpots={e.openSpots}
        img={e.coverImg}
        rating={e.stats.rating}
        reviewCount={e.stats.reviewCount}
        location={e.location}
        title={e.title}
        price={e.price}
        />
    )

    return (
        <div>
            <NavBar />
                <Hero />
                <div className="cards-list">{card}</div>
        </div>
    )
}

export default Page;