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
    </div>
  );
}

export default App;