import React from 'react'
import Box from '@mui/material/Box'

import iconEmail from '../../assets/social/icon-email.svg'
import iconFacebook from '../../assets/social/icon-facebook.svg'
import iconInstagram from '../../assets/social/icon-instagram.svg'

import './styles.scss'

const Location = () => {
  return (
    <>
      <Box className="contactus" component="section">
        <h2 className="title-contactus">Contacto</h2>

        <a href="https://www.instagram.com/cosmicvegano/" rel="noreferrer" target="_blank">
          <div className="card-contactus">
            <img alt="Icono red social Instagram" className="icon-contactus" src={iconInstagram} />
            <div className="text-contactus">
              <p className="p-contactus">/cosmicvegano</p>
            </div>
          </div>
        </a>
        <a href="https://www.facebook.com/cosmicvegano/" rel="noreferrer" target="_blank">
          <div className="card-contactus">
            <img alt="Icono red social Facebook" className="icon-contactus" src={iconFacebook} />
            <div className="text-contactus">
              <p className="p-contactus">/cosmicvegano</p>
            </div>
          </div>
        </a>
        <a href="mailto:cosmicvegano@gmail.com" rel="noreferrer" target="_blank">
          <div className="card-contactus">
            <img alt="Icono de email" className="icon-contactus" src={iconEmail} />
            <div className="text-contactus">
              <p className="p-contactus">Dirección:Av. Chaco 864, Resistencia, Chaco</p>
            </div>
          </div>
        </a>
      </Box>
    </>
  )
}

export default Location
