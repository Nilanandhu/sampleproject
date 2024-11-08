import React from 'react'
import './Hero.css'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
    <div className='hero container' id='hero'> 
    <div className="hero-text">
      <h1>Welcome to our website</h1>
      <p>The name BMW stands for driving pleasure. But what is this acronym
         actually short for? And how did the BMW name come about? Read the interesting story of a moving company name here</p>
      <a href="https://search.yahoo.com/search;_ylt=AwrgxTBU9ANm_TYC_jJXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3JlbC1taWQ-?type=E210US714G0&p=about+bmw+company&fr2=p%3As%2Cv%3Aw%2Cm%3Ars-top%2Cct%3Auni&fr=mcafee"><button className='btn'>Explore more</button></a>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home