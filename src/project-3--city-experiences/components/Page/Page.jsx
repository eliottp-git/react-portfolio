import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Card from '../Card/Card'
import data from '../../data.js'
import './Page.css'

function Page() {

    const card = data.map(
        e => 
            <Card 
                key={e.id}
                {...e}
            />
    )

    return (
        <>
            <NavBar />
            <Hero />
            <section className="cards-list">{card}</section>
        </>
    )
}

export default Page;