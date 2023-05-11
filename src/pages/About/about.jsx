import React from 'react'
import Header from '../../header/header.jsx';
import './about.css'
function about() {
  return (
    <div className='about'>
      <Header />
      <p className="aboutContent postContent">
      Welcome to Thinkin Space, which provides insightful and thought-provoking managerial blogs for those looking to enhance their leadership skills in order to help you to be competitive and enthusiatic in the ever-changing business landscape. The vision of Thinkin space is to kee readers engaged and motivated. I at Thinkin, try to share my expertise proposition on various management topics, including organizational behavior, strategic planning, team building, and more. Whether you are a seasoned manager or just starting, our articles are designed to provide practical insights and actionable advice to help you become a more effective leader.  Not everybody has lost interest in reading. While you are still Thinkin, I believe that continuous learning and development are critical for success in any field, especially in management. That's what keeps me driven to spend time in some quality research to provide readers with high-quality content that not only informs but also inspires and motivates them to continue to look further for the related aspects. Through Thinkin, I am pretty confident that you'll find this space a valuable resource. Jovial learning & keep Thinkin!
      </p>
      <img className="writingGif" src="writing.gif" alt="" />
    </div>
  )
}

export default about
