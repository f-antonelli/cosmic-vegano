import React from 'react'
import Box from '@mui/material/Box'
import { Swiper, SwiperSlide } from 'swiper/react' // Import Swiper React components
import { Keyboard } from 'swiper' // import required modules

import MediaCard from '../MediaCard'
import useItems from '../../hooks/useItems'

/* Import Swiper styles */
import 'swiper/css'
import 'swiper/css/pagination'
//import 'swiper/css/navigation'
import './styles.scss'

function Carousel({ show, itemsType }) {
  const carouselName = `carousel-${show}`
  const { getItemsToShow } = useItems()

  const { itemsToShow, categoryName } = getItemsToShow(show, itemsType)

  return (
    <>
      <Box className={carouselName} component="section" sx={{ mt: 3 }}>
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
          {itemsToShow.map((item, index) => (
            <SwiperSlide key={index}>
              <MediaCard {...item} categoria={categoryName} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  )
}

export default Carousel
