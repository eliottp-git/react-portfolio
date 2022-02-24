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
        info={e}
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