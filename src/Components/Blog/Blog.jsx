import React, {useEffect} from 'react'
import './blog.css'
import {BsArrowRightShort} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'


// importing images
import img2 from "../../Assets/image.jpg"
import img3 from "../../Assets/image3.jpg"
import img4 from "../../Assets/image4.jpg"
import img5 from "../../Assets/image5.jpg"

//mapping......

const Posts = [
  {
    id:1,
    postImage: img2,
    title: 'Let us have an adventure outside Australiza',
    desc: 'It was up and after checking out of my hotel made my way via the subway to Central Pier Today I was visiting Peng Chau, another of Hong Kongs many islands and I was looking forward to seeing somewhere new. I ended up grabbing another sandwich and coffee, and scoffing them down before the ferry arrived.'
},

{
  id:3,
  postImage: img3,
  title: 'Let us have an adventure outside Havoi',
  desc: 'It was up and after checking out of my hotel made my way via the subway to Central Pier Today I was visiting Peng Chau, another of Hong Kongs many islands and I was looking forward to seeing somewhere new. I ended up grabbing another sandwich and coffee, and scoffing them down before the ferry arrived.'
},

{
  id:4,
  postImage: img4,
  title: 'Let us have an adventure outside Assam',
  desc: 'It was up and after checking out of my hotel made my way via the subway to Central Pier Today I was visiting Peng Chau, another of Hong Kongs many islands and I was looking forward to seeing somewhere new. I ended up grabbing another sandwich and coffee, and scoffing them down before the ferry arrived.'
},

{
  id:5,
  postImage: img5,
  title: 'Let us have an adventure outside Dubai',
  desc: 'It was up and after checking out of my hotel made my way via the subway to Central Pier Today I was visiting Peng Chau, another of Hong Kongs many islands and I was looking forward to seeing somewhere new. I ended up grabbing another sandwich and coffee, and scoffing them down before the ferry arrived.'
},
]
const Blog = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className='blog container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos='fade-up'  data-aos-duration='2000' className="secTitle">
            Our Best Blog?
          </h2>
          <p data-aos='fade-up'  data-aos-duration='2000' >
            An Insight to the Incredible expericene in the World.
          </p>
        </div>
        <div className="mainContainer grid">
     {
      Posts.map(({id,postImage, title, desc})=>{
        return(
          <div data-aos='fade-up'  data-aos-duration='2000'className="singlePost grid">
          <div className="imgDiv">
            <img src={postImage} alt={title} />
          </div>
          <div className="postDetails">
            <h3 data-aos='fade-up'  data-aos-duration='3000'>{title}</h3>
            <p data-aos='fade-up'  data-aos-duration='4000'>{desc}</p>
          </div>
          <a href="#" className='flex' data-aos='fade-up'  data-aos-duration='4500'>
            Read More
            <BsArrowRightShort className="icon"/>
          </a>
        </div>
        )
      })
     }
        </div>
      </div>
    </section>
  )
}

export default Blog