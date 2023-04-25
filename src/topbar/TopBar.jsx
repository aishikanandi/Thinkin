import "./topbar.css";
import React from 'react'

export default function topbar() {
  return (
    <div className="topbar">
        <nav role="navigation" class="primary-navigation1">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
    </div>
  )
}
