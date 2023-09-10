import React, {useEffect} from 'react'
import './popular.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'

// importing image
import img2 from "../../Assets/image.jpg"
import img3 from "../../Assets/image3.jpg"
import img4 from "../../Assets/image4.jpg"
import img5 from "../../Assets/image5.jpg"
import img6 from "../../Assets/image6.jpg"
import img7 from "../../Assets/image7.jpg"


import Aos from 'aos'
import 'aos/dist/aos.css'


// Sriram remember -> high order array method by Map

const Data = [
  {
    id:1,
    imgSrc: img2,
    destTitle: "Bali",
    location: "Bali is rated as one of the best travel destinations in the world by countless websites, review portals, and travel magazines each year – for very good reasons.",
    grade: "grade is five star ",
  },

  {
    id:2,
    imgSrc: img3,
    destTitle: "Himalayas",
    location: "Embark on unforgettable trekking adventures in the Himalayas with Trek The Himalayas. Discover the best treks in India and explore stunning landscapes on ...",
    grade: "grade is five star ",},

  {
    id:3,
    imgSrc: img4,
    destTitle: "Tailand",
    location: "A mesmerizing destination, it covers an area of 513,120 sq kms. This beautiful country is a potpourri of multiple cultures. From ascetic lifestyles of the monks ...",
    grade: "Cultural Relax",
  },

  {
    id:3,
    imgSrc: img5,
    destTitle: "Malasiya",
    location: "Enjoy the malaai",
    grade: "grade 5 Relax",
  },

  {
    id:4,
    imgSrc: img6,
    destTitle: "Manali",
    location: "Enjoy the parks of kullumanali ",
    grade: "Cultural Relax",
  },

  {
    id:5,
    imgSrc: img7,
    destTitle: "Shimla",
    location: "Enjoy the trekking movement day by day",
    grade: "garde 5 trekking",
  },
]

const Popular = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader flex">
          <div data-aos='fade-right'  data-aos-duration='2500'className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              From Amazing cities to natural Specteculars, come see the Best of the World!
            </p>
          </div>
            <div data-aos='fade-left'  data-aos-duration='3000' className="iconsDiv flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className="icon"/>
            </div>
        </div>
        <div className="mainContent grid">
          {
            Data.map(({id,imgSrc,destTitle,location,grade})=>{
              return(
              <div data-aos='fade-up' className="singleDestination">
              <div className="destImage">
                <img src={imgSrc} alt="Image title" />
                <div className="overlayInfo">
                  <h3>{destTitle}</h3>
                  <p>
                  {location} 
                  </p>
                  <BsArrowRightShort className='icon'/>
                </div>
              </div>
              <div className="destFooter">
                <div className="number">0{id}</div>
                <div className="destText flex">
                  <h6>{destTitle}</h6>
                  <span className='flex'>
                    <span className="dot">
                      <BsDot className="icon"/>
                    </span>
                    CART
                  </span>
                </div>
              </div>
            </div>)
            })
          }
        </div>
      </div>
    </section>
  )
} 

export default Popular