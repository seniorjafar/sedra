import React from 'react'
import './About.scss'
import girl1 from '../../assets/girl1.png'
import girl2 from '../../assets/girl2.png'

const About:React.FC = () => {
  return (
    <>
      <div className="about">
         <div className="container">
            <div className="about__top">
                <div className="top__left">
                    <h1>Seedra helps to grow fast and efficiant</h1>
                    <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
                    <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
                    <p>Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
                    <p>  Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
                </div>
                <div className="top__right">
                    <img src={girl1} alt="" />
                </div>
            </div>
            <div className="about__bottom">
                <img src={girl2} alt="" />
                <div className="bottom__left">
                    <h1>Our story</h1>
                    <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
                    <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
                    <p>  Your easy growing experience is our guarantee</p>
                    <p>Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
                    <p>  Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
                </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default About