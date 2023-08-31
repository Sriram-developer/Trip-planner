import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Offer from './Components/Offers/Offer'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Popular from './Components/Popular/Popular'


const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
   {/*<Popular/>
    <Offer/>
    <About/>
    <Blog/>
  <Footer>*/}
    </>
  )
}

export default App