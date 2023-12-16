import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function LoginForm() {
  return (
    <div className="registration-form"> 
    <form>
      <div className="form-icon">
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      <div classname="form-group">
      <select className="form-select mb20" aria-label="Default select">
      <option selected="">Your Role</option>
      <option value={1}>Admin</option>
      <option value={2}>Parent</option>
      </select>
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
        <div className="form-group center">
          <button type="button" className="btn btn-block create-account">
            Log IN
          </button>
        </div>
        <div className="form-group center">
          <Link to="/register" className="text-decoration-none">Create an Account</Link>
        </div>
</form>
</div>
  );
}

export default LoginForm;