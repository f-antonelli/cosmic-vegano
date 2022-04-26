import React from 'react'

import Navbar from '../../components/Navbar'
import CategoryHeader from '../../components/CategoryHeader'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import '../../App.scss'

const CategoryDetails = () => {
  return (
    <div className="body">
      <Navbar />
      <CategoryHeader />
      <Carousel />
      <Footer />
    </div>
  )
}

export default CategoryDetails
