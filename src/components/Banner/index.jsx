import React from 'react'

import './styles.scss'
import banner from '../../assets/home/banner.jpg'

const Banner = () => {
  return (
    <div className="container-banner">
      <img alt="main-banner" src={banner} />
    </div>
  )
}

export default Banner
