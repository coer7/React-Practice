
// Import the React and ReactDOM libraries
import React from 'react';
// Create a react component
const ApprovalCard = props =>  {
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content"> 
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;