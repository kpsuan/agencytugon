import React, { useState } from 'react'
import './header.css'

const Header = () => {
  return (
    <main>
    <div className="profile-upper">
    <div className="profile-banner-image">
      <img src="https://www.deped.gov.ph/wp-content/uploads/MATATAG-Cover-Photo.jpg" alt="Banner image"/>
    </div>
    <div className="profile-d">
      <div className="profile-pic">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Department_of_Education.svg"/>
      </div>
      <div className="u-name">Department of Education (DEPED) Regional Office VI</div>
      <div class="tb" id="m-btns">
        <div class="td">
        </div>
        <div class="td">
        </div>
      </div>
    </div>
  </div>
  </main>
  )
}

export default Header