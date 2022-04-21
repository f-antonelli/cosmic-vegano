import React from 'react'
import Box from '@mui/material/Box'

import './styles.scss'

const Location = () => {
  return (
    <>
      <Box className="location" component="section">
        <h3 className="title-location">Ubicación</h3>

        <iframe
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.9642821693305!2d-58.98219608543203!3d-27.470371323307152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cc312c618b1%3A0x62279eb6ac4eb452!2sAv.%20Chaco%20864%2C%20Resistencia%2C%20Chaco!5e0!3m2!1ses!2sar!4v1650244479005!5m2!1ses!2sar"
        />

        <div className="text-location">
          <p className="p-location">Dirección:Av. Chaco 864, Resistencia, Chaco</p>
        </div>
      </Box>
    </>
  )
}

export default Location
