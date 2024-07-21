import "./topbar.css";
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticated } from '../redux/authSlice';

export function Topbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setAuthenticated(false));
    navigate('/');  
  };

  return (
    <div className="topbar">
      <nav role="navigation" className="primary-navigation1" style={{ fontFamily: "'Verdana', sans-serif" }}>
        <ul>
          <li><Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>About</Link></li>
          {isAuthenticated && (
            <>
              <li><Link to="/create" style={{ color: 'black', textDecoration: 'none' }}>New Post</Link></li>
              <li onClick={handleLogout} style={{ cursor: 'pointer', color: 'black', textDecoration: 'none' }}>Logout</li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Topbar;
