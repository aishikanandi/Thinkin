import "./topbar.css";
import React from 'react'
import {Link} from "react-router-dom"

export function Topbar({isAuthenticated} ) {
  return (
    <div className="topbar">
        <nav role="navigation" class="primary-navigation1" style={{fontFamily: "'Verdana', sans-serif"}}>
          <ul>
            <li><Link to="/" style={{ color: 'black', textDecoration: 'none'}}>Home</Link></li>
            <li><Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>About</Link></li>
            {isAuthenticated && (
          
            <li><Link to="/create" style={{ color: 'black', textDecoration: 'none'}}>New Post</Link></li>
          
         )}
          </ul>
        </nav>
       
    </div>

  )
}
export default Topbar;