import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard } from 'swiper'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'

import MediaCard from '../MediaCard'
import './styles.scss'
import useItemsv2 from '../../hooks/useItemsv2'

const Carouselv2 = () => {
  //  Si estoy en el home y quiero mostrar algo, lo inicializo con el valor que busco
  let { show = 'products' } = useParams()

  //  Envio por props el valor que obtengo del useParams
  const { carouselItems, getItemsToShow } = useItemsv2()

  useEffect(() => {
    getItemsToShow(show)
  }, [getItemsToShow, show])

  return (
    <Box component="section" sx={{ mt: 3 }}>
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
              <MediaCard {...item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  )
}

export default Carouselv2
