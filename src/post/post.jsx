import './post.css';
import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import {BASE_URL} from '../pages/home/single/helper.js'
function Post({ date, imageUrl, category, title, content, id, onDelete, isAuthenticated }) {
  const handleDelete = async () => {
    try {
      // Make a DELETE request to your API
      await axios.delete(`${BASE_URL}/api/posts/${id}`);
      
      // Call the onDelete function passed as a prop
      onDelete(id);
    } catch (error) {
      console.error("Error deleting post:", error.message);
      //refresh the webpage
      window.location.reload();
    }
  };

  // const uint8Array = new Uint8Array(imageUrl);
  // const blob = new Blob([uint8Array], { type: 'image/png' });
  // const imageurl = URL.createObjectURL(blob);

  return (
    <div className='post' style={{ '--post': '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'  }}>
       <>
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
        </div>
        </>
        <>
        <div className='Date' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "Auto" }}>
          <span className="postDate" style={{ color: "rgb(85, 79, 79, 0.8)" }}>{date}</span>
          {isAuthenticated&&<img
            style={{ height: "20px", marginLeft: 'auto', cursor: "pointer" }}
            src={require("../images/bin.png")}
            alt=""
            onClick={handleDelete}
          />}
        </div>
        </>
      
    </div>
  );
}

export default Post;
