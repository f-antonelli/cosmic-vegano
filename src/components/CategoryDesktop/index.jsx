import React from 'react'
import Box from '@mui/material/Box'

import CategoryHeader from '../CategoryHeader'
import MySwiper from '../MySwiper'

import 'swiper/css'
import 'swiper/css/pagination'
import './styles.scss'

const CategoryDesktop = ({ carouselItems, category }) => {
  const carouselClasses = `carousel carousel-${category.nombre}`
  const categoryClasses = `category category-${category.nombre}`
  const id = `${category.nombre}`

  return (
    <Box className={categoryClasses} component="section" id={id}>
      <CategoryHeader categoryToShow={category} />
      <MySwiper
        carouselClasses={carouselClasses}
        carouselItems={carouselItems}
        category={category}
      />
    </Box>
  )
}

export default CategoryDesktop
