import React, { useState, useEffect } from 'react';
import Movie from './Movie';

export default function MovieContainer({ match }) {
  const [movieInfo, setMovieInfo] = useState({})

  useEffect(() => {
    getMovieById();
  },[])


  const getMovieById = async () => {
    const movieId = match.params.id;

    const movieFetch = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${movieId}`, {
      headers: {
        "Accept": "application/json"
      }
    });

    const movieJson = await movieFetch.json();
    console.log(movieJson)

    setMovieInfo(movieJson);
  }

  return (
    <div>
      <Movie movieInfo={movieInfo}/>
    </div>
  )
}
