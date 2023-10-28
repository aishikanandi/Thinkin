import React from "react";
import Header from "../../header/header.jsx";
import "./signup.css";
import { Link } from "react-router-dom";

function signup() {
  return (
    <div className="signup">
      <Header />
      <div className="su">
      <Link to="/author" className="card-signup 4">
      <div class="card_image">
          <img src={require("../../images/writer.png")} />
        </div>
        <div class="card_title title-black">
        <p>Author?</p>
        </div>
      </Link>
      <Link to="/" className="card-signup 4">
      <div class="card_image">
          <img src={require("../../images/open-book.png")} />
        </div>
        <div class="card_title title-black">
        <p>Reader?</p>
        </div>
      </Link>
      </div>
    </div>
  );
}

export default signup;
