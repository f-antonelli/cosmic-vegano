import React from 'react'
import { Link } from 'react-router-dom'
//import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
//import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'

import useUtilities from '../../hooks/useUtilities'

import './styles.scss'

const MediaCard = ({ categoria, nombre, id, img, precio, variantes, tipo }) => {
  const { formatPrice } = useUtilities()

  tipo === 'producto' && (precio = variantes[0].precio)

  let link = undefined

  tipo === 'producto' && (link = `/producto/${id}`)
  tipo === 'combo' && (link = `/combo/${id}`)

  return (
    <Link className="card-link" to={link}>
      <Card className="card">
        <CardHeader subheader={nombre} title={categoria} />
        <CardMedia
          alt={`${categoria} ${nombre} + ${img}`}
          className="card__img"
          component="img"
          image={`/img/${img}`}
        />
        <CardContent>
          <p className="card__price">
            precio <span>{formatPrice(precio)}</span>
          </p>
        </CardContent>
        {/* <CardActions>
      <Button size="small">COMPRAR</Button>
    </CardActions> */}
      </Card>
    </Link>
  )
}

export default MediaCard
