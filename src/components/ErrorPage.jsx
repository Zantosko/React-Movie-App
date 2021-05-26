import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fred from '../assets/fred.jpeg'

export default function ErrorPage() {
  return (
    <div className="ErrorPage d-flex justify-content-center align-items-center">
      <div className="container text-center mt-5 box">
        <h1 className="box-title">404 Not Found!</h1>
        <img src={Fred} alt="" height="400" width="400" className="mt-4"/>
        <br/>
        <Link to="/">
          <Button variant="light" className="mt-4">Back To Search</Button>
        </Link>
      </div>
    </div>
  )
}
