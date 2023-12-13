import './post.css';
import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

function Post({ date, imageUrl, category, title, content, id, onDelete }) {
  const handleDelete = async () => {
    try {
      // Make a DELETE request to your API
      await axios.delete(`http://localhost:5000/api/posts/${id}`);
      
      // Call the onDelete function passed as a prop
      onDelete(id);
    } catch (error) {
      console.error("Error deleting post:", error.message);
      //refresh the webpage
      window.location.reload();
    }
  };

  return (
    <div className='post' style={{ '--post': '1' }}>
      <Link to={`/${title}`}><img className='postImage' src={imageUrl} alt="" /></Link>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{category}</span>
        </div>
        <Link to={`/${title}`}>
          <div className="postTitle">
            <span>{title}</span>
          </div>
        </Link>
        <Link to={`/${title}`}>
          <div className="postDesc">
            <span>{content}</span>
          </div>
        </Link>
        <div className='Date' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="postDate" style={{ color: "rgb(85, 79, 79, 0.8)" }}>{date}</span>
          <img
            style={{ height: "20px", marginLeft: 'auto', cursor: "pointer" }}
            src={require("../images/bin.png")}
            alt=""
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
