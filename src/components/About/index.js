import profileImage from "../../assets/images/headshot.jpg";
import React from "react";

function About() {
  return (
    <section className="mx-auto d-md-inline-flex justify-content-between">
      <h1 id="about">About Me</h1>
      <img
        id="profile"
        src={profileImage}
        className="my-2 img-thumbnail"
        style={{ width: "100%" }}
        alt="headshot"
      ></img>
      <div className="m-4 text-center" id="title">
        <h2 className="fw-bolder text-capitalize text-white bg-dark">
          Full Stack Developer
        </h2>
        <p className="fw-bold lh-lg fs-5">
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
