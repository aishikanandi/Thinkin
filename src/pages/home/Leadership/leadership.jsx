import React from 'react'
import '../pages.css'
import Header from '../../../header/header.jsx';
//import Post from '../../../post/post.jsx';
function leadership() {
  return (
    <div className='lsPage'>
      <Header/>
      <div className="pagePosts noPosts">
        <h5 className="pageTitle">Leadership</h5>
         <br />
          <img class="gif" src={require("../../../images/75WF.gif")} alt="" />
          <h5 className="textNoPage">I'm still THINKIN! Come back later!</h5>
        </div>
    </div>
  )
}

export default leadership
