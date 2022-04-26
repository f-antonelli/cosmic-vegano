import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import happymuu from '../../assets/thanks/happymuu.png'
import useItems from '../../hooks/useItems'
import usePath from '../../hooks/usePath'
import useUtilities from '../../hooks/useUtilities'

import './styles.scss'

const Veganized = () => {
  const { showID, variant } = useParams()
  let { pathname } = useLocation()
  const { getPath } = usePath()
  const { item, getItemToShow } = useItems()
  const { capitalize } = useUtilities()

  pathname = getPath(pathname, 2)

  useEffect(() => {
    getItemToShow(showID, pathname)
  }, [getItemToShow, showID, pathname])

  const variantInfo = variant && ` por ${variant}`

  const itemInfo = item && (
    <ul className="list-veganized">
      <li>
        <span>{capitalize(item.tipo)}</span>: {capitalize(item.nombre)}
        {variantInfo}.
      </li>
      <li>
        <span>Categoría</span>: {capitalize(item.categoria)}.
      </li>
    </ul>
  )

  const wapp =
    item &&
    `https://wa.me/543625140121?text=Hola%21%20compr%C3%A9%20el%20${item.tipo.toUpperCase()}%20%22${capitalize(
      item.nombre.toLowerCase(),
    )}%22%20de%20la%20categor%C3%ADa%3A%20%22${capitalize(
      item.categoria.toLowerCase(),
    )}%22.%20Mi%20usuario%20de%20MP%20es%3A%20`

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
        <a className="button-veganized" href={wapp} rel="noreferrer" target="_blank">
          Contactanos
        </a>
      </div>
    </div>
  )
}

export default Veganized
