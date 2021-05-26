import { render } from '@testing-library/react';
import React, { useState } from 'react';
import CardContent from './CardContent';
import Search from './Search';
import { Redirect } from 'react-router-dom';

export default function CardContainer() {
  const [movies, setMovies] = useState([])

  const getMovies = async text => {
    const movieFetch = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${text}`, {
      headers: {
        "Accept": "application/json"
      }
    })
    const movieJson = await movieFetch.json();
    setMovies(movieJson.Search)
  }

  return (
    <div className="container text-center">
      <Search getMovies={getMovies}/>
      
      <div className="d-flex justify-content-center">
        <div className="card-grid">
          {movies != null ? movies.map(movie => (
            <CardContent key={movie.imdbID} movie={movie}/>
          )) : <Redirect to="/err"/>}
        </div>
      </div>
    </div>
  )
}
