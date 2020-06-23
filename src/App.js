import React from 'react';
import QuestionCard from './components/question-card';
import QuestionForm from './components/question-form';
import QuestionDetail from './components/question-detail';
import Navbar from './components/navbar';
import './App.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Route} from "react-router-dom";

const body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const questions = [
  {id: 'id-0', company: 'Macrohard', position: 'Software Engineer', numComments: 0, xAgo: '3 hours ago', body: body},
  {id: 'id-1', company: 'Banana', position: 'Software Engineer', numComments: 2, xAgo: '7 hours ago', body: body},
  {id: 'id-2', company: 'Poodle', position: 'Product Manager', numComments: 3, xAgo: '12 hours ago', body: body},
  {id: 'id-3', company: 'Bookface', position: 'Software Engineer', numComments: 0, xAgo: '2 days ago', body: body}
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
                            xAgo={q.xAgo} numComments={q.numComments} body={q.body} id={q.id}/>
            )
          }
        </Route>
        <Route path="/questions/:id" component={QuestionDetail}/>
        <Route path="/submit">
          <h4>Submit</h4>
          <QuestionForm/>
        </Route>
        <Route path="/about">
          <h4>About</h4>
        </Route>
      </div>
    </Router>
  );
}

export default App;