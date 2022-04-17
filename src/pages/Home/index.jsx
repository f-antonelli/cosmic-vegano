import React from 'react'

import AboutUs from '../../components/AboutUs'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Founders from '../../components/Founders'
import VeganInfo from '../../components/VeganInfo'
import '../../App.scss'

const Home = () => {
  return (
    <div className="body">
      <Navbar />
      <Banner />
      <Founders />
      <VeganInfo />
      <AboutUs />
    </div>
  )
}

export default Home
