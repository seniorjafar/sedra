import React from 'react'
import './Banner.scss'

const Banner : React.FC = () => {
  return (
    <>
       <div className="banner">
          <div className="container">
             <div className="banner__content">
                 <h1>Who we are and what we do</h1>
                 <p>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden</p>
             </div>
          </div>
      </div>        
    </>
  )
}

export default Banner