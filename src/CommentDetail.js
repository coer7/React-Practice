
// Import the React and ReactDOM libraries
import React from 'react';
// Create a react component
const CommentDetail = props =>  {
  return  (
    <div className="comment">
    <a herf="/" className="avatar">
        <img alt="avatar" src={props.image}/>
    </a>
    <div className="content">
        <a href="/" className="author">
            {props.author}
        </a>
        <div className="metadata">
        <span className="date">{props.currentTime}</span>
        </div>
        <div className="text">{props.text}</div>
    </div>  
    </div>
  );
};

export default CommentDetail;