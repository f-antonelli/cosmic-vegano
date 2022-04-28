import React from 'react'
import { Helmet } from 'react-helmet'

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
      <Helmet>
        <title>Hecho por personas para personas | Cosmic Vegano</title>
        <link href="https://cosmicvegano.com.ar/" rel="canonical" />
        <meta
          content="Comida vegana en Resistencia, Chaco. Hecha por personas, sin conservantes. Con sabores únicos, de otro planeta, y porciones abundantes. Amplia variedad de comidas veganas: empanadas, tartas, milanesas, medallones, para parrilla, almuerzos y mucho más"
          name="description"
        />
        <meta
          content="comida vegana, comida vegana Resistencia Chaco, comidas veganas, comidas veganas Resistencia Chaco, comida vegana sin conservantes, comida vegana porciones abundantes, comida vegana casera, almuerzo vegano, almuerzos vegano, empanadas veganas, tartas veganas, milanesas veganas, medallones veganos"
          name="Keywords"
        />
      </Helmet>
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
