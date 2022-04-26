import React, { useEffect } from 'react'
import Box from '@mui/material/Box'

import CategoryDesktop from '../CategoryDesktop'
import useItems from '../../hooks/useItems'

import './styles.scss'

const CategoryDesktopContainer = () => {
  const { allCarouselItems, getAllItemsToShow } = useItems()

  useEffect(() => {
    getAllItemsToShow()
  }, [getAllItemsToShow])

  return (
    <>
      <div className="divider" />
      <Box className="categories" component="section">
        {allCarouselItems.length > 0 &&
          allCarouselItems.map((item, index) => <CategoryDesktop key={index} {...item} />)}
      </Box>
    </>
  )
}

export default CategoryDesktopContainer
