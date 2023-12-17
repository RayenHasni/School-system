import React from 'react';
import "./modules.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

function NavigationBar() {
 return (
  <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
  <div className="container">
  <Link to='/' className="navbar-brand text-decoration-none fs-5 " >
      <FontAwesomeIcon icon={faSchool} /> School System</Link>
    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navcol-1"
    >
      <span className="sr-only">Toggle navigation</span>
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navcol-1">
      <ul className="nav navbar-nav">
        <li className="nav-item" role="presentation">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="dropdown">
          <a
            className="dropdown-toggle nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
            href="#"
          >
            Dropdown{" "}
          </a>
          <div className="dropdown-menu" role="menu">
            <a className="dropdown-item" role="presentation" href="#">
              First Item
            </a>
            <a className="dropdown-item" role="presentation" href="#">
              Second Item
            </a>
            <a className="dropdown-item" role="presentation" href="#">
              Third Item
            </a>
          </div>
        </li>
      </ul>
      <form className="form-inline mr-auto" target="_self">
        <div className="form-group">
          <label htmlFor="search-field">
            <i className="fa fa-search" />
          </label>
          <input
            className="form-control search-field"
            type="search"
            name="search"
            id="search-field"
          />
        </div>
      </form>
      <span className="navbar-text">
      <Link to="/Login" className="login">
              <FontAwesomeIcon icon={faUser} /> Login
             </Link>
      </span>
      <Link to="/Register" className="btn btn-light action-button">
              <FontAwesomeIcon icon={faUserPlus} /> Register now!
              </Link>
    </div>
  </div>
</nav>

 );
}

export default NavigationBar;

