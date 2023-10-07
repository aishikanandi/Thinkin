import './sidebar.css'
import React from 'react';

export default function sidebar() {
  return (
    <div className='sideBar'>
        <div className="sidebarItem">
            <div className='author'>
                <span className="sidebarTitle">
                    AUTHOR
                </span>
            <br />
            <img className='photo' src="AKN.jpeg" alt="" />
            <br />
            <span className="sidebarTitle name">
                    Ayush Kumar Nandi
                </span><br />
            <span className='words'>
            Passionate about leadership ideology.</span>
            <br />
            <span className='words'> Ignite people to find their passion.</span>
            <br />
            <span className='words'>  #BePassionate
            </span>
            <br />
            </div>
        </div>
        <div className="sidebarItem">
        <div className='cardTitle'>
                    MY GALLERY
                </div>
            <div className='card'>
                
                <div className='gallery'>
                    <div className='shrink'>
                        <img className='photography' src="p3.jpeg" alt="" />
                    </div>
                    <div className='shrink'>
                        <img className='photography' src="p4.jpeg" alt="" />
                    </div>
                    <div className='shrink'>
                        <img className='photography' src="p1.jpeg" alt="" />
                    </div>
                    <div className='shrink'>
                        <img className='photography' src="p2.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
