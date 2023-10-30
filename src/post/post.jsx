import './post.css'
import React from 'react';
function post(p) {
  return (
    <div className='post' style={{ '--post': '1' }}>
      <img className='postImage' src={p.imageUrl} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{p.category}</span>
          {/* <span className="postCat">Human Resource</span>
          <span className="postCat">Operations</span>
          <span className="postCat">Strategy</span>
          <span className="postCat">Finance</span> */}
        </div>
        <div className="postTitle">
          <span>{p.title}</span>
        </div>
        <div className="postDesc">
          <span>{p.content}</span>
        </div>
        <div className='Date'>
        <span className="postDate">{p.date}</span>
        </div>
      </div>
    </div>
  )
}

export default post
