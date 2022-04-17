import React from 'react'

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
      <button className="button-404">Volver a la homepage</button>
    </div>
  )
}

export default PageNotFound
