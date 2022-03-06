import React from 'react'
import Card1 from '../Card-1/Card-1'
import Card2 from '../Card-2/Card-2'
import Card3 from '../Card-3/Card-3'
import './Page.css'

function Page() {
    return (
        <div className="card-list">
            <Card1 name="card-1" title="Card 1 - Darker background vertical text"/>
            <Card2 name="card-2" title="Card 2 - Blurred background"/>
            <Card3 name="card-2" title="Card 3 - Primary background"/>
            <Card1 title="To Do"/>
            <Card1 title="To Do"/>
            <Card1 title="To Do"/>
        </div>
    )
}

export default Page;