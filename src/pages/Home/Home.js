import React from 'react'
import About from '../../components/About/About'
import Banner from '../../components/Banner/Banner'
import Blog from '../../components/Blog/Blog'
import GetInTouch from '../../components/GetInTouch/GetInTouch'
import Journal from '../../components/Journal/Journal'
import Services from '../../components/Services/Services'
import Testimonial from '../../components/Testimonial/Testimonial';



const Home = () => {
  return (
    <div className="">
      
      
      <Banner />
      <Services />
      
      <About />
      <Journal />
      <Blog />
      <GetInTouch />
      <Testimonial />
     
    </div>
  )
}

export default Home