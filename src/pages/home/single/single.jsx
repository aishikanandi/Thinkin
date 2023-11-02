import './single.css';
import React from 'react';
import Header from './../../../header/header.jsx';

function Single({title, description, date}) {
  return (
    <div>
    <Header/>
    <div className='single'>
        <img className='postIm' src="https://www.costain.com/media/599050/2-shutterstock_1254636121_web.jpg" alt="" />
        <h1 className="Title">{title}</h1>
        <div className="postDetails">
        <h5 className="postAuthor">Author : Ayush Kumar Nandi </h5>
        <h5 className="postTime">{date} </h5>
        </div>
        <p className='postContent'>{description}</p>
    </div>
    </div>
  )
}

export default Single
