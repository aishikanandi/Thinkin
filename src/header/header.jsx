import './header.css'
import './header.js'
import Typed from "react-typed";
import {Link} from "react-router-dom"

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
          <li><a href="#"><Link to="/technology" className='Link header'>Technology</Link></a></li>
          <li><a href="#"><Link to="/business" className='Link header'>Business <span>&#9660;</span></Link></a>
            <ul class="dropdown">
              <li><a href="#"><Link to="/marketing" className='Link header'>Marketing</Link></a></li>
              <li><a href="#"><Link to="/hr" className='Link header'>Human Resource</Link></a></li>
              <li><a href="#"><Link to="/operations" className='Link header'>Operations</Link></a></li>
              <li><a href="#"><Link to="/strategy" className='Link header'>Strategy</Link></a></li>
              <li><a href="#"><Link to="/finance" className='Link header'>Finance</Link></a></li>
            </ul>
          </li>
          <li><a href="#"><Link to="/economy" className='Link header'>Economy</Link></a></li>
          <li><a href="#"><Link to="/leadership" className='Link header'>Leadership</Link></a></li>
          <li><a href="#"><Link to="/moral-philosophy" className='Link header'>Moral Philosophy</Link></a></li>
        </ul>
      </nav>
      </div>
    </div>
  )
}

