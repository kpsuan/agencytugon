import React, { useState } from 'react'
import {MdLocationOn} from "react-icons/md";
import './reviews.css'
import iconpic from '../Assets/icon.jpg'
import Date from '../Feedbacks/date'
import Like from '../LikeButton/Like'
import { Comments } from '../Comments/Comments'
import Rating from '../Feedbacks/Rating'



const AddReview = () => {
  return (
    <main>
    <div className="reviews-container">
        <div className="flex-container post">
        <header className="headerPost">
            <div className="author">
                <img src={iconpic} className="icon-author" alt="logo"/>
                <div className="authorInfo">
                    <strong className='authorName'><a href="#">Demi Lovevavo</a></strong>
                    {/* <Date dateString={postData.date} /> */}
                    <span className='date'>Uploaded last May 1, 2022</span>
                </div>
            </div>
        </header>
        {/* <Date dateString={postData.date} /> */}
        <div class="rate_"><Rating/></div>

        <div className="content"> 
        <span className='content-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidt ut labore et dolore magna aliqua manufactured by ACS manufacturing corpora tionadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua manufactured by ACS manufacturing corporation
        </span>
        <a href="#" class="post-pic">
		<img src="https://www.rappler.com/tachyon/2022/02/face-to-face-classes-manila-february-9-2022-005.jpg"/>
		</a>
        <span className='action-btns'><Like/></span>
        
        <form className="commentForm">
            <strong>Add a comment</strong>
            <textarea 
                placeholder="Write comment here..." 
                value={''} 
                onChange={''}
                onInvalid={''}
                required
            />
            <footer>
                <button type="submit" disabled={''}>Submit</button>
            </footer>
        </form>
        
        <span className='action-btns'><Comments/></span>
        </div>

      </div>
    </div>
  </main>
  )
}

export default AddReview