import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">About
    <h2>About Me</h2>
    <p>The number of my scars are the number of my victory, that's why my praise can never be the same as yours</p>
    <img src={image} alt="I made this" />
  </div>;
}

export default About;
