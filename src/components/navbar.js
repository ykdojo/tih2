import React from 'react';
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-sm fixed-top">
    <div className="container">
      <Link to="/" className="navbar-brand">TechInterviewHub.io</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="navbar-item nav-link">
            <Link to="/" className="nav-link">Questions</Link>
          </li>
          <li className="navbar-item nav-link">
            <Link to="/submit" className="nav-link">Submit</Link>
          </li>
          <li className="navbar-item nav-link">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  );
}

export default Navbar;