import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Movie({ movieInfo }) {

  return (
    <div className="movie-description-container mt-5">
      <Row>
        <Col md={4}>
          <div className="thumbnail-container">
            <img src={movieInfo.Poster}  className="thumbnail"/>
          </div>
        </Col>
        <Col md={8} className="content-col">
          <h2>{movieInfo.Title}</h2>
          <div>
            <ListGroup className="list-group">
              <ListGroup.Item className="movie-description">
              <strong>Genre:</strong> {movieInfo.Genre}
              </ListGroup.Item>
              <ListGroup.Item className="movie-description">
              <strong>Released:</strong> {movieInfo.Released}
              </ListGroup.Item>
              <ListGroup.Item className="movie-description">
              <strong>Rated:</strong> {movieInfo.Rated}
              </ListGroup.Item>
              <ListGroup.Item className="movie-description">
                <strong>IMDB Rating:</strong> {movieInfo.imdbRating}
              </ListGroup.Item>
              <ListGroup.Item className="movie-description">
                <strong>Director:</strong> {movieInfo.Director}
              </ListGroup.Item>
              <ListGroup.Item className="movie-description">
                <strong>Writer:</strong> {movieInfo.Writer}
              </ListGroup.Item>
              <ListGroup.Item className="movie-description">
                <strong>Actors:</strong> {movieInfo.Actors}
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="well mt-5">
          <h2>Plot</h2>
          {movieInfo.Plot}
          <hr/>
            <Button variant="info" className="mr-2"><a href={`http://imdb.com/title/${movieInfo.imdbID}`} className="link">View IMDB</a></Button>
          <Link to="/">
            <Button variant="light">Back To Search</Button>
          </Link>
        </div>
      </Row>
    </div>
  )
}
