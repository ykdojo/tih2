import React from 'react';
import QuestionCard from './question-card';

const body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const questionDetails = {
  'id-0': {id: 'id-0', company: 'Macrohard', position: 'Software Engineer', numComments: 0, xAgo: '3 hours ago', body: body,
           comments: []},
  'id-1': {id: 'id-1', company: 'Banana', position: 'Software Engineer', numComments: 2, xAgo: '7 hours ago', body: body,
           comments: [ {body: body, xAgo: '14 hours ago'},
                       {body: body, xAgo: '23 hours ago'}, ]},
  'id-2': {id: 'id-2', company: 'Poodle', position: 'Product Manager', numComments: 3, xAgo: '12 hours ago', body: body,
           comments: [ {body: body, xAgo: '12 hours ago'},
                       {body: body, xAgo: '14 hours ago'}, 
                       {body: body, xAgo: '2 days ago'}, ]},
  'id-3': {id: 'id-3', company: 'Bookface', position: 'Software Engineer', numComments: 0, xAgo: '2 days ago', body: body,
           comments: []}
}

function QuestionDetail(props) {
  const q = questionDetails[props.match.params.id];
  return (
    <QuestionCard key={q.id} company={q.company} position={q.position}
      xAgo={q.xAgo} numComments={q.numComments} body={q.body} id={q.id}/>
  );
}

export default QuestionDetail;