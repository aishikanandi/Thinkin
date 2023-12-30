import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import './comments.css';
import {BASE_URL} from '../single/helper.js'
const CommentCard = ({ comments, id }) => {
  const [newComment, setNewComment] = useState("");
  const [newUser, setNewUser] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);

  // Display only the first three comments initially
  const displayedComments = showAllComments ? comments : comments.slice(0, 3);


  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };
  const handleUserChange = (event) => {
    setNewUser(event.target.value);
  };

  const handleCommentSubmit = () => {
    const simulatedServerResponse =  {
      userName: newUser,
      text: newComment
      
    };
    
    const apiEndpoint = `${BASE_URL}/api/posts/${id}`;

    axios.put(apiEndpoint, { comments: simulatedServerResponse })
      .then((response) => {
        window.location.reload();

      })
      .catch((error) => {
        console.error("Error submitting comment:", error);
      });
    
  };

  return (
    <div>
      <div className="cate">
<h5>COMMENTS?</h5>
</div>
    <div class="SPForum-Comments ">
  <input
    type="text"
    class="SPForum-Comment-Input"
    placeholder="Your Name"
    onChange={handleUserChange}
    value={newUser}
  />
  <textarea
    class="SPForum-Comment-Input"
    placeholder="Type your comment here..."
    value={newComment}
    onChange={handleCommentChange}
  ></textarea>
  <button class="SPForum-Comment-Button" onClick={handleCommentSubmit}>
    Submit Comment
  </button>
</div>
      {displayedComments.map((c, index) => (
        <div className="forum-post-card" key={index}>
        <div className="forum-post-header">
          <div className="forum-user-info">
            <img
              src={require("../../../images/a.png")} 
              alt="b"
              className="forum-user-image"
            ></img>
            <div className="forum-user-details">
              <div className="forum-user-name">{c.userName}</div>
              <div className="forum-last-seen">{moment(c.createdAt).fromNow()}</div>
            </div>
          </div>
          
          
        </div>
        <div className="forum-post-content">
          <div className="forum-answer">{c.text}</div>
        </div>
        <div class="forum-post-footer">
          <div className="forum-post-actions">
            <div className="forum-actions-icons">
              <div className="forum-action-icon">
                {" "}
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}

      {/* Render "Read More" button if there are more than three comments */}
      {comments.length > 3 && !showAllComments && (
        <div className="read-more parent-read"><h4 className="read-more-button read-overlay" onClick={() => setShowAllComments(true)}><p style={{zIndex:"100"}}>Read More</p></h4></div>
      )}
    </div>

  );
};

export default CommentCard;
