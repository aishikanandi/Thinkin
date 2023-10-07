import Carousel from  '../../Carousel/carousel.jsx'
import Sidebar from '../../sidebar/sidebar.jsx';
import Header from '../../header/header.jsx';
import React from 'react';


import './home.css';
export default function home() {
  return (
    <>
    <Header/>
    <div className='cont'>
      <div className='left'>
        <Carousel className='box2'/>

      </div>
    <div className='right'>
      <Sidebar className='box2'/>
    </div>
    

    </div>

    </>
    
  )
}
