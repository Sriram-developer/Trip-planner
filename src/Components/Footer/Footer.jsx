import React from 'react'
import './footer.css'
import { SiYourtraveldottv } from 'react-icons/si'
import {ImFacebook} from 'react-icons/im'
import {AiFillInstagram} from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'


const Footer = () => {
  return (
  <div className="footer">
    <div className="secContainer container grid">
      <div className="logoDiv">
        <div className="footerLogo">
          <a href="#" className='logo flex'>
           <h1><SiYourtraveldottv className='icon'/>Carttrip</h1> 
          </a>
        </div>
        <div className="socials flex">
        <ImFacebook className='icon'/>
        <BsTwitter className='icon'/>
        <AiFillInstagram className='icon'/>
      </div>
      </div>

      <div className="footerLinks">
        <span className="linkTitle">
          Information
        </span>
          <li>
          <a href="#">Home</a>
          </li>
          <li>
          <a href="#">Explore</a>
          </li>   
           <li>
          <a href="#">Travel</a>
         </li> 
         <li>
          <a href="#">Blog</a>
        </li>
      </div>

      <div className="footerLinks">
        <span className="linkTitle">
          Helpful Links
        </span>
          <li>
          <a href="#">Destination</a>
          </li>
          <li>
          <a href="#">Support</a>
          </li>   
           <li>
          <a href="#">Travel & Condition</a>
         </li> 
         <li>
          <a href="#">Privacy</a>
        </li>
      </div>
      <div className="footerLinks">
        <span className="linkTitle">
          Contact-Us
        </span>
        <span className='phone'>+91-965373672</span>
        <span className='email'>carttrabbit@gmail.com</span>
      </div>
    </div>
  </div>
  )
}

export default Footer