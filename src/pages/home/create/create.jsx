import React, { useState } from "react";
import "./create.css";
import Header from "../../../header/header.jsx";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create({isAuthenticated}) {
  const navigate = useNavigate();
  const [imgSubmitted, setImageSubmitted] = useState(false);
  const [articleData, setArticleData] = useState({
    title: '',
    description: '',
    image: null,
    date: '',
    category: [] // Make sure to initialize it as an array
  });


  const setText = (e) => {
    const { name, value } = e.target;
    setArticleData({ ...articleData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    setArticleData({ ...articleData, image: file });
    const fileInput = document.getElementById("fileInput");

    if (fileInput && fileInput.files.length > 0) {
      setImageSubmitted(true);

      // Log the selected image
      // const selectedImage = fileInput.files[0];
      // console.log("Selected Image:", selectedImage);
    } else {
      setImageSubmitted(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", articleData.title);
      formData.append("description", articleData.description);
      formData.append("date", articleData.date);
      formData.append("category", articleData.category); // Convert array to string

      if (articleData.image) {
        formData.append("image", articleData.image);
      }

      const response = await axios.post('http://localhost:5000/api/posts', formData);

      console.log("Response Data:", response.data);

      setArticleData({
        title: '',
        description: '',
        image: null,
        date: '',
        category: [],
      });
    } catch (error) {
      console.error('Error posting article:', error);
  // console.log("Request Data:", articleData);
    }
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
                    name="image"
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
                  <select id="cat" name="category" onChange={setText}>
                    <option value="Technology">Technology</option>
                    <option value="Economy">Economy</option>
                    <option value="Leadership">Leadership</option>
                    <option value="Philosophy">Philosophy</option>
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

          <button type="submit" className="writeSubmit">
            Publish 
          </button>
        </form>
      </div>
    </div>}
    
    </>
);
}

export default Create;
