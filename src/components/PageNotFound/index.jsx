import React from 'react'
import { Link } from 'react-router-dom'

import notfound from '../../assets/404/nomuu.png'
import './styles.scss'

const PageNotFound = () => {
  return (
    <div className="container-404">
      <div className="pattern-tl" />
      <div className="pattern-tr" />
      <div className="pattern-c" />
      <div className="pattern-bl" />

      <img alt="not-found-img" src={notfound} />
      <p className="p1">Oh No!</p>
      <p className="p2">Algo salio mal!!!</p>
      <Link className="button-404" to="/">
        Volver a la homepage
      </Link>
    </div>
  )
}

export default PageNotFound
