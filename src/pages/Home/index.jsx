import React from 'react'

import AboutUs from '../../components/AboutUs'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Founders from '../../components/Founders'
import VeganInfo from '../../components/VeganInfo'
import Location from '../../components/Location'

import '../../App.scss'

const Home = () => {
  return (
    <div className="body">
      <Navbar />
      <Banner />
      <Founders />
      <VeganInfo />
      <AboutUs />
      <Location />
    </div>
  )
}

export default Home
