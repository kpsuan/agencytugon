import React, { useState } from 'react'
import {MdLocationOn} from "react-icons/md";
import './about.css'

const About = () => {
  return (
    <main>
    <div className="wrapper">
      <div className="about-title">About Us</div>
      <div className="flex-container description">
        <div className='desc-text'>The Department of Education is the executive department of the Philippine government responsible for ensuring access to, promoting equity in, and improving the quality of basic education. It is the main agency tasked to manage and govern the Philippine system of basic education.</div>
        <div className='agency-loc'> <MdLocationOn className='icon-loc'/><a href="https://www.google.com/maps/place/DepEd+Iloilo+City+SDO/">ILOILO</a>, <a href="https://www.google.com/maps/place/Philippines/">PHILIPPINES</a></div>
      </div>
      <div class="photos-section">
				<span className='title'>Photos</span>
			</div>
			  <div className="photos-card">
        <ul>
          <li><img src= "https://picsum.photos/200" alt="Sample photo"/></li>
          <li><img src= "https://picsum.photos/200" alt="Sample photo"/></li>
          <li><img src= "https://picsum.photos/200" alt="Sample photo"/></li>
          <li><img src= "https://picsum.photos/200" alt="Sample photo"/></li>
          <li><img src= "https://picsum.photos/200" alt="Sample photo"/></li>
          <li><img src= "https://picsum.photos/200" alt="Sample photo"/></li>
          <li><img src= "https://picsum.photos/200" alt="Sample photo"/></li>
          <li><img src= "https://picsum.photos/200" alt="Sample photo"/></li>
          <li><img src= "https://picsum.photos/200" alt="Sample photo"/></li>
        </ul>
			  </div>
    </div>
  </main>
  )
}

export default About