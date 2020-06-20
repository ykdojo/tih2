import React from 'react';
import './App.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary navbar-expand-sm fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">TechInterviewHub.io</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="navbar-item nav-link">
                <a href="/">Questions</a>
              </li>
              <li className="navbar-item nav-link">
                <a href="/">Submit</a>
              </li>
              <li className="navbar-item nav-link">
                <a href="/">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container" style={{marginTop: '90px'}}>
        <h4>Recent interview questions</h4>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Macrohard - Software Engineer</h4>
            <p className="card-text" style={{whiteSpace: 'break-spaces'}}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</p>
            <h6 className="card-subtitle text-muted">Posted by Anonymous</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;