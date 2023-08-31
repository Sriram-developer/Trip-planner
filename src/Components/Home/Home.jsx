import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className="secContainer container">
      <div className="homeText">
        <h1 className="title">
          Plan your Trip With Travel CartRabbit
        </h1>
        <p className='subTitle'>
          Travel To your Favourite City With Respectful Of The Environment!
        </p>
        <button className='btn'>
          <a href="#">Explore Now</a>
        </button>
      </div>
      </div>
    </section>
  )
}

export default Home