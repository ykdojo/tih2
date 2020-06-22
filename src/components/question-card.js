import React from 'react';
import { Link } from "react-router-dom";

function QuestionCard(props) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4 className="card-title">{props.company} - {props.position}</h4>
        <p className="card-text" style={{whiteSpace: 'break-spaces'}}>{props.body}</p>
        <h6 className="card-subtitle text-muted">
          Posted by Anonymous
          <span> ･ </span>
          {props.xAgo}
          <span> ･ </span>
          <Link to={"/questions/" + props.id}>{props.numComments} comments</Link>
        </h6>
      </div>
    </div>
  );
}

export default QuestionCard;