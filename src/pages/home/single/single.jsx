import './single.css';
import React from 'react';
import Header from './../../../header/header.jsx';
import CommentCard from './Commentcard.jsx';

function Single({title, description, date, imageUrl, comments, id}) {
  const formattedDescription = description.replace(/\r\n/g, '<br>');
  
  return (
    <div>
    <Header/>
    <>
    <div className='single'>
        <img className='postIm' src={imageUrl} alt="" />
        <h1 className="Title">{title}</h1>
        <div className="postDetails">
        <h3 className="postAuthor">Author : Ayush Kumar Nandi </h3>
        <h4 className="postTime">{date} </h4>
        </div>
        <p className='postContent' dangerouslySetInnerHTML={{ __html: formattedDescription }}></p>
    </div>
    
    <div className="forum-comments">
      <CommentCard comments={comments} id={id}/>
    </div>
    </>
    </div>
  )
}

export default Single
