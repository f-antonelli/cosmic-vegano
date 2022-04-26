import React from 'react'

import AboutUs from '../../components/AboutUs'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Founders from '../../components/Founders'
import Carousel from '../../components/Carousel'
import CategoryDesktopContainer from '../../components/CategoryDesktopContainer'
import VeganInfo from '../../components/VeganInfo'
import Location from '../../components/Location'
import ContactUs from '../../components/ContactUs'
import Footer from '../../components/Footer'
import useMediaQuerys from '../../hooks/useMediaQuery'
import '../../App.scss'

const Home = () => {
  const match = useMediaQuerys('(min-width: 1200px)')

  return (
    <div className="body">
      <Navbar />
      <Banner />
      <Founders />
      <VeganInfo />
      <Carousel title="promos" />
      {match && <CategoryDesktopContainer />}
      <AboutUs />
      <Location />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
