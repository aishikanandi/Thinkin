import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.AUTHOR_PASSWORD)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);