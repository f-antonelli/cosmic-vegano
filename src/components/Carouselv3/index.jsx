import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard } from 'swiper'
import Box from '@mui/material/Box'

import MediaCard from '../MediaCard'
import useItemsv3 from '../../hooks/useItemsv3'

import 'swiper/css'
import 'swiper/css/pagination'
//import 'swiper/css/navigation'
import './styles.scss'

const Carouselv3 = ({ title = 'Promos' }) => {
  const { show = 'medallones' } = useParams()
  const { pathname } = useLocation()

  const { carouselItems, category, getItemsToShow } = useItemsv3()

  useEffect(() => {
    getItemsToShow(show, pathname)
  }, [getItemsToShow, show, pathname])

  const carouselClasses = `carousel carousel-${show}`
  const carouselTitle = title && <h2 className="title-carousel">{title}</h2>

  return (
    <Box className={carouselClasses} component="section">
      {carouselTitle}

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
        {carouselItems.length > 0 &&
          carouselItems.map((item, index) => (
            <SwiperSlide key={index}>
              <MediaCard {...item} categoria={category.nombre} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  )
}

export default Carouselv3
