import React, { useState } from 'react'
import './Header.scss'
import logo from '../../assets/logo.svg'
import { FaInstagram  , FaFacebook , FaSearch , FaRegHeart} from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

const Header: React.FC = () => {

   let [burger , setBurger] = useState(false)


  return (
    <>
       <header>
        <div className="container">
          <div className="navbar">
             <div  className="nav__logo">
               <NavLink  to={'/'}>
                   <img src={logo} alt="" />
               </NavLink>
             </div>
             <div className={`nav__list ${burger ? 'show' : ''}`}>
                 <ul>
                    <li onClick={()=> setBurger(!burger)}>
                      <NavLink to={'/'} >
                          ALL PRODUCTS
                      </NavLink>
                    </li>
                    <li onClick={()=> setBurger(!burger)}>
                      <NavLink to={'/'}>
                          ABOUT SEEDRA
                      </NavLink>
                    </li>
                    <li onClick={()=> setBurger(!burger)}>
                       <NavLink to={'/'}>
                          <a href="/">OUR BLOG</a>
                       </NavLink>
                    </li>
                    <li  onClick={()=> setBurger(!burger)}>
                       <NavLink to={'/contact'}>
                          CONTACTS
                       </NavLink>
                    </li>
                 </ul>
             </div>
             <div className="nav__icons">
                <FaInstagram />
                <FaFacebook />
             </div>
             <div className='search'>
                 <div className="input">
                     <FaSearch />
                     <input type="text" placeholder='Search' />
                 </div>
                 <div className="icon">
                  <FaRegHeart />
                  <GrCart />
                  <button className='burger' onClick={()=> setBurger(!burger)}>
                      <RxHamburgerMenu  />
                  </button>
                 </div>
             </div>
          </div>
        </div>
       </header>
    </>
  )
}

export default Header