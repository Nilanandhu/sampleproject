import React from 'react'
import  Video from "../assets/video.mp4";


const play = () => {
  return (
    <div>
      <video width='750px' height='500px' controls>
        <source src={Video} type='video/mp4'/>
      </video>
    </div>
  )
}

export default play


