import React from 'react'
import './offer.css'
import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'

// Let import images
import img8 from '../../Assets/image 8.jpg'
import img9 from '../../Assets/image9.jpg'
import img10 from '../../Assets/image10.jpg'
import img11 from '../../Assets/image11.jpg'
import img1 from '../../Assets/image1.jpg'
import img2 from '../../Assets/image2.jpg'
// Add Mapping to the image

const Offers = [
  {
    id:1,
    imgSrc:img1,
    destTitle: "Coimbatore to Bali",
    capz: "Bali is rated as one of the best travel destinations in the world by countless websites, review portals, and travel magazines each year – for very good reasons.",
    price: "₹19,000",
    off: "20%",  
  },

  {
    id:2,
    imgSrc: img8,
    destTitle: "Coimbatore to Himalayas",
    capz: "Embark on unforgettable trekking adventures in the Himalayas with Trek The Himalayas. Discover the best treks in India and explore stunning landscapes on ...",
    price: "₹20,000",
    off: "20%",
  
  },

  {
    id:3,
    imgSrc: img9,
    destTitle: "Tailand",
    capz: "A mesmerizing destination, it covers an area of 513,120 sq kms. This beautiful country is a potpourri of multiple cultures. From ascetic lifestyles of the monks ...",
    price: "₹39,000",
    off: "15%",
  },

  {
    id:3,
    imgSrc: img10,
    destTitle: "Malasiya",
    capz: "Enjoy the malaai",
    price: "₹49,000",
    off: "20%",
  },

  {
    id:4,
    imgSrc: img11,
    destTitle: "Manali",
    capz: "Enjoy the parks of kullumanali ",
    price: "₹49,000",
    off: "30%",
  },

  {
    id:5,
    imgSrc: img2,
    destTitle: "Shimla",
    capz: "Enjoy the trekking movement day by day",
    price: "₹29,000",
    off: "10%",
  },
]

const Offer = () => {
  return (
    <section className='offer container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Special Offers
          </h2>
          <p>
            From historical cities to natural specteculars, come see the best of the world !
          </p>
        </div>
        <div className="mainContent grid">
        {
        Offers.map(({id, imgSrc, destTitle, capz, price, off })=>{
          return(
             <div className="singleOffer">
            <div className="destImage">
              <img src={imgSrc} alt={capz} />
              <span className="discount">
                {off} OFF
              </span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>{price}</h4>
                <span className="status">
                  For Booking
                </span>
              </div>

              <div className="amenities flex">
               
               <div className="singleAmenity flex">
                  <MdKingBed className="icon"/>
                  <small>2 Beds</small>
                </div>
                  
               <div className="singleAmenity flex">
                  <MdBathtub className="icon"/>
                  <small>1 Bath</small>
                </div>

                <div className="singleAmenity flex">
                  <FaWifi className="icon"/>
                  <small>Wi-Fi</small>
                </div>

                <div className="singleAmenity flex">
                  <MdAirportShuttle className="icon"/>
                  <small>Shuttle</small>
                </div>
              </div>

              <div className="location flex">
                <MdLocationOn className="icon"/>
                <small> At Cartrabbit venue, {destTitle} </small>
              </div>

              <button className='btn flex'>
                view Details
                <BsArrowRightShort className="icon"/>
              </button>
            </div>
          </div>
          );
        })
        }
        </div>
      </div>
    </section>
  )
}

export default Offer