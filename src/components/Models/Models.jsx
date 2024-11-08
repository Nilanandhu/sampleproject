import React from 'react'
import './Models.css'
import suv from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'

const Models = () => {
  return (
    <div>
        <Navbar/>
    <div className='models' id='models'>
        <div className='one'>
            <div>
                <img src={suv} alt="" className='model-img' />
            </div>
            <div className='model-right'>
                <h2>X1 SUV</h2>
                <h1>The compact, yet intrepid, four-door SUV.
                 $40,500 Starting MSRP</h1>
            </div>
        </div>    
        <div className='two'>
            <div>
                <img src={img2} alt="" className='model-img' />
            </div>
            <div className='model-right'>
                <h2>X2 Coupe SUV</h2>
                <h1>The most rebellious member of the X family.
                $42,000 Starting MSRP</h1>
            </div>
        </div>
        <div className='three'>
            <div>
                <img src={img3} alt="" className='model-img' />
            </div>
            <div className='model-right'>
                <h2>X4 SUV</h2>
                <h1>The coupe-inspired adventurer of the X family.
                $55,000 Starting MSRP</h1>
            </div>
        </div>
        <div className='four'>
        <div>
                <img src={img4} alt="" className='model-img' />
            </div>
            <div className='model-right'>
                <h2>BMW 4 Series Coupe</h2>
                <h1>An edgy, sleek reimagining of the two-door coupe.
                $50,700 Starting MSRP</h1>
            </div>
        </div>
        <a href="https://www.bmwusa.com/all-bmws.html"><button className='btn'>Explore More</button></a>
    </div>
    <Footer/>
    </div>
  )
}

export default Models