import './business.css'
// import TopBar from '../topbar/Topbar.jsx';
// import Footer from '../../src/footer/footer.jsx';
import Header from '../../../header/header.jsx';
import Post from '../../../post/post.jsx';
function business() {
  return (
    <div className='businessPage'>
        <Header/>
        <div className="businessPosts">
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
  )
}

export default business
