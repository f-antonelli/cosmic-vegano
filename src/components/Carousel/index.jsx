import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Box from '@mui/material/Box'

import MySwiper from '../MySwiper'
import useItems from '../../hooks/useItems'
import usePath from '../../hooks/usePath'

import './styles.scss'

const Carousel = ({ title }) => {
  const { show = 'promos' } = useParams()
  let { pathname } = useLocation()
  const { getPath } = usePath()
  const { carouselItems, category, getItemsToShow } = useItems()

  pathname = getPath(pathname)

  useEffect(() => {
    getItemsToShow(show, pathname)
  }, [getItemsToShow, show, pathname])

  const carouselClasses = `carousel carousel-${show}`
  const carouselTitle = title && (
    <div className="box-title-carousel">
      <h2 className="title-carousel">{title}</h2>
    </div>
  )

  let id = null

  show === 'promos' && (id = show)

  return (
    <Box className={carouselClasses} component="section" id={id}>
      {carouselTitle}

      <MySwiper
        carouselClasses={carouselClasses}
        carouselItems={carouselItems}
        category={category}
      />
    </Box>
  )
}

export default Carousel
