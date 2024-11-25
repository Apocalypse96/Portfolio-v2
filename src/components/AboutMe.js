import React from "react";
import "./AboutMeStyle.css";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>Hey there, 👋</h3>
        I'm <span>Aayush</span>, a second-year undergrad at <span>Scaler School of Technology, Bengaluru</span>. I specialize in building websites that prioritize responsiveness, accessibility, and aesthetics. While I started my journey in <span>frontend development,</span> I've discovered a passion for <span>backend technologies</span> and thrive on the challenges of working with databases, servers, and APIs. I love the challenge of building efficient and scalable backend systems.
        <br /> <br />
        I'm always eager for <span>new opportunities</span> to create awesome software solutions. Let’s team up and craft something amazing.
        <br /> <br />
        Beyond coding, you'll often find me hanging out with my friends on trips, exploring new places and making memories. I also love watching anime—it’s my go-to for unwinding and getting lost in a creative world.
        <br /> <br />
        Want to know more about me? Feel free to <a className='resume' href="https://drive.google.com/file/d/1-5F3h6dxsufsGRkgWHBL_TGNlAgCg9GP/view" target="_blank" rel="noopener noreferrer">explore my resume.</a>
      </div>
      <div className="name">Aayush</div>
    </div>
  );
}
