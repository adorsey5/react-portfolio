import profileImage from "../../assets/images/headshot.jpg";
import React from "react";

function About() {
  return (
    <section className="my-4 d-md-flex justify-content-around">
      <h1 id="about">About Me</h1>
      <img
        id="profile" //id:avatar and //id:aboutMe
        src={profileImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="headshot"
      ></img>
      <div className="m-4 text-center" id="title">
        <h2 className="fw-bold">Full Stack Developer</h2>
        <p className="fw-bold lh-lg">
          My name is Asha Dorsey and I have always had an interest in learning
          the languages of web applications. Coming from a clinical research I
          wanted to deploy new digital tools and applications to work more
          efficiently. I hope to continue learning more about the importance of
          using web application to enhance productivity, limit human error, and
          decrease waste. Building my portfolio of my work personal projects is
          what I will be showcasing on this web page. STAY TUNED FOR FUTURE
          PROJECTS!
        </p>
      </div>
    </section>
  );
}

export default About;
