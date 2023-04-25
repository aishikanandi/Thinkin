import './post.css'

function post() {
  return (
    <div className='post' style={{ '--post': '1' }}>
      <img className='postImage' src="business.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Marketing</span>
          {/* <span className="postCat">Human Resource</span>
          <span className="postCat">Operations</span>
          <span className="postCat">Strategy</span>
          <span className="postCat">Finance</span> */}
        </div>
        <div className="postTitle">
          <span>Title</span>
        </div>
        <div className="postDesc">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim volutpat varius. Sed dictum ipsum diam, tempor pharetra erat blandit ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam sed feugiat metus, non luctus mauris. Aenean velit lectus, vehicula quis gravida sed, consectetur nec nulla. Morbi ultricies tortor ante, a placerat elit sodales in. Mauris congue, tortor ac auctor gravida, lorem justo elementum nibh, a placerat orci erat nec massa. Nunc orci lacus, commodo eget nulla ut, vestibulum pellentesque nisi. Integer in gravida massa, pellentesque finibus sapien.</span>
        </div>
        <div className='Date'>
        <span className="postDate">1 hour ago</span>
        </div>
      </div>
    </div>
  )
}

export default post
