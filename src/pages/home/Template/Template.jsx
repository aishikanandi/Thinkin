import '../pages.css'
import Header from '../../../header/header.jsx';
import Post from '../../../post/post.jsx';
import {useState} from 'react';
import {BASE_URL} from '../single/helper.js'

import React from 'react';
function Marketing({posts, cate, isAuthenticated}) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  if(!posts||!(posts.some(p => p.category[0] === cate))){
    return (
      <div style={{minHeight: "120vh"}}>
        <Header/>
        
        <div className="noPosts">
          <h5 className="pageTitle">{cate.toUpperCase()}</h5>
           <br />
            <img class="gif" src={require("../../../images/75WF.gif")} alt="" />
            <h5 className="textNoPage">I'm still THINKIN! Come back later!</h5>
          </div>
      </div>
    )}
    
  return (
    <div className='businessPage' style={{minHeight: "120vh"}}>
        <Header/>

        <h5 className="pageTitle">{cate}</h5>
        <div className="pagePosts">
        {posts.map((p, index) => {
          if (p.category[0] === cate) {
            return (
              <div className='postLink'>
                <Post
                  date={p.date.slice(0,10)}
                  imageUrl={p.image}
                  category={p.category[0][0].toUpperCase()+p.category[0].slice(1)}
                  title={p.title}
                  content={p.description}
                  id={p._id}
                  onLoad={handleImageLoad}
                  isAuthenticated={isAuthenticated}
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
