import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './components/Movies';

const feature_Api = "http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const search_Api = "https://api.themoviedb.org/3/search/movie?&api_key=3583464c166eb3446babdeabbc188153&query="
function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    Axios.get(feature_Api).then(res => {
      setMovies(res.data.results)

    })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(search_Api + search).then(res => {
      setMovies(res.data.results)
    }).catch(err => {
      console.log(err)
    })

    setSearch('')
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <header>
      
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search ...."
            value={search}
            onChange={handleChange}
          />
        </form>

      </header>
      <div className="movie-container">
        {movies.map((movie) =>
          <Movie key={movie.id} {...movie} />
        )}
      </div>
    </>
  );
}

export default App;
