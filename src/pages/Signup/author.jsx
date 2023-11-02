import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header/header.jsx";
import "./author.css";
import dotenv from 'dotenv';
import { Link } from "react-router-dom";
dotenv.config();
function Author({updateIsAuthenticated}) {
    const history=useNavigate();
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [error, setError]=useState(false);
    
    const handleSubmit=async (e)=>{
        if(username==="ayushnandi" && password==="ilovesrk"){
          updateIsAuthenticated(true);  
          history("/");
            
        }else{
            setError("Incorrect username or password");
            
        }
    };
  return (
    <div className="author-page">
      <Header/>
      <div className="login-container">
        <div className="login-form">
          <form>
            <input type="text" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            {error && <p style={{color:"red"}}>{error}</p>}
            <button onClick={handleSubmit}>Login</button>
            <p>
              {/* <Link to="/signup">Don't have an account? Sign up</Link> */}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Author;