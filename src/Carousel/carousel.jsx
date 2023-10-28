import './carousel.css'
import {Link} from "react-router-dom"
import React from 'react';
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
      <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202303/upi-sixteen_nine.jpg" alt="Mountain" />
      <Link to="/eco1" className='Link'><div class="carousel-caption d-none d-md-block">
        <h5>UPI - Unified Payment Interface</h5>
        <h6 className='ccaption'>“Bhaiya ji ye kya, 3 rupay change nahi hai kya? Aap humesha candy de dete ho” :(
Readers! You must have come across this scenario very well during your childhood. Feeling nostalgic about your childhood, right? :D
 
Today’s discussion is based on similar lines.</h6>
      </div></Link>
    </div>
    <div class="item">
      <img src="https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/04/11111857/f33e3a56b71ea9375b188e0bf5f8aa21.jpg" alt="Beach"/>
      <Link to="/eco2" className='Link'><div class="carousel-caption d-none d-md-block">
        <h5>Foreign Payment Investment</h5>
        <h6 className="ccaption">Sensex ki aakramak ballebaazi ne Inidan stock-market ki team ko nayi record dilayi. Abb market me iss player ka mool badh gaya hai. Khareeddar hain FPI!!

Relax! If you couldn't comprehend, let me spill the beans, it is lately seen that the Indian stock market is heading in an entirely different direction when compared to the other stock market. India is the only large market that has crossed previous record highs despite rising inflation.

A very notable reason that is seen from the latest updates on inflation is that the US has started offering a little bit of relief and the Federal Reserve has given some breathing space to reduce inflation due to which investors are now able to invest more amount in our country. This is because the investors do appreciate the fact that the most returns can be obtained from the Indian market only.
It was also seen that when the inflation rates were very high in the year 2021 the Foreign Portfolio Investors (FPI) had pulled out approximately 3 lakhs crore from the Indian market but with relief, on the inflation rate from the Federal Reserves, the foreign portfolio investors as per the current survey tell that there has been a hefty injection of around 3000 crores into Indian stock market and if inflation rates continue to remain steady then FPI is expected to invest more in Indian equities. India is now being seen as a new investment terminus.

</h6>
      </div></Link>
    </div>
    <div class="item">
      <img src="https://www.marketing91.com/wp-content/uploads/2022/09/Criticism-of-the-AIDA-model-1024x585.jpg" alt="Dew"/>
      <Link to="/mark1" className='Link'><div class="carousel-caption d-none d-md-block">
        <h5>AIDA Model</h5>
        <h6 className="ccaption">Narrative – Folks! This is something you need to read. 

You are a consumer as usual, and say you desire to purchase a new cricket bat for your upcoming cricket tournament. You are a player who pays heeds to build a long-lasting inning. Consistency is all that matters to you. A perfectionist has become a second soul for you. But now which bat would you prefer for your upcoming tournament. A long innings builder is mostly recommended for lightweight bats. Therefore, you are stuck with an image in your head. You remember Virat Kohli, your favourite cricketer uses an MRF bat, a quite lightweight bat to be precise which helps him to build his ling lasting innings. This product that you quickly recalled was the Attention towards a celebrity endorsement that you had paid while watching Kohli on your big screen. Now his long and victorious innings left a very strong impression in your mind and later that evening you had visited a sports website looking for the bat. Now, this had become your Interest and you had wished to carry it on till you get a kit of his kind. After viewing their official website, the business had suggested you some interesting promotional offers along with the bat, which kept the Desire sustained in you. The very next day you go to the store and purchase a brand new MRF bat for yourself. This was your Action for procuring* the bat.

Bingo! You’d be surprised to know that you had just completed the famous AIDA model under the hierarchy of effects model.

Explanation - Folks! The below might help you in your note-making.</h6>
      </div></Link>
    </div>
    <div class="item">
      <img src="https://static.wixstatic.com/media/856e46_7d8c71ef767b45f68cc08d95695a0439~mv2.jpg/v1/fill/w_640,h_550,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/856e46_7d8c71ef767b45f68cc08d95695a0439~mv2.jpg" alt="Road"/>
      <Link to="/mark2" className='Link'><div class="carousel-caption d-none d-md-block">
        <h5>Holistic Marketing</h5>
        <h6 className="ccaption"> Holistic marketing, by name implies that a business considering all the departments working together for the relevant marketing activities with a shared goal.
          Components of holistic marketing:</h6>
      </div></Link>
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
  <div class="card4articles" style={{ '--cards': '4' }}>
  <Link to="/technology" className='Link'><div class="childArticle tech" >
      <h2>Technology</h2>
      <p>4 articles</p>
    </div></Link>
    <div class="childArticle tech"></div>
    <div class="childArticle tech"></div>
    <div class="childArticle tech"></div>

  </div>
  <div class="card4articles" style={{ '--cards': '3' }}>
  <Link to="/business" className='Link'><div class="childArticle business">
      <h2>Business</h2>
      <p>3 articles</p>
    </div></Link>
    <div class="childArticle business"></div>
    <div class="childArticle business"></div>
  </div>
  <div class="card4articles" style={{ '--cards': '4' }}>
  <Link to="/economy" className='Link'><div class="childArticle economy" >
      <h2>Economy</h2>
      <p>4 articles</p>
    </div></Link>
    <div class="childArticle economy"></div>
    <div class="childArticle economy"></div>
    <div class="childArticle economy"></div>

  </div>
  <div class="card4articles" style={{ '--cards': '1' }}>
  <Link to="/leadership" className='Link'><div class="childArticle leadership">
      <h2>Leadership</h2>
      <p>1 article</p>
    </div></Link>
  </div>
  <div class="card4articles" style={{ '--cards': '1' }}>
  <Link to="/moral-philosophy" className='Link'><div class="childArticle philosophy" >
      <h2>Moral Philosophy</h2>
      <p>1 article</p>
    </div></Link>
  </div>
  </div>
</div>

  )
}
