import React, {useEffect} from 'react'
import './about.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

// importing images
import img from '../../Assets/customer.png'
import img2 from '../../Assets/cilmbing.jpeg'
import img3 from '../../Assets/mountain.png'
import img4 from '../../Assets/guide.png'

// importing video
import video from '../../Assets/video.mp4'

const About = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className='about section'>
      <div className="secContainer">
        <h2 className="title">
          Why Hikings?
        </h2>
        <div className="mainContent container grid">
          <div data-aos='fade-up'  data-aos-duration='3000'className="singleItem">
            <img src={img3} alt="Image Name" />
            <h3>100+ Mountains</h3>
            <p>
            The mountains are our favorite place to be. We live for the achievement of summiting and the views along the way. 
            </p>
          </div>

          <div data-aos='fade-up'  data-aos-duration='3000' className="singleItem">
            <img src={img2}alt="Image Name" />
            <h3>1000+ Hikings</h3>
            <p>
            The mountains are our favorite place to be. We live for the achievement of summiting and the views along the way.
            </p>
          </div>

          <div data-aos='fade-up'  data-aos-duration='3000' className="singleItem">
            <img src={img4}alt="Image Name" />
            <h3>1000+ Guide</h3>
            <p>
            The mountains are our favorite place to be. We live for the achievement of summiting and the views along the way.
            </p>
          </div>
          <div data-aos='fade-up'  data-aos-duration='3000'className="singleItem">
            <img src={img} alt="Image Name" />
            <h3>1000+ customers</h3>
            <p>
            The mountains are our favorite place to be. We live for the achievement of summiting and the views along the way.
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div data-aos='fade-right'  data-aos-duration='3000'className="cardText">
              <h2>Wonderful House Experience is There!</h2>
              <p>
              Escape the every day and discover new cultures.Let us guide you on your next great adventure.
              </p>
            </div>
            <div data-aos='fade-left'  data-aos-duration='3000'className="cardVideo">
              <video src={video} autoPlay loop muted  type="video.mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About