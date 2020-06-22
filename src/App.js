import React from 'react';
import QuestionCard from './components/question-card';
import Navbar from './components/navbar';
import './App.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';

const questions = [
  {id: 'id-0', company: 'Macrohard', position: 'Software Engineer', numComments: 0, xAgo: '3 hours ago'},
  {id: 'id-1', company: 'Banana', position: 'Software Engineer', numComments: 2, xAgo: '7 hours ago'},
  {id: 'id-2', company: 'Poodle', position: 'Product Manager', numComments: 3, xAgo: '12 hours ago'},
  {id: 'id-3', company: 'Bookface', position: 'Software Engineer', numComments: 0, xAgo: '2 days ago'}
]

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <div className="container" style={{marginTop: '90px'}}>
        <h4>Recent interview questions</h4>
        {
          questions.map(q =>
            <QuestionCard key={q.id} company={q.company} position={q.position}
                          xAgo={q.xAgo} numComments={q.numComments}/>
          )
        }
      </div>
    </div>
  );
}

export default App;