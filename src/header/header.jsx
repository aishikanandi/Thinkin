import './header.css'
import './header.js'
import Typed from "react-typed";

export default function header() {

  return (
    <div className='bg'>
      <div className='logo'>
        <h1>THINKIN</h1>
      </div>
      <div className='Type-writer'>
      <Typed
      strings={[
            "Like a leader",
            "Like an entrepreneur",
            "Like a philosopher",
          ]}
          typeSpeed={75}
          backSpeed={75}
          loop
        />
      </div>
      <div className='Navigation'>
      <nav role="navigation" class="primary-navigation">
        <ul>
          <li><a href="#">Technology</a></li>
          <li><a href="#">Business <span>&#9660;</span></a>
            <ul class="dropdown">
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Human Resource</a></li>
              <li><a href="#">Operations</a></li>
              <li><a href="#">Strategy</a></li>
              <li><a href="#">Finance</a></li>
            </ul>
          </li>
          <li><a href="#">Leadership</a></li>
          <li><a href="#">Moral Philosophy</a></li>
        </ul>
      </nav>
      </div>
    </div>
  )
}

