import './single.css'
import React from 'react'

function single(s) {
  return (
    <div className='single'>
        <img className='postIm' src={s.imageUrl} alt="" />
        <h1>{s.title}</h1>
        <div className="postDetails">
        <h5 className="postAuthor">Author : Ayush Kumar Nandi </h5>
        <h5 className="postTime">1 hour ago </h5>
        </div>
        <p className='postContent'>{s.content}</p>
    </div>
  )
}

export default single
