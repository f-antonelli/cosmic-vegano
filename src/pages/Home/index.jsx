import React from 'react'

import AboutUs from '../../components/AboutUs'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Founders from '../../components/Founders'
/* import Carousel from '../../components/Carousel' */
import VeganInfo from '../../components/VeganInfo'
import Location from '../../components/Location'
import ContactUs from '../../components/ContactUs'
import Carouselv2 from '../../components/Carouselv2'
import '../../App.scss'

const Home = () => {
  return (
    <div className="body">
      <Navbar />
      <Banner />
      <Founders />
      <VeganInfo />
      {/* <Carousel /> */}
      <Carouselv2 />
      <AboutUs />
      <Location />
      <ContactUs />
    </div>
  )
}

export default Home
