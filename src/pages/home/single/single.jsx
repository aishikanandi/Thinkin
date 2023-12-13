import './single.css';
import React from 'react';
import Header from './../../../header/header.jsx';

function Single({title, description, date, imageUrl}) {
  const uint8Array = new Uint8Array(imageUrl);
  const blob = new Blob([uint8Array], { type: 'image/png' });
  const imageurl = URL.createObjectURL(blob);
  const formattedDescription = description.replace(/\r\n/g, '<br>');
  return (
    <div>
    <Header/>
    <div className='single'>
        <img className='postIm' src={imageurl} alt="" />
        <h1 className="Title">{title}</h1>
        <div className="postDetails">
        <h5 className="postAuthor">Author : Ayush Kumar Nandi </h5>
        <h5 className="postTime">{date} </h5>
        </div>
        <p className='postContent' dangerouslySetInnerHTML={{ __html: formattedDescription }}></p>
    </div>
    </div>
  )
}

export default Single
