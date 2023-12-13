import React, { useState } from "react";
import "./create.css";
import Header from "../../../header/header.jsx";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create({isAuthenticated}) {
  const navigate = useNavigate();
  const [articleData, setArticleData] = useState({
    title: '',
    description: '',
    image: '',
    date: '',
    category: [] // Make sure to initialize it as an array
  });
  
  const setText = (e) => {
    const { name, value } = e.target;
  
    if (name === "cars") {
      // Handle category as an array
      setArticleData({ ...articleData, category : [value] });
    } else {
      setArticleData({ ...articleData, [name]: value });
    }
  };

  const [imgSubmitted, setImageSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/posts', articleData);
      
      // Log the response data
      console.log("Response Data:", response.data);

      navigate("/create#/create");
      setImageSubmitted(false);
    } catch (error) {
      console.error('Error posting article:', error);
    }
  };

  const handleImageChange = (e) => {
    // Check if a file has been selected
    const fileInput = document.getElementById("fileInput");

    if (fileInput && fileInput.files.length > 0) {
      setImageSubmitted(true);

      // Log the selected image
      const selectedImage = fileInput.files[0];
      console.log("Selected Image:", selectedImage);
    } else {
      setImageSubmitted(false);
    }

    setText(e);
  };
  if (!isAuthenticated) {
    navigate('/signup');
    return null; // Render nothing if not authenticated
  }

  return (
  <>
 
      {isAuthenticated&&<div className="createMain">
      <Header />
      <div className="createDiv">
        <form onSubmit={handleSubmit} className="writeForm">
          <div className="writeFormGroup flexRow">
            <div className="writeRight flexColumn">
              <input
                type="text"
                placeholder="Title"
                className="writeInput writeText"
                autoFocus={true}
                value={articleData.title}
                onChange={setText}
                name="title"
              />
              <div className="flexRow calcat">
              {imgSubmitted &&<div className="imageSelect flexColumn">
                <div className="imageSelect flexRow">
                  <label htmlFor="fileInput">Select an Image:</label>
                  <img
                    src={require("../../../images/add.png")}
                    alt=""
                    className="addImg"
                    onClick={() => document.getElementById("fileInput").click()}
                  />
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  
                  
                  </div>
                  <p style={{color: "red"}}>Image uploaded successfully!</p>
                  </div>
                }
                {!imgSubmitted && 
                <div className="imageSelect flexRow">
                  <label htmlFor="fileInput">Select an Image:</label>
                  <img
                    src={require("../../../images/add.png")}
                    alt=""
                    className="addImg"
                    onClick={() => document.getElementById("fileInput").click()}
                  />
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={handleImageChange}
                  />                  
                </div>}

                <div className="calendarDiv flexRow">
                  <label for="postDate">Select a date:</label>
                  <input type="date" name="date" value={articleData.date} id="postDate" onChange={setText} />
                </div>
                <div className="categorySelect flexRow">
                  <label for="cat"> Category:</label>
                  <select id="cat" name="cars" onChange={setText}>
                    <option value="Technology">Technology</option>
                    <option value="Economy">Economy</option>
                    <option value="Leadership">Leadership</option>
                    <option value="Moral Philosophy">Moral Philosophy</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Human Resource">Human Resource</option>
                    <option value="Operations">Operations</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Finance">Finance</option>
                    margin-left: 2%;
                  </select>
                </div>
              </div>

              <textarea
                placeholder="Tell your story..."
                type="text"
                className="writeText writeInput"
                value={articleData.description}
                onChange={setText} 
                name="description"
              ></textarea>
            </div>
          </div>

          <button type="submit" className="writeSubmit" onClick={handleSubmit}>
            Publish 
          </button>
        </form>
      </div>
    </div>}
    
    </>
);
}

export default Create;
