import React, { useState, useRef } from "react";
import "./create.css";
import Header from "../../../header/header.jsx";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../single/helper.js';
import { api_key, cloud_name } from '../single/helper.js';
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

function Create({ isAuthenticated }) {
  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
      [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ]
  };

  var formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];

  const handleProcedureContentChange = ( content) => {
   
    setArticleData((prevData) => ({
      ...prevData,
      "description": content,
    }));
    console.log(content);
    setMandatoryFieldError(false);
  };

  const navigate = useNavigate();
  const [imgSubmitted, setImageSubmitted] = useState(false);
  const [articleData, setArticleData] = useState({
    title: '',
    description: '',
    image: null,
    date: '',
    category: []
  });
  const [notification, setNotification] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [mandatoryFieldError, setMandatoryFieldError] = useState(false);

  const setText = (event) => {
    const { name } = event.target;
    const value = event.target.value;
    setArticleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(value)
    setMandatoryFieldError(false); // Reset the error when the user types
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setArticleData({ ...articleData, image: file });
    const fileInput = document.getElementById("fileInput");

    if (fileInput && fileInput.files.length > 0) {
      setImageSubmitted(true);
    } else {
      setImageSubmitted(false);
    }
  };

  const showNotification = () => {
    setNotification(true);
    setOverlay(true);

    setTimeout(() => {
      setNotification(false);
      setOverlay(false);
    }, 3000); // Adjust the timeout duration as needed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if mandatory fields are not empty
    if (
      articleData.title === "" ||
      articleData.description === "" ||
      articleData.date === "" ||
      articleData.category.length === 0
    ) {
      setMandatoryFieldError(true);
      return; // Do not proceed with submission
    }

    try {
      const data = new FormData()
      if (articleData.image) {
        data.append("file", articleData.image);
        data.append('upload_preset', 'ml_default');
        data.append("api_key", api_key);
      }
      

      const cloudinaryResponse = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, data, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: function (e) {
    }
  })

  
      const formData = new FormData();
      formData.append("title", articleData.title);
      formData.append("description", articleData.description);
      formData.append("date", articleData.date);
      formData.append("category", articleData.category);
        formData.append("image", cloudinaryResponse.data.secure_url);

      await axios.post(`${BASE_URL}/api/posts`, formData);

      
   setArticleData({
        title: '',
        description: '',
        image: null,
        date: '',
        category: [],
      });
      setImageSubmitted(false);
      showNotification();
      setTimeout(() => {
        navigate('/');
        window.location.reload();
      }, 2000); // Wait for 2 seconds
    } catch (error) {
      console.error('Error posting article:', error);
    }

      if (!isAuthenticated) {
    navigate('/author');
    return null;
  }

  };


  return (
    <>
     {isAuthenticated&& 
      <div className="createMain">
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
                  onInput={setText}
                  name="title"
                />
                {mandatoryFieldError && articleData.title === "" && (
                  <p style={{ color: "red" }}>Mandatory field!</p>
                )}

                <div className="flexRow calcat">
                  {imgSubmitted && (
                    <div className="imageSelect flexColumn">
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
                      <p style={{ color: "green" }}>Image uploaded successfully!</p>
                    </div>
                  )}
                  {!imgSubmitted && (
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
                    </div>
                  )}
                <div className="mandate-date">
                  <div className="calendarDiv flexRow">
                    <label htmlFor="postDate">Select a date:</label>
                    <input
                      type="date"
                      name="date"
                      value={articleData.date}
                      id="postDate"
                      onChange={setText}
                    />
                  </div>
                  {mandatoryFieldError && articleData.date === "" && (
                    <p style={{ color: "red" }}>Mandatory field!</p>
                  )}
                  </div>
                  <div className="mandate-date">
                  <div className="categorySelect flexRow">
                    <label htmlFor="cat"> Category:</label>
                    <select id="cat" name="category"
                     onChange={setText}
                     >
                      <option value="">Select Category</option>
                      <option value="Technology">Technology</option>
                      <option value="Economy">Economy</option>
                      <option value="Leadership">Leadership</option>
                      <option value="Philosophy">Philosophy</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Human Resource">Human Resource</option>
                      <option value="Operations">Operations</option>
                      <option value="Strategy">Strategy</option>
                      <option value="Finance">Finance</option>
                    </select>
                  </div>
                  
                  {mandatoryFieldError && articleData.category.length === 0 && (
                    <p style={{ color: "red" }}>Mandatory field!</p>
                  )}
                </div>
                </div>

          
                 
                
              </div>
            </div>
            <ReactQuill
  theme="snow"
  modules={modules}
  formats={formats}
  placeholder="write your content ...."
  onChange={handleProcedureContentChange}
  style={{
    height: "400px"
  }}
  
/>      
{mandatoryFieldError && articleData.description === "" && (
                  <p style={{ color: "red" }}>Mandatory field!</p>
                )}
            <button type="submit" className="writeSubmit">
              Publish
            </button>

            {overlay && <div className="overlay"></div>}
            {notification && (
              <div className="popupNotification">
                <p>Post submitted successfully!</p>
              </div>
            )}
          </form>
        </div>
      </div>
         } 
    </>
  );
}

export default Create;
