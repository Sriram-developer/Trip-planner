import React from 'react'
import './about.css'

// importing images
import img from '../../Assets/customer.png'
import img2 from '../../Assets/cilmbing.jpeg'
import img3 from '../../Assets/mountain.png'

// importing video
import video from '../../Assets/video.mp4'

const About = () => {
  return (
    <section className='about section'>
      <div className="secContainer">
        <h2 className="title">
          Why Hikings?
        </h2>
        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img3} alt="Image Name" />
            <h3>100+ Mountains</h3>
            <p>
            The mountains are our favorite place to be. We live for the achievement of summiting and the views along the way. 
            </p>
          </div>

          <div className="singleItem">
            <img src={img2}alt="Image Name" />
            <h3>1000+ Hikings</h3>
            <p>
            The mountains are our favorite place to be. We live for the achievement of summiting and the views along the way.
            </p>
          </div>
          <div className="singleItem">
            <img src={img} alt="Image Name" />
            <h3>1000+ customers</h3>
            <p>
            The mountains are our favorite place to be. We live for the achievement of summiting and the views along the way.
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>Wonderful House Experience is There!</h2>
              <p>
              Escape the every day and discover new cultures.Let us guide you on your next great adventure.
              </p>
            </div>
            <div className="cardVideo">
              <video src={video} autoPlay loop muted  type="video.mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About