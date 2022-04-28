import React, { useContext } from 'react'

import logo from '../../assets/logo.jpg'
import back from '../../assets/back.svg'
import hamburger from '../../assets/hamburger.svg'
import './styles.scss'
import useModal from '../../hooks/useModal'
import ProductsContext from '../../context/ProductsContext'

import { Link } from 'react-router-dom'

const Navbar = () => {
  const { isOpen, openModal, closeModal, stopProp } = useModal()
  const { categories } = useContext(ProductsContext)

  console.log(categories.nombre)

  return (
    <div className="container-nav">
      <img alt="logo" className="logo-nav" src={logo} />
      <h1 className="title-nav">Cosmic Vegano</h1>
      <img alt="hamburger" className="hamburger-nav" src={hamburger} onClick={openModal} />
      {isOpen && (
        <div className="container-menu" onClick={closeModal}>
          <div className="box-menu" onClick={stopProp}>
            <div className="boxtitle-menu">
              <img alt="back-arrow" className="arrow-menu" src={back} onClick={closeModal} />
              <h2 className="title-menu">MENU</h2>
            </div>
            <div className="boxsections-menu">
              {categories.map((categorie) => (
                <Link
                  key={categorie.id}
                  className="section-menu"
                  to={`categoria/${categorie.nombre}`}
                >
                  {categorie.nombre}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
