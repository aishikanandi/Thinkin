import React, { useState } from "react";
import "./create.css";
import Header from "../../../header/header.jsx";

//import Post from '../../../post/post.jsx';
function Create() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="createMain">
      <Header />
      <div className="createDiv">
        <form action="" className="writeForm">
          <div className="writeFormGroup flexRow">
            <div className="writeRight flexColumn">
              <input
                type="text"
                placeholder="Title"
                className="writeInput writeText"
                autoFocus={true}
              />
              <div className="flexRow calcat">
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
                  />
                </div>

                <div className="calendarDiv flexRow">
                  <label for="postDate">Select a date:</label>
                  <input type="date" name="postDate" id="postDate" />
                </div>
                <div className="categorySelect flexRow">
                  <label for="cat"> Category:</label>
                  <select id="cat" name="cars">
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
              ></textarea>
            </div>
          </div>

          <button className="writeSubmit">Publish</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
