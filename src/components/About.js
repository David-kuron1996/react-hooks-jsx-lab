// src/components/About.js
import React from "react";
const image = "https://i.imgur.com/mV8PQxj.gif"; 

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a web developer passionate about creating cool things.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
