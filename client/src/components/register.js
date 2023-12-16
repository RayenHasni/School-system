import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";


function RegistrationForm() {
  return (
    <div className="registration-form"> 
      <form>
        <div className="form-icon">
          <span>
            <FontAwesomeIcon icon={faUserPlus} />
          </span>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control item"
            id="username"
            placeholder="Nom"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control item"
            id="username"
            placeholder="Prenom"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control item"
            id="cin"
            placeholder="CIN"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control item"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control item"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control item"
            id="phone-number"
            placeholder="Phone Number"
          />
        </div>
        <div className="form-group center">
          <button type="button" className="btn btn-block create-account">
            Create Account
          </button>
        </div>
        <div className="form-group center">
          <Link to="/login" className="text-decoration-none">Already Have an Account?</Link>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;