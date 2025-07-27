import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
    <div className="container mb3 about_container" style={{minHeight:"100%"}}>
      <div className="container main_container d-flex justify-contest-around flex-wrap">
        <div className="left_container mt-5" style={{width:500}}>
          <h2>Meet Debayan Pal</h2>
          <p style={{color:"#666", letterSpacing:".5px", marginTop:2, lineHeight:2}}>
            I am a Fullstack Developer with a strong foundation in both front-end and back-end technologies, 
            specializing in building dynamic, responsive web applications. With expertise in JavaScript, React, Node.js, 
            and databases like MongoDB and PostgreSQL, I craft scalable solutions from concept to deployment. 
            I am passionate about clean code, intuitive UI/UX, and continuous learning. My portfolio showcases projects that 
            integrate APIs, implement authentication, and utilize CI/CD pipelines for streamlined development. 
            I thrive in collaborative environments, value agile methodologies, and enjoy solving complex problems. Whether 
            building a sleek frontend or optimizing backend performance, I aim to deliver robust, user-centric digital experiences.

          </p>
          </div>
          <div className="right_container mt-3">
            <img src="dp.jpeg" alt=""/>

        </div>
        </div>
        </div>
        </>
  )
}

export default About