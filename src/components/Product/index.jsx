import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import useItems from '../../hooks/useItems'
import back from '../../assets/back.svg'
import mp from '../../assets/mp.png'
import time from '../../assets/product/icon-for.svg'
import bake from '../../assets/product/icon-bake.svg'
import keep from '../../assets/product/icon-keep.svg'
import muchef from '../../assets/product/muuchef.png'
import './styles.scss'
import useUtilities from '../../hooks/useUtilities'

const Product = () => {
  const [pack, setPack] = useState(0)
  const { id } = useParams()
  const { getItemToShow, item } = useItems()
  const { formatPrice } = useUtilities()

  useEffect(() => {
    getItemToShow(id, '/producto')
  }, [getItemToShow, id])
  console.log(item)

  const handleChangeInput = (e) => {
    setPack(e.target.value)
  }

  return item == null ? (
    <h2>Loading</h2>
  ) : (
    <div className="wrapper">
      <div className="container-menu">
        <img alt="back" src={back} />
        <h3>{item.categoria}</h3>
        <h3>{item.nombre}</h3>
      </div>

      <div className="container-img">
        <img alt="img-food" src={item.img} />
      </div>

      <div className="container-indications">
        <div className="box-indication">
          <img alt="bake" src={bake} />
          <p>{item.variantes[pack].rinde}</p>
        </div>
        <div className="box-indication">
          <img alt="time" src={time} />
          <p>{item.coccion}</p>
        </div>
        <div className="box-indication">
          <img alt="keep" src={keep} />
          <p>{item.conservacion}</p>
        </div>
      </div>

      <section className="container-ingredients">
        <div className="title-ingredients">
          <img alt="mu-chef" src={muchef} />
          <h2>INGREDIENTES</h2>
        </div>
        <p className="ingredients">{item.ingredientes}</p>
      </section>

      <section className="container-packs">
        <div className="box-packs">
          <div className="pack">
            <label htmlFor="pack">PACK DE 6</label>
            <input
              checked={pack == 0 ? true : false}
              id="pack"
              type="radio"
              value="0"
              onChange={handleChangeInput}
            />
          </div>
          <div className="pack">
            <label htmlFor="pack2">PACK DE 12</label>
            <input
              checked={pack == 1 ? true : false}
              id="pack2"
              type="radio"
              value="1"
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <p>{formatPrice(item.variantes[pack].precio)}</p>
      </section>

      <Link className="button-buy" to={`${item.variantes[pack].link}`}>
        <h3>Comprar</h3>
        <img alt="mp" src={mp} />
      </Link>
    </div>
  )
}

export default Product
