import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className="secContainer container">
      <div className="homeText">
        <h1 className="title">
          Plan your Trip With Travel CartTrip 
        </h1>

        <p className='subTitle'>
          Travel To your Favourite City With Respectful Of The Environment!
        </p>

        <button className='btn'>
          <a href="#">Explore Now</a>
        </button>
      </div>
      <div className="homeCard grid">

        <div className="locationDiv">
          <label htmlFor="location">Location</label>
          <input type="text" placeholder='Dream Destination' />
        </div>

        <div className="startDiv">
          <label htmlFor="distance">Start-Date</label>
          <input type="date" placeholder='dd/mm/yyyy'/>
        </div>

        <div className="endDiv">
          <label htmlFor="price">End-Date</label>
          <input type="date" placeholder='dd/mm/yyyy' />
        </div>

        <button className='btn'>Search</button>
      </div>
      </div>
    </section>
  )
}

export default Home