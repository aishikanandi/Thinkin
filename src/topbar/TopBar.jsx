import "./topbar.css";
import React from 'react'
import {Link} from "react-router-dom"

export function Topbar() {
  return (
    <div className="topbar">
        <nav role="navigation" class="primary-navigation1">
          <ul>
            <li><Link to="/" style={{ color: 'black', textDecoration: 'none'}}>Home</Link></li>
            <li><Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>About</Link></li>
            <li><Link to="/" style={{ color: 'black', textDecoration: 'none'}}>Contact</Link></li>
          </ul>
        </nav>
       
    </div>

  )
}
export var active;