import React from 'react'
import './Footer.scss'
import logo from '../../assets/logo.svg'
import { FaInstagram  , FaFacebook } from "react-icons/fa";

const Footer:React.FC = () => {
  return (
    <>
      <footer>
         <div className="container">
            <div className="content">
               <ul>
                  <li><a href="/">ALL PRODUCTS</a></li>
                  <li><a href="/">ABOUT SEEDRA</a></li>
                  <li><a href="/">OUR BLOG</a></li>
                  <img src={logo} alt="" />
                  <li><a href="/">Terms&Conditions</a></li>
                  <li><a href="/">Privacy Policy</a></li>
               </ul>
               <div className='media'>
                  <img src={logo} alt="" />
                 <div className="df">
                     <div className='flc'>
                     <a href="/">ALL PRODUCTS</a>
                     <a href="/">ABOUT SEEDRA</a>
                     <a href="/">OUR BLOG</a>
                    </div>
                    <div className='flc'>
                     <a href="/">Terms&Conditions</a>
                     <a href="/">Privacy Policy</a>
                    </div>
                 </div>
               </div>
            </div>
            <div className='foter__bottom'>
              <div className="foter__icons">
                <FaInstagram/>
                <FaFacebook/>
              </div>
              <p>All rights reserved</p>
            </div>
         </div>
      </footer>
    </>
  )
}

export default Footer