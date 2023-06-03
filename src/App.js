import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/Sidebar/About'
import AddReview from './Components/Feedbacks/AddReview'
import Reviews from './Components/Feedbacks/Reviews'



const App = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <AddReview/>
    <Reviews/>
  {/*<Home/>
    <Main/>
  <Footer/> */}
    </>
  )
}

export default App