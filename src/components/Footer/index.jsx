import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import './styles.scss'

const Footer = () => {
  return (
    <div className="container-footer">
      <Typography align="center" color="text.secondary">
        {'Copyright © '}
        {new Date().getFullYear()}
        {' - '}
        <Link color="inherit" href="https://cosmicvegano.com.ar/" underline="none">
          Cosmic Vegano
        </Link>
      </Typography>
      <div className="team-footer">
        <a className="team-members" href="#" rel="noreferrer" target="_blank">
          Designers and developers
        </a>
      </div>
    </div>
  )
}

export default Footer
