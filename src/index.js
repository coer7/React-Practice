
// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
// Create a react component
const App = () =>  {
  return  (
    
    <div className="ui container comments">
          <ApprovalCard>
            <div>
              <h4>Warning!</h4>
              Are you sure you want to do this?
            </div>
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
              author="Sam"
              timeAgo="Today at 4:45PM"
              text="Nice blog post"
              image={faker.image.avatar()}
            />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
              author="Alex"
              timeAgo="Today at 2:00AM"
              text="I like the subject"
              image={faker.image.avatar()}
            />
          </ApprovalCard>

          <ApprovalCard>
            <CommentDetail
              author="Jane"
              timeAgo="Yesterday at 5:00PM"
              text="I like the writing"
              image={faker.image.avatar()}
            />
          </ApprovalCard>
        </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
  
);