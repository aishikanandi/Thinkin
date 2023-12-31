import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header/header.jsx";
import "./author.css";
import dotenv from 'dotenv';
dotenv.config();

function Author({ updateIsAuthenticated }) {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lockedUntil, setLockedUntil] = useState(null);

  useEffect(() => {
    // Retrieve login attempts from local storage
    const storedAttempts = localStorage.getItem("loginAttempts");
    if (storedAttempts) {
      setLoginAttempts(Number(storedAttempts));
    }

    if (loginAttempts >= 5) {
      // Lock the user out for 24 hours
      const lockUntilTime = new Date();
      lockUntilTime.setHours(lockUntilTime.getHours() + 24);
      setLockedUntil(lockUntilTime);
    }
  }, [loginAttempts]);

  useEffect(() => {
    // Store login attempts in local storage
    localStorage.setItem("loginAttempts", loginAttempts.toString());
  }, [loginAttempts]);

  const canAttemptLogin = () => {
    if (lockedUntil) {
      const currentTime = new Date();
      return currentTime > lockedUntil;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!canAttemptLogin()) {
      setError(`Too many login attempts. Please try again after 24 hours.`);
      return;
    }

    if (username === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD) {
      updateIsAuthenticated(true);
      history("/");
    } else {
      setLoginAttempts((prevAttempts) => prevAttempts + 1);
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="author-page">
      <Header />
      <div className="login-container">
        <div className="login-form">
          <form>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button onClick={handleSubmit}>Login</button>
            <p>
                   </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Author;
