import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <>
    <AnimatedCursor
      color="#5bfbdb"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#5bfbdb',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#5bfbdb'
      }}
    />
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="Course Management System"
        projectDesc="Developed a containerized web application with a Spring Boot backend and React frontend, orchestrated using Docker Compose. Implemented APIs for managing courses and their instances, leveraging an H2 database with persistent storage via Docker volumes. Deployed the application to production, providing seamless CRUD operations and an interactive user interface for efficient course management."
        projectLink="https://github.com/Apocalypse96/CourseManagement"
        deployedProjectLink="https://github.com/Apocalypse96/CourseManagement"
        projectImg={require('./images/course.webp')}
      />

      <ProjectCard
        projectTitle="Synchrovox"
        projectDesc="It is an AI-powered web app that enhances video audio by removing filler words, correcting grammar, and replacing the original audio with a synchronized AI-generated version. It uses Google Cloud APIs for transcription and audio synthesis, Azure OpenAI for text corrections, and Python libraries like moviepy for seamless video processing. Designed for creators and educators, SyncroVox ensures clean, natural audio with easy export options."
        projectLink="https://github.com/Apocalypse96/SyncroVox?tab=readme-ov-file"
        deployedProjectLink="https://syncrovox-qktbkypvgay5r8sgiammpy.streamlit.app/"
        projectImg={require('./images/synchrovox.webp')}
      />

      <ProjectCard
        className = "odd"
        projectTitle="User Portal"
        projectDesc="UserPortal is a customer management system designed for modern businesses, featuring Google OAuth authentication, WhatsApp API integration for confirmations, and admin tools for CRUD operations. Built with PHP, MySQL, and Bootstrap, it includes a dark-themed UI, webhook notifications for real-time updates, and admin logs for monitoring actions. UserPortal simplifies customer interactions with a scalable, intuitive platform."
        projectLink="https://github.com/Apocalypse96/UserPortal"
        deployedProjectLink="https://github.com/Apocalypse96/UserPortal"
        projectImg={require('./images/userportal.webp')}
      />
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;
