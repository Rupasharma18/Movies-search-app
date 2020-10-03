import React from 'react';

const image = "https://image.tmdb.org/t/p/w1280"
function Movie({ poster_path, overview, title, vote_average }) {

    return (<div className="movie">
        <img src={image + poster_path} alt="image" />
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
        <div className="movie-over">
            <p>{overview}</p>
        </div>
    </div>)
}

export default Movie;
