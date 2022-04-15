import React from 'react'
import Box from '@mui/material/Box'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Keyboard } from 'swiper'

import MediaCard from '../MediaCard'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
//import 'swiper/css/navigation'
import './styles.scss'

const getCategory = (categories, categoryName) =>
  categories.find((element) => element.nombre === categoryName)

const getItemsToShow = (items, categoryID) =>
  items.filter((element) => element.categoria === categoryID)

function Carousel({ categories, items, show }) {
  const carouselName = `carousel-${show}`

  const category = getCategory(categories, show)
  const itemsToShow = getItemsToShow(items, category.id)

  return (
    <>
      <Box className={carouselName} component="section" sx={{ mt: 5 }}>
        <Swiper
          className="my-swiper"
          keyboard={{
            enabled: true,
          }}
          modules={[Keyboard]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={'auto'}
          spaceBetween={24}
        >
          {itemsToShow.map((item) => (
            <SwiperSlide key={item.id}>
              <MediaCard {...item} categoria={category.nombre} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  )
}

export default Carousel
