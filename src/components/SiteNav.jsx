import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function SiteNav() {
  return (
    <div>
      <Navbar className="nav">
        <Link to="/" className="link">
          <span style={{fontSize: "1.75rem"}}>📽 </span>
          <Navbar.Brand 
            href="" 
            style={{color: "azure"}}
          >Cinema<span style={{color: "#138496"}}>Search</span></Navbar.Brand>
        </Link>
      </Navbar>
    </div>
  )
}
