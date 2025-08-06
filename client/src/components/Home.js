import React from 'react';
import "./Home.css";




const Home = () => {
  return (
    <>
     <div className="container home_container">
      <div className="home_innerdiv">
        <div className="left_div">
          <h2>Welcome to <span style={{color:"#007bff"}}>My Portfolio</span></h2>
          <p style={{color:"#666",letterSpacing:".5px",marginTop:2}}>I am a Fullstack Developer with a strong foundation in both front-end and back-end technologies, 
            specializing in building dynamic, responsive web applications. With expertise in JavaScript, React, Node.js, 
            and databases like MongoDB and PostgreSQL, I craft scalable solutions from concept to deployment. 
            I am passionate about clean code, intuitive UI/UX, and continuous learning. My portfolio showcases projects that 
            integrate APIs, implement authentication, and utilize CI/CD pipelines for streamlined development. 
            I thrive in collaborative environments, value agile methodologies, and enjoy solving complex problems. Whether 
            building a sleek frontend or optimizing backend performance, I aim to deliver robust, user-centric digital experiences.

          </p>
          
        </div>
        <div className="right_div">
          <img src="logo1.png" alt="" />
        </div>
      </div>
     </div>
    </>
  )
}

export default Home
