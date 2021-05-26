import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CardContent({ movie: { Title, Poster, imdbID } }) {
  const [movieId, setMovieId] = useState(imdbID);

  return (
    <div className="text-center m-2">
      <Card 
        style={{ 
          width: '18rem', 
          backgroundColor: "rgba(0,0,0,0.7)",
          color: "azure"
        }} 
        className="movie-card"
      >
        <Card.Img variant="top" src={Poster} className="movie-poster"/>
        <Card.Body className="movie-card-body">
          <div className="title-container d-flex flex-column justify-content-center align-items-center">
            <Card.Title style={{fontSize: "1.3rem"}}>{Title}</Card.Title>
              <Link to={`/movie/${imdbID}`} className="link">
                <Button variant="light" className="info-btn d-flex">More Info</Button>
              </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
