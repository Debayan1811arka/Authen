import React from 'react'
import "./Footer.css"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Debayan</h4>
            <p>© {year} Debayan All rights reserved</p>
            <p className="d-flex">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Build responsive websites with HTML, CSS, JavaScript, and modern frameworks.</p>
            <p>debayan@info.com</p>
            <p>Mob: +91 6578091272</p>
          </div>
          <div className="third mt-5">
            <p>About</p>
            <p>Resume</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer