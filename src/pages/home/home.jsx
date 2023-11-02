import Carousel from  '../../Carousel/carousel.jsx'
import Sidebar from '../../sidebar/sidebar.jsx';
import Header from '../../header/header.jsx';
import {useEffect, useState} from 'react';
import React from 'react';
import axios from 'axios';

import './home.css';
export default function Home({posts, cats, isAuthenticated}) {
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
