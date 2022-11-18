import '../styles/landingPageStyles.css'
import React from 'react'
import logo from '../media/frame_2.png'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div>
          <img src={logo} className="logo" alt="FinTrackr Logo" />
          {/* Image here */}
        </div>
        <></>
        <div className="flex2">
          <a href="#">Home</a>
          {/* <a href="news.asp">News</a> */}
          <a href="#">Contact</a>
          <a href="#">About</a>
        </div>
        <></>
        <button className="loginbtn">Login</button>
      </div>
    </div>
  )
}

export default Navbar