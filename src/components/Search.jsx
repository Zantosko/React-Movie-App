import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';


export default function Search({ getMovies }) {
  const [text, setText] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    getMovies(text) 
    setText("")
  }

  const handleChange = e => setText(e.target.value)
  
  return (
    <div className="container mt-5 mb-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupEmail">
          <Form.Label 
            className="search-label mb-3"
          >Search for any movie 🍿  </Form.Label>
          <Form.Control 
            type="text" 
            name="text"
            placeholder="Enter movie name.."
            value={text}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <div className="text-center">
          <Button 
            variant="info" 
            type="submit"
          >Find Movies</Button>
        </div>
      </Form>
    </div>
  )
}

Search.propTypes = {
  getMovies: PropTypes.func.isRequired
}
