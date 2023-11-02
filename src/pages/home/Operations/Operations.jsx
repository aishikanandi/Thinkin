import React from 'react'
import '../pages.css'
import Header from '../../../header/header.jsx';
import Post from '../../../post/post.jsx';
import {Link} from 'react-router-dom';
function Operations({posts}) {
  if(!posts||!(posts.some(p => p.category[0] === 'operations'))){
    return (
      <div className='oPage'>
        <Header/>
        
        <div className="pagePosts noPosts">
          <h5 className="pageTitle">Operations</h5>
           <br />
            <img class="gif" src={require("../../../images/75WF.gif")} alt="" />
            <h5 className="textNoPage">I'm still THINKIN! Come back later!</h5>
          </div>
      </div>
    )
  }return(
    <div className='businessPage'>
          <Header/>
          <h5 className="pageTitle">Operations</h5>
          <div className="pagePosts">
          {posts.map((p, index) => {
            if (p.category[0] === 'operations') {
               
              return (
                <Link to={`/${p.title}`} className='postLink'>
                  <Post
                    date={p.date.slice(0,10)}
                    imageUrl="https://www.costain.com/media/599050/2-shutterstock_1254636121_web.jpg"
                    category={p.category[0][0].toUpperCase()+p.category[0].slice(1)}
                    title={p.title}
                    content={p.description}
                  />
                </Link>
              );
            }
          })}
      </div>
      </div>)
  }

export default Operations
