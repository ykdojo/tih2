import React from 'react';

function Comment(props) {
  return (
    <div>
      <div style={{whiteSpace: "break-spaces"}}>
        {props.body}
      </div>
      <div style={{marginTop: '7px', color: '#d2d2d2', fontSize: '15px'}}>
        Anonymous User
        <span> ･ </span>
        {props.xAgo}
      </div>
      <hr className="mt-3 mb-3" style={{borderTop: '1px dotted'}}/>
    </div>
  );
}

export default Comment;