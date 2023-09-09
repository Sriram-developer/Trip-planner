import React from 'react'
import './blog.css'
import {BsArrowRightShort} from 'react-icons/bs'

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
  return (
    <section className='blog container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Our Best Blog?
          </h2>
          <p>
            An Insight to the Incredible expericene in the World.
          </p>
        </div>
        <div className="mainContainer grid">
     {
      Posts.map(({id,postImage, title, desc})=>{
        return(
          <div className="singlePost grid">
          <div className="imgDiv">
            <img src={postImage} alt={title} />
          </div>
          <div className="postDetails">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          <a href="#" className='flex'>
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