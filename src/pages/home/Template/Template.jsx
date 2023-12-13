import '../pages.css'
import Header from '../../../header/header.jsx';
import Post from '../../../post/post.jsx';

import React from 'react';
function Marketing({posts, cate}) {
  console.log(posts.filter(p => p.category[0] === cate))
  if(!posts||!(posts.some(p => p.category[0] === cate))){
    return (
      <div>
        <Header/>
        
        <div className="pagePosts noPosts">
          <h5 className="pageTitle">{cate.toUpperCase()}</h5>
           <br />
            <img class="gif" src={require("../../../images/75WF.gif")} alt="" />
            <h5 className="textNoPage">I'm still THINKIN! Come back later!</h5>
          </div>
      </div>
    )}
    
  return (
    <div className='businessPage'>
        <Header/>
        <h5 className="pageTitle">{cate}</h5>
        <div className="pagePosts">
        {posts.map((p, index) => {
          if (p.category[0] === cate) {
            return (
              <div className='postLink'>
                <Post
                  date={p.date.slice(0,10)}
                  imageUrl={p.image.data.data}
                  category={p.category[0][0].toUpperCase()+p.category[0].slice(1)}
                  title={p.title}
                  content={p.description}
                  id={p._id}
                />
              </div>
            );
          }
        })}
        </div>
    </div>
  )
}

export default Marketing
