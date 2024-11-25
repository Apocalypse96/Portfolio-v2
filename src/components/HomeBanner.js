import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";
import resume from "../images/Resume.pdf";  

export default function HomeBanner({ id }) {
  return (
    <div className="home" id={id}> 
      <div className='content'>
        <div className="wrapper">
          <div className="name">Aayush Khopade</div>
          <div className="staticTitle">
            Energy Addict
          </div>
          <ul className="dynamicTitle">
            <li>+<span>Developer</span></li>
          </ul>
          <a className='btn' href={resume} download="Aayush_Khopade_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
      </div>
      <div className="mask">
        <img className='bg' src={cartoon} alt="profile" />
      </div>
    </div>
  );
}
