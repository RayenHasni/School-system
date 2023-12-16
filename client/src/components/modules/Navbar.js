import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

function NavigationBar() {
 return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to='/' className="text-decoration-none fs-5 " >  <FontAwesomeIcon icon={faSchool} /> School System</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/Login" className="nav-link">
              <FontAwesomeIcon icon={faUser} /> Login
             </Link>
            </li>
            <li className="nav-item">
              <Link to="/Register" className="nav-link">
              <FontAwesomeIcon icon={faUserPlus} /> Register now!
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
 );
}

export default NavigationBar;

