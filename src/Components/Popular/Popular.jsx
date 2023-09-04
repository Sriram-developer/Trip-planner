import React from 'react'
import './popular.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'

// importing image
import img from "../../Assets/image.jpg"

const Popular = () => {
  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              From Amazing cities to natural Specteculars, come see the Best of the World!
            </p>
          </div>
            <div className="iconsDiv flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className="icon"/>
            </div>
        </div>
        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImage">
              <img src={img} alt="Image title" />
              <div className="overlayInfo">
                <h3>Welcome to London</h3>
                <p>
                “Life is either a daring adventure or nothing at all.” 
                </p>
                <BsArrowRightShort className='icon'/>
              </div>
            </div>
            <div className="destFooter">
              <div className="number">01</div>
              <div className="destText flex">
                <h6>London</h6>
                <span className='flex'>
                  <span className="dot">
                    <BsDot className="icon"/>
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 

export default Popular