import '../styles/landingPageStyles.css'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
          {/* Image here */}
          <a href="default.asp">Home</a>
          <a href="news.asp">News</a>
          <a href="contact.asp">Contact</a>
          <a href="about.asp">About</a>
        </div>
    </div>
  )
}

export default Navbar