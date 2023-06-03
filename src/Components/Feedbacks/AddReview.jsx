import React, { useState } from 'react'
import {MdLocationOn} from "react-icons/md";
import {RiCameraLensFill} from "react-icons/ri";
import './add.css'
import iconpic from '../Assets/icon.jpg'
import Rating from '../Feedbacks/Rating'



const AddReview = () => {
  return (
    <main>
    <div className="feedback-container">
        <div class="feedback-heading">FEEDBACKS RECEIVED</div>
        <div className="flex-container add-feedback">
            <div className="add-feedback-header"><p>Leave a Review</p></div>
            <form action="#">
                <div class="content">
                    <img src={iconpic} className="logo" alt="logo"/>   
                    <div class="details">
                        <textarea placeholder="Share your thoughts about us..." spellcheck="false" required></textarea>
                    </div>
                </div>
                <div class="options"><p className='options-txt'>Add rating</p>
                    <div class="star"><Rating/>
				    </div>

                    <ul class="list">
                        <li><RiCameraLensFill className='icon'/></li>
                    </ul>
                </div>
                <button>Post</button>
            </form>
      </div>
    </div>
  </main>
  )
}

export default AddReview