import React from 'react';
//import './styles.css'
import './styless.css'
import CarouselSocial from '../../../ui/CarouselSocial'

export default function SocialMedia() {

  return (
    <div className="container-social-media" id="socialmedia">
      <div className="title">
        <h1>Social Media</h1>
        <p>Through our social media, you may stay up to date, take questions, talk to the whole community and also have direct support with our dev team.</p>
      </div>

      <div className="container-carousel">
      <CarouselSocial />
      </div>

      <div className="subtitle">
      <p>Discord is our main area, where you have all the support you need: <br />Live chat support, quick response time, technical documentation, installation guides...</p>
      </div>
    </div>
  )
}