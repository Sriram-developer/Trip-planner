import React, {useEffect} from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])



  return (
    <section className='home'>
      <div className="secContainer container">
      <div className="homeText">
        <h1 data-aos='fade-up'className="title">
          Plan your Trip With Travel CartTrip 
        </h1>

        <p data-aos='fade-up'  data-aos-duration='2500'className='subTitle'>
          Travel To your Favourite City With Respectful Of The Environment!
        </p>

        <button data-aos='fade-up'  data-aos-duration='3000' className='btn'>
          <a href="#">Explore Now</a>
        </button>
      </div>
      <div className="homeCard grid">

        <div data-aos='fade-right'  data-aos-duration='2500' className="locationDiv">
          <label htmlFor="location">Location</label>
          <input type="text" placeholder='Dream Destination' />
        </div>

        <div data-aos='fade-right'  data-aos-duration='2500' className="startDiv">
          <label htmlFor="distance">Start-Date</label>
          <input type="date" placeholder='dd/mm/yyyy'/>
        </div>

        <div data-aos='fade-right'  data-aos-duration='2500' className="endDiv">
          <label htmlFor="price">End-Date</label>
          <input type="date" placeholder='dd/mm/yyyy' />
        </div>

        <button data-aos='fade-left'  data-aos-duration='2000'className='btn'>Search</button>
      </div>
      </div>
    </section>
  )
}

export default Home