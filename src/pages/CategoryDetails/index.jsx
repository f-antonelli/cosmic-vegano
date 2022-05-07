import React from 'react'
import { Helmet } from 'react-helmet'

import Navbar from '../../components/Navbar'
import CategoryHeader from '../../components/CategoryHeader'
import Carousel from '../../components/Carousel'
import ContactUs from '../../components/ContactUs'
import Footer from '../../components/Footer'
import '../../App.scss'

const CategoryDetails = () => {
  return (
    <div className="body">
      <Helmet>
        <title>Productos y combos veganos, sin conservantes | Cosmic Vegano</title>
        <meta
          content="Amplia variedad de comidas veganas: empanadas, tartas, milanesas, medallones, para parrilla, almuerzos y mucho más. Hecha por personas, sin conservantes. Con sabores únicos, de otro planeta, y porciones abundantes"
          name="description"
        />
      </Helmet>
      <Navbar showBtns={false} />
      <CategoryHeader />
      <Carousel />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default CategoryDetails
