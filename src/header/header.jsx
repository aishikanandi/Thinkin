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
          <li><Link to="/technology" className='Link header' style={{color: 'black'}}>Technology</Link></li>
          <li><Link to="/business" className='Link header' style={{color: 'black'}}>Business <span>&#9660;</span></Link>
            <ul class="dropdown">
              <li><Link to="/marketing" className='Link header' style={{color: 'black'}}>Marketing</Link></li>
              <li><Link to="/hr" className='Link header' style={{color: 'black'}}>Human Resource</Link></li>
              <li><Link to="/operations" className='Link header' style={{color: 'black'}}>Operations</Link></li>
              <li><Link to="/strategy" className='Link header' style={{color: 'black'}}>Strategy</Link></li>
              <li><Link to="/finance" className='Link header' style={{color: 'black'}}>Finance</Link></li>
            </ul>
          </li>
          <li><Link to="/economy" className='Link header' style={{color: 'black'}}>Economy</Link></li>
          <li><Link to="/leadership" className='Link header' style={{color: 'black'}}>Leadership</Link></li>
          <li><Link to="/moral-philosophy" className='Link header' style={{color: 'black'}}>Moral Philosophy</Link></li>
        </ul>
      </nav>
      </div>
    </div>
  )
}

