import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuid } from "uuid";
import { config } from "react-spring";

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuid(),
      content: <img style={{ width: "100%", height: "100%" }} src={require("../images/p3.jpeg")} alt="1" />
    },
    {
      key: uuid(),
      content: <img style={{ width: "100%", height: "100%" }} src={require("../images/p4.jpeg")} alt="3" />
    },
    {
      key: uuid(),
      content: <img style={{ width: "100%", height: "100%" }} src={require("../images/p2.jpeg")} alt="4" />
    },
    {
      key: uuid(),
      content: <img style={{ width: "100%", height: "100%" }} src={require("../images/p1.jpeg")} alt="5" />
    }
  ];

  componentDidMount() {
    // Set up automatic rotation
    this.interval = setInterval(() => {
      this.setState({ goToSlide: (this.state.goToSlide + 1) % this.slides.length });
    }, 3000); // Adjust the interval duration as needed (in milliseconds)
  }

  componentWillUnmount() {
    // Clear the interval to avoid memory leaks
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={{ width: "80%", height: "40vh", margin: "0 auto", paddingBottom:"7%", textAlign: "center", alignItems: "center", justifyContent:"center" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          
        </div>
      </div>
    );
  }
}
