import React from 'react';

function QuestionCard(props) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4 className="card-title">{props.company} - {props.position}</h4>
        <p className="card-text" style={{whiteSpace: 'break-spaces'}}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</p>
        <h6 className="card-subtitle text-muted">
          Posted by Anonymous
          <span> ･ </span>
          {props.xAgo}
          <span> ･ </span>
          {props.numComments} comments
        </h6>
      </div>
    </div>
  );
}

export default QuestionCard;