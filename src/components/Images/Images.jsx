import React from 'react'
import './Images.css'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'
import img5 from '../../assets/image5.png'
import img6 from '../../assets/image7.png'
import img7 from '../../assets/image8.png'
import img8 from '../../assets/image6.png'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'

const Images = () => {
  return (
    <div>
      <Navbar/>
    <div className='campus' id='Images'>
        <div className='images'>
            <img src={img1} alt=""  className=''/>
            <img src={img2} alt=""  className=''/>
            <img src={img3} alt=""  className=''/>
            <img src={img4} alt=""  className=''/>

            <img src={img5} alt=""  className=''/>
            <img src={img6} alt=""  className=''/>
            <img src={img7} alt=""  className=''/>
            <img src={img8} alt=""  className=''/>
            <a href="https://unsplash.com/s/photos/bmw" className='Button'>
            <button className='btn'>See more here </button>
            </a>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Images