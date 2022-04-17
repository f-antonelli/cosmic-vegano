import React from 'react'

import './styles.scss'
import cow from '../../assets/home/muu.png'

const INGREDIENTS = [
  'CARMÍN/COCHINILLA (E120)',
  'LACTEOS:CASEÍNA, LACTOSA O SUERO DE LECHE',
  'COLÁGENO',
  'QUERATINA',
  'GELATINA',
  'ALMUBINA/CLARA DE HUEVO',
  'LARDO/SEBO',
  'GRASA ANIMAL',
  'LANONIMA (E913)',
  'MIEL',
  'JALEA REAL O CERA DE ABEJA (E901)',
  'PROPÓLEO',
  'VITAMINA D3',
  'ÁMBAR GRIS',
]

const VeganInfo = () => {
  return (
    <>
      <div className="divider" />
      <div className="container-veganinfo">
        <div className="title-veganinfo">
          <img alt="cow" src={cow} />
          <h4>Un producto No es es vegano si en la lista de ingrediente un producto CONTIENE</h4>
        </div>

        <ul className="boxlist-vegainfo">
          {INGREDIENTS.map((ingredient, index) => (
            <li key={index}>
              <span>- </span>
              <p>{ingredient}</p>
            </li>
          ))}
        </ul>

        <h4>
          Si dice ¨PUEDE CONTENER¨, es vegano, son trazas y se aclaran para personas alérgicas
        </h4>
      </div>

      <div className="divider" />
    </>
  )
}

export default VeganInfo
