import React from 'react'
import './About.css'
import bmwimage from '../../assets/about.png'
import playicon from '../../assets/play.png'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
// import { NavLink } from "react-router-dom";


const About = () => {
  return (
    <div>
      <Navbar/>
    <div className='about' id='About'>
        <div className="about-left">
            <img src={bmwimage} alt=""  className='about-img'/>
            <a href="https://video.search.yahoo.com/search/video?fr=mcafee&p=bmw+video&type=E210US714G0#id=0&vid=21daf1dca46d21db435ad967ba69e466&action=click"><img src={playicon} alt=""  className='play-img'/></a>
            
            
          
        </div>
        <div className="about-right">
            <h3>ABOUT BMW</h3>
            <h1>BAVARIAN MOTOR CARS</h1>
            <p>BMW, German automaker noted for quality sports sedans and motorcycles 
            and one of the most prominent brands in the world. Headquarters are in Munich</p>
            <p>In that year, however, BMW pulled out of its financial slump; German entrepreneur
            Herbert Quandt acquired a controlling interest in the firm, and BMW introduced its 700 series, 
            soon followed by the equally successful 1500 model. At about the same time, 
            the company introduced a new series of motorcycles that were particularly popular in the United States.</p>
            <p>BMW was firmly established as a premium automobile brand by the end of the 20th century. In a failed attempt 
            to gain market share as a sport-utility vehicle company, BMW purchased the Rover Group in 1994 but lost roughly
            $4 billion before selling the Land Rover brand to Ford in 2000. BMW saw great success with the relaunch of the British
            MINI in 2001, however, and another British brand, Rolls-Royce, became part of BMW in 2003. Members of the Quandt family 
            continued to hold a significant stake in the company.</p>    

        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About

// {/* <a href="https://video.search.yahoo.com/search/video?fr=mcafee&p=bmw+video&type=E210US714G0#id=0&vid=21daf1dca46d21db435ad967ba69e466&action=click"><img src={playicon} alt=""  className='play-img'/></a> */}
