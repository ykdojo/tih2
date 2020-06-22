import React from 'react';

function QuestionDetail(props) {
  return (
    <h4>This is QuestionDetail for {props.match.params.id}</h4>
  );
}

export default QuestionDetail;