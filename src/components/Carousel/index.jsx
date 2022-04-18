import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard } from 'swiper'
import { useParams, useMatch } from 'react-router-dom'

import MediaCard from '../MediaCard'
import useItems from '../../hooks/useItems'

import 'swiper/css'
import 'swiper/css/pagination'
//import 'swiper/css/navigation'
import './styles.scss'

const Carousel = () => {
  const { getItemsToShow, setCosmicArrayToUse } = useItems()
  let { show } = useParams()

  show = show ? show : 'medallones' // Debe ser 'promos', solo a efectos de prueba es 'medallones'

  const carouselName = `carousel-${show}`

  const isHomeRoute = useMatch('/')
  const isCategoryRoute = useMatch('/categoria/:show')
  const isCombosRoute = useMatch('/combos/:show')

  if (isHomeRoute) setCosmicArrayToUse('products') // Debe ser 'combos', solo a efectos de prueba es 'products'
  if (isCategoryRoute) setCosmicArrayToUse('products')
  if (isCombosRoute) setCosmicArrayToUse('combos')

  // ↓↓↓↓↓↓ PROBLEMA ↓↓↓↓↓↓
  const [itemsToShow, setItemsToShow] = useState([])
  const [categoryName, setCategoryName] = useState('')

  useEffect(() => {
    const { itemsToShow, categoryName } = getItemsToShow(show)

    setItemsToShow(itemsToShow)
    setCategoryName(categoryName)
    /*
      NOTA:
      En el return se hace un map de itemsToShow, y dentro se usa categoryName
    */
  }, [getItemsToShow, show])
  // ↑↑↑↑↑↑ PROBLEMA ↑↑↑↑↑↑

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
          {itemsToShow.length > 0 &&
            itemsToShow.map((item, index) => (
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
