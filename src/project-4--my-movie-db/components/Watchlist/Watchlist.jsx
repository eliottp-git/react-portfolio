import React from 'react'
import watchlist from '../../watchlist'
import MovieCard from '../MovieCard/MovieCard'
import './Watchlist.css'

function Watchlist() {

    const card = watchlist.map(
        (e, i) => 
        <MovieCard 
            key = {i}
            movieInfo = {e}
        />
    )

    return (
        <div className="card-list">
            {card}
        </div>
    )
}

export default Watchlist;