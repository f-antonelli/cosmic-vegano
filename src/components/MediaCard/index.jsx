import React from 'react'
//import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
//import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'

import './styles.scss'

const MediaCard = ({ categoria, nombre, img, variantes }) => (
  <Card className="card">
    <CardHeader subheader={nombre} title={categoria} />
    <CardMedia
      alt={`${categoria} ${nombre} + ${img}`}
      className="card__img"
      component="img"
      image="https://dummyimage.com/255x184/eef770/1a1a1a.jpg&text=img-cosmic-vegano.jpg"
    />
    <CardContent>
      <p className="card__price">
        precio <span>{variantes[0].precio}</span>
      </p>
    </CardContent>
    {/* <CardActions>
      <Button size="small">COMPRAR</Button>
    </CardActions> */}
  </Card>
)

export default MediaCard
