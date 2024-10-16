import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className="hero">

      <div className="hero-left">
      <h2>NEW ARRIVALS</h2>
      <div>
      <div className="hand-icon">
        <p>NEW</p>
      </div>
      <p>Collections</p>
      <p>For Everyone</p>
      </div>
      <div className="hero-latest-btn">
        <div>Latest Collections</div>
        <img src={arrow_icon} alt=""/>
      </div>
    </div>

    <div className="hero-right">
      <img src={hero_img} alt=""/>
    </div>
    </div>
    

  )
}
