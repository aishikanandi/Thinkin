import './carousel.css'
import {Link} from "react-router-dom"
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {BASE_URL} from '../pages/home/single/helper.js'
function splitCamelCase(input) {
  if(input.length===1)return input[0].toUpperCase(); else if(input.length>1) {return input[0].toUpperCase() + input.replace(/([A-Z])/g, ' $1').trim().slice(1)};
}

export default function Carousel({ posts, cats, isAuthenticated }) {
  const [catCount, setCatCount] = useState({});
  
    
    posts = posts.slice(Math.max(posts.length - 5, 0));
    posts.reverse();

  useEffect(() => {
    setTimeout(()=>{
    const requests = cats.map((cat) => {
      return axios.get(`${BASE_URL}/api/posts?cat=${cat.name}`);
    });
    Promise.all(requests)
      .then((responses) => {
        const newCatCount = {};
        // console.log(responses)
        responses.forEach((response, index) => {
          newCatCount[cats[index].name] = response.data.length;
          // console.log(response.data)
        });

        setCatCount(newCatCount);
      })
      .catch((error) => {
        console.error(`Error fetching data for categories: ${error}`);
      });
      setTimeout(false);
    }, 1000);
  }, [cats]);
  

  
  return (
    <div className='carousel1'>
      {posts.length!==0? <div className="onlyCarousel">
      <div className="recentBlog">
    {isAuthenticated && <h5>MY POSTS</h5> } {!(isAuthenticated) &&<h5>MISSED MY RECENT BLOGS?</h5>}
    </div>   
    <div id="Carousel" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    {posts.map((post, index) => (
      <li
        key={index}
        data-target="#Carousel"
        data-slide-to={index}
        className={index === 0 ? "active" : ""}
      ></li>
    ))}
  </ol>
  {/* URL.createObjectURL(new Blob([new Uint8Array(post.image.data.data)], { type: 'image/png' })) */}
  <div className="carousel-inner" role="listbox">
    {posts.map((post, index) => (
      <div key={index} className={`item ${index === 0 ? "active" : ""}`}>
        <Link to={`/${post.title}`} className="Link">
        <img src={post.image} alt={post.title} />
        
          <div className="carousel-caption d-none d-md-block">
            <h5>{post.title}</h5>
          </div>
        </Link>
      </div>
    ))}
  </div>

  <a className="left carousel-control" href="#Carousel" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#Carousel" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

      </div>: <div className="recentBlog"><h5>MISSED MY RECENT BLOGS?</h5><div className="noPosts">
      
      <img class="gif" src={require('../images/75WF.gif')} alt="" />
      <h5 className="textNoPage">I'm still THINKIN! Come back later!</h5>
    </div></div>}
   

<div className="cate">
<h5>CATEGORIES</h5>
</div>
<div class="articles">
  {
    cats.map((cat, index)=>(
      <div key={index} class="card4articles">
      <Link to={`/${cat.name}`} className='Link'><div class={`childArticle ${cat.name}`} >
      <h2>{splitCamelCase(cat.name)}</h2>
      <p>{`${catCount[cat.name]?catCount[cat.name]:0} articles`}</p>
        </div></Link>
      </div>
    ))
  
  }
  </div>
</div>

  )
}
