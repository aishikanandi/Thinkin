import './post.css'
import React from 'react';
function post({date, imageUrl, category, title, content}) {
  return (
    <div className='post' style={{ '--post': '1' }}>
      <img className='postImage' src={imageUrl} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{category}</span>
          {/* <span className="postCat">Human Resource</span>
          <span className="postCat">Operations</span>
          <span className="postCat">Strategy</span>
          <span className="postCat">Finance</span> */}
        </div>
        <div className="postTitle">
          <span>{title}</span>
        </div>
        <div className="postDesc">
          <span>{content}</span>
        </div>
        <div className='Date'>
        <span className="postDate">{date}</span>
        </div>
      </div>
    </div>
  )
}

export default post
