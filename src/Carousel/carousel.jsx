import './carousel.css'

export default function carousel() {
  return (
    <div className='carousel1'>
      <div className="onlyCarousel">
      <div className="recentBlog">
    <h5>MISSED MY RECENT BLOGS?</h5>
    </div>   
<div id="Carousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#Carousel" data-slide-to="0" class="active"></li>
    <li data-target="#Carousel" data-slide-to="1"></li>
    <li data-target="#Carousel" data-slide-to="2"></li>
    <li data-target="#Carousel" data-slide-to="3"></li>
  </ol>

  <div class="carousel-inner" role="listbox">   
    <div class="item active">
      <img src="3.jpg" alt="Mountain" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim volutpat varius.</h5>
      </div>
    </div>
    <div class="item">
      <img src="2.jpg" alt="Beach"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Blog Caption</h5>
      </div>
    </div>
    <div class="item">
      <img src="3.jpg" alt="Dew"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Blog Caption</h5>
      </div>
    </div>
    <div class="item">
      <img src="2.jpg" alt="Road"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Blog Caption</h5>
      </div>
    </div>
  </div>



  <a class="left carousel-control" href="#Carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#Carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      </div>
   

<div className="cate">
<h5>CATEGORIES</h5>
</div>
<div class="articles">
  <div class="card4articles" style={{ '--cards': '5' }}>
    <div class="childArticle tech" >
      <h2>Technology</h2>
      <p>5 articles</p>
    </div>
    <div class="childArticle tech"></div>
    <div class="childArticle tech"></div>
    <div class="childArticle tech"></div>
    <div class="childArticle tech"></div>
  </div>
  <div class="card4articles" style={{ '--cards': '2' }}>
    <div class="childArticle business">
      <h2>Business</h2>
      <p>2 articles</p>
    </div>
    <div class="childArticle business"></div>
  </div>
  <div class="card4articles" style={{ '--cards': '1' }}>
    <div class="childArticle leadership">
      <h2>Leadership</h2>
      <p>1 article</p>
    </div>
  </div>
  <div class="card4articles" style={{ '--cards': '5' }}>
    <div class="childArticle philosophy">
      <h2>Moral Philosophy</h2>
      <p>5 articles</p>
    </div>
    <div class="childArticle philosophy"></div>
    <div class="childArticle philosophy"></div>
    <div class="childArticle philosophy"></div>
    <div class="childArticle philosophy"></div>
  </div>
  </div>
</div>

  )
}
