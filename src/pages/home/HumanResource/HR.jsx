import React from 'react'
import '../pages.css'
import Header from '../../../header/header.jsx';
//import Post from '../../../post/post.jsx';
function HR() {
  return (
    <div className='hrPage'>
      <Header/>

      <div className="pagePosts noPosts">
        <h5 className="pageTitle">Human Resource</h5>
         <br />
          <img class="gif" src={require("../../../images/75WF.gif")} alt="" />
          <h5 className="textNoPage">I'm still THINKIN! Come back later!</h5>
        </div>
    </div>
  )
}

export default HR
