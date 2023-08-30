import React from 'react'
import './navbar.css'
import {GiHummingbird} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'



const Navbar = () => {
  return (
    <section className='navBarsection'>
      <div className='header'>

        <div className='logoDiv'>
        <a href='#' className='logo'>
          <h1><GiHummingbird className='icon'/>
          Cartrabbit
          </h1>
        </a>
      </div>

      <div className="navBar">
        <ul className="navList flex">

          <li className="navItem">
            <a href="#" className="navlink">Home</a>
          </li>

          <li className="navItem">
            <a href="#" className="navlink">Plan</a>
          </li>

          <li className="navItem">
            <a href="#" className="navlink">Resource</a>
          </li>

          <li className="navItem">
            <a href="#" className="navlink">Contacts</a>
          </li>

          <li className="navItem">
            <a href="#" className="navlink">Blog</a>
          </li>

          <div className="headerBtns flex">
            <button className='btn loginBtn'>
              <a href='#'>Login</a>
            </button>

            <button className='btn loginBtn'>
              <a href='#'>Sign Up</a>
            </button>
          </div>
        </ul>
        <div className="closeNavbar">
          <AiFillCloseCircle className='icon'/>
        </div>
      </div>
      <div className="toogleNavbar">
      <TbGridDots className="icon"/>
      </div>
      </div>
    </section>
  )
}

export default Navbar