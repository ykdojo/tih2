import React from 'react';
import QuestionCard from './components/question-card';
import Navbar from './components/navbar';
import './App.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Route} from "react-router-dom";

const questions = [
  {id: 'id-0', company: 'Macrohard', position: 'Software Engineer', numComments: 0, xAgo: '3 hours ago'},
  {id: 'id-1', company: 'Banana', position: 'Software Engineer', numComments: 2, xAgo: '7 hours ago'},
  {id: 'id-2', company: 'Poodle', position: 'Product Manager', numComments: 3, xAgo: '12 hours ago'},
  {id: 'id-3', company: 'Bookface', position: 'Software Engineer', numComments: 0, xAgo: '2 days ago'}
]

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container" style={{marginTop: '100px'}}>
        <Route path="/" exact>
          <h4>Recent interview questions</h4>
          {
            questions.map(q =>
              <QuestionCard key={q.id} company={q.company} position={q.position}
                            xAgo={q.xAgo} numComments={q.numComments}/>
            )
          }
        </Route>
        <Route path="/submit">
          <h4>Submit</h4>
        </Route>
        <Route path="/about">
          <h4>About</h4>
        </Route>
      </div>
    </Router>
  );
}

export default App;