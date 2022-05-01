import React from 'react'
import Box from '@mui/material/Box'

import iconEmail from '../../assets/social/icon-email.svg'
import iconFacebook from '../../assets/social/icon-facebook.svg'
//import iconInsta from '../../assets/social/icon-insta.svg'

import './styles.scss'

const Location = () => {
  return (
    <>
      <Box className="contactus" component="section">
        <h2 className="title-contactus">Contacto</h2>

        <div className="cards-container-contactus">
          <div className="card-contactus">
            <a href="https://www.instagram.com/cosmicvegano/" rel="noreferrer" target="_blank">
              <img alt="Icono red social Instagram" className="icon-contactus" src="#" />
              <div className="text-contactus">
                <p className="p-contactus">/cosmicvegano</p>
              </div>
            </a>
          </div>
          <div className="card-contactus">
            <a href="https://www.facebook.com/cosmicvegano/" rel="noreferrer" target="_blank">
              <img alt="Icono red social Facebook" className="icon-contactus" src={iconFacebook} />
              <div className="text-contactus">
                <p className="p-contactus">/cosmicvegano</p>
              </div>
            </a>
          </div>
          <div className="card-contactus">
            <a href="mailto:cosmicvegano@gmail.com" rel="noreferrer" target="_blank">
              <img alt="Icono de email" className="icon-contactus" src={iconEmail} />
              <div className="text-contactus">
                <p className="p-contactus">cosmicvegano@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Location
