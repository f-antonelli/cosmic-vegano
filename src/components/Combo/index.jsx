import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import useUtilities from '../../hooks/useUtilities'
import useItems from '../../hooks/useItems'
import back from '../../assets/back.svg'
import mp from '../../assets/mp.png'
import muchef from '../../assets/product/muuchef.png'
import wpp from '../../assets/wapp.png'
import './styles.scss'

const Combo = () => {
  const { id } = useParams()
  const { getItemToShow, item } = useItems()
  const { formatPrice } = useUtilities()

  useEffect(() => {
    getItemToShow(id, '/combo')
  }, [getItemToShow, id])

  return item == null ? (
    <h2>Loading</h2>
  ) : (
    <div className="wrapper">
      <div className="container-menu">
        <Link className="arrow-btn-link" to="/">
          <img alt="Flecha de volver al inicio" src={back} />
        </Link>
        <h2>{item.categoria}</h2>
        <h3>{item.nombre}</h3>
      </div>

      <div className="box-img">
        <img alt="img-food" className="img" src={`/img/${item.img}`} />
      </div>

      <section className="container-combos">
        <div className="title-ingredients">
          <img alt="mu-chef" src={muchef} />
          <h2>CONTENIDO</h2>
        </div>
        <div className="box-combos">
          {item.productos.map((product, index) => (
            <div key={index} className="combo">
              <h3>{product.producto}</h3>
              <p>{product.cantidad}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="box-price">
        <h3>{formatPrice(item.precio)}</h3>
        <Link to="/">
          <img alt="whats-app" src={wpp} />
        </Link>
      </div>

      <a className="button-buy-combo" href={`${item.link}`} rel="noreferrer" target="_blank">
        <h3>Comprar</h3>
        <img alt="mp" src={mp} />
      </a>
    </div>
  )
}

export default Combo
