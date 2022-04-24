import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import happymuu from '../../assets/thanks/happymuu.png'
import useItemsv3 from '../../hooks/useItemsv3'
import usePath from '../../hooks/usePath'

import './styles.scss'

// path="/veganizado/producto/:showID/:variant"
// path="/veganizado/combo/:showID/"
const Veganized = () => {
  const { showID, variant } = useParams()
  let { pathname } = useLocation()
  const { getPath } = usePath()
  const { item, getItemToShow } = useItemsv3()

  pathname = getPath(pathname, 2)

  useEffect(() => {
    getItemToShow(showID, pathname)
  }, [getItemToShow, showID, pathname])

  const variantInfo = variant && `de ${variant}.`

  const itemInfo = item && (
    <p className="p2">
      Ha comprado: {item.nombre} {variantInfo}
    </p>
  )

  return (
    <div className="container-veganized">
      <div className="pattern-tl" />
      <div className="pattern-tr" />
      <div className="pattern-c" />
      <div className="pattern-bl" />

      <div className="content-veganized">
        <img alt="Vaca feliz por haber elegido productos veganos" src={happymuu} />
        <p className="p1">Gracias por su compra !!!</p>
        {itemInfo}

        <p className="p2">Por favor, contactanos para coordinar la entrega:</p>
        <a className="button-veganized" href="/">
          Contactanos
        </a>
      </div>
    </div>
  )
}

export default Veganized
