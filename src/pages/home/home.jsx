import Carousel from  '../../Carousel/carousel.jsx'
import Sidebar from '../../sidebar/sidebar.jsx';
import Header from '../../header/header.jsx';
import React from 'react';

import './home.css';
export default function Home({posts, cats, isAuthenticated, postsFetched}) {

  if(!postsFetched){
    return <div>
      <Header/>
    <div className="noPosts">
      <img class="gif" src={require('../../images/75WF.gif')} alt="" />
      <h5 className="textNoPage">Loading! Please Wait... </h5>
    </div>
  </div>}
  return (
    <>
    <Header/>
    <div className='cont'>
      
      <div className='left'>
        <Carousel posts={posts} cats={cats} className='box2' isAuthenticated={isAuthenticated}/>

      </div>

    <div className='right'>
      <Sidebar className='box2'/>
    </div>
    

    </div>

    </>
    
  )
}
