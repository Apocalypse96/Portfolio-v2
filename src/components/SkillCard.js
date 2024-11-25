import React from 'react';
import "./SkillCardStyle.css";
import { DiGit } from "react-icons/di";
import { SiVisualstudiocode, SiReact, SiReactrouter, SiSpringboot, SiHibernate, SiMongodb, SiMysql } from "react-icons/si"; 
import { TbBrandCss3, TbBrandHtml5, TbBrandPython, TbBrandJavascript } from "react-icons/tb"; 
import { FaJava } from "react-icons/fa";

export default function SkillCard({ id }) {
  return (
    <div className="skill-container" id={id}>
      <div className="skill-header">My Skills</div>
      <div className="skill-box">
        <h2>Languages</h2>
        <div className="skillset">
          <abbr title='Java'><FaJava className='techLogo' /></abbr>
          <abbr title='Python'><TbBrandPython className='techLogo' /></abbr>
          <abbr title='JavaScript'><TbBrandJavascript className='techLogo' /></abbr>
          <abbr title='HTML 5'><TbBrandHtml5 className='techLogo' /></abbr>
        </div>
      </div>
      <div className="skill-box">
        <h2>Libraries and Frameworks</h2>
        <div className="skillset">
          <abbr title='ReactJS'><SiReact className='techLogo' /></abbr>
          <abbr title='CSS 3'><TbBrandCss3 className='techLogo' /></abbr>
          <abbr title='Git/Github'><DiGit className='techLogo' /></abbr>
          <abbr title='React Router'><SiReactrouter className='techLogo' /></abbr>
          <abbr title='Spring Boot'><SiSpringboot className='techLogo' /></abbr>
          <abbr title='Hibernate'><SiHibernate className='techLogo' /></abbr>
        </div>
      </div>
      <div className="skill-box">
        <h2>Tools & Platforms</h2>
        <div className="skillset">
          <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo' /></abbr>
          <abbr title='MongoDB'><SiMongodb className='techLogo' /></abbr>
          <abbr title='MySQL'><SiMysql className='techLogo' /></abbr>
        </div>
      </div>
    </div>
  );
}
