import React from 'react'
import Banner from '../../components/banner/Banner'
import About from '../../components/about/About'
import Team from '../../components/team/Team'
const Home:React.FC = () => {
  return (
    <>
       <Banner/>
       <About/>
       <Team/>
    </>
  )
}

export default Home