import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
    const info = props.movieInfo;
    const hasSummary = typeof info.summary === 'string'
    const genresList = info.genres.join(", ");

    return (
        <div className="movie-card">
            <div className="movie-card--section-img">
                <img className="movie-card--img" src={info.thumbnail} alt="Movie Thumbnail"/>
            </div>
          {hasSummary && <div className="movie-card--section-summary">
                <div className="movie-card--summary">{info.summary}</div>
            </div>}
            <div className="movie-card--section-info">
                <div className="movie-card--title"><span>Title:</span>{info.title}</div>
                <div className="movie-card--release_date"><span>Release Date:</span>{info.release_date}</div>
                <div className="movie-card--trakt_rating"><span>Trakt Rating:</span>{info.trakt_rating}</div>
                <div className="movie-card--runtime"><span>Runtime:</span>{info.runtime}</div>
                <div className="movie-card--director"><span>Director:</span>{info.director}</div>
                <div className="movie-card--synopsis"><span>Synopsis:</span>{info.synopsis}</div>
                <div className="movie-card--country"><span>Country:</span>{info.country}</div>
                <div className="movie-card--genres"><span>Genres:</span>{genresList}</div>
                <div className="movie-card--section-links">
                    <a className="movie-card--trakt_url" href={info.trakt_url} target="_blank" rel="noreferrer">Movie Page</a>
                    <a className="movie-card--trailer" href={info.trailer} target="_blank" rel="noreferrer">Watch Trailer</a>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;