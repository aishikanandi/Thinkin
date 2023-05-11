import React from 'react'
import '../pages.css'
import Header from '../../../header/header.jsx';
import Post from '../../../post/post.jsx';
function HR() {
  return (
    <div className='hrPage'>
      <Header/>
        <div className="pagePosts noPosts">
          <p class="textNoPage">I'm still THINKIN! Come back later!</p>
             <br></br>
          <img class="gif" src="75WF.gif" alt="" />
        </div>
    </div>
  )
}

export default HR
