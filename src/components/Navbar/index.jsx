import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.jpg'
import back from '../../assets/back.svg'
import hamburger from '../../assets/hamburger.svg'
import './styles.scss'
import useModal from '../../hooks/useModal'
import ProductsContext from '../../context/ProductsContext'

const Navbar = ({ showBtns }) => {
  const { isOpen, openModal, closeModal, stopProp } = useModal()
  const { categories } = useContext(ProductsContext)

  return (
    <div className="container-nav">
      <Link className="logo-nav" to="/">
        <img alt="logo" src={logo} />
      </Link>
      <div className="box-nav">
        <h1 className="title-nav">Cosmic Vegano</h1>
        <div className="nav-desktop">
          {showBtns &&
            categories.map((categorie, index) => (
              <a key={index} className="nav-item" href={`#${categorie.nombre}`}>
                {categorie.nombre}
              </a>
            ))}
        </div>
      </div>

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
                  to={`${categorie.tipo == 'producto' ? 'categoria' : 'combos'}/${
                    categorie.nombre
                  }`}
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
