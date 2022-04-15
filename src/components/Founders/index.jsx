import React from 'react'
import './styles.scss'

const FOUNDERS = [
  {
    name: 'SOL',
  },
  {
    name: 'VALEN',
  },
]

const Founders = () => {
  return (
    <div className="container-founders">
      <p className="text-founders">
        Hola 👋 ¡Bienvenidx a nuestro emprendimiento! Somos Sol y Valen, juntos creamos a Cosmic
        Vegano en 2018, unimos nuestro amor a la cocina con el amor por los animales y así surgieron
        recetas maravillosas.
      </p>
      <p className="text-founders">Somos de Resistencia, Chaco.</p>
      <p className="text-founders">
        Te ofrecemos opciones veganas para salvarte: en 20 tenés preparado un plato 100% plant based
        y zarpado en rico 🌱
      </p>
      <p className="text-founders">FUNDADORAS</p>

      <div className="container-cards">
        {FOUNDERS.map((founder, index) => (
          <div key={index} className="card-founder">
            <div className="img" /> {/*then use img src */}
            <div className="card-text">
              <h3>{founder.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Founders
