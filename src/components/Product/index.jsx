import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import useItems from '../../hooks/useItems'
import back from '../../assets/back.svg'
import mp from '../../assets/mp.png'
import time from '../../assets/product/icon-for.svg'
import bake from '../../assets/product/icon-bake.svg'
import keep from '../../assets/product/icon-keep.svg'
import muchef from '../../assets/product/muuchef.png'
import './styles.scss'

const Product = () => {
  const { id } = useParams()
  const { getItemToShow, item } = useItems()

  useEffect(() => {
    getItemToShow(id, '/producto')
  }, [getItemToShow, id])
  console.log(item)

  return item == null ? (
    <h2>Loading</h2>
  ) : (
    <div className="wrapper">
      <div className="container-menu">
        <img alt="back" src={back} />
        <h3>{item.categoria}</h3>
      </div>

      <div className="container-img">
        <img alt="img-food" src={item.img} />
      </div>

      <div className="container-indications">
        <div className="box-indication">
          <img alt="bake" src={bake} />
          <p>{item.variantes[0].rinde}</p>
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
            <input id="pack" name="pack" type="radio" />
          </div>
          <div className="pack">
            <label htmlFor="pack2">PACK DE 12</label>
            <input id="pack2" name="pack" type="radio" />
          </div>
        </div>
        <p>{item.variantes[0].precio}</p>
      </section>

      <button className="button-buy">
        <h3>Comprar</h3>
        <img alt="mp" src={mp} />
      </button>
    </div>
  )
}

export default Product
