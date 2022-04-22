import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import back from '../../assets/back.svg'
import useItemsv3 from '../../hooks/useItemsv3'

import './styles.scss'

// path="/categoria/:show"
// path="/combos/:show"
const CategoryHeader = () => {
  const { show } = useParams()
  /* let { pathname } = useLocation()
  const { getPath } = usePath() */
  const { category, getCategoryToShow } = useItemsv3()

  useEffect(() => {
    getCategoryToShow(show)
  }, [getCategoryToShow, show])

  return (
    <>
      <section className="category-header">
        <div className="box-category-header">
          <Link to="/">
            <img alt="Flecha de volver al inicio" className="arrow-btn" src={back} />
          </Link>
          {category && <h1 className="title-category-header">{category.nombre}</h1>}
        </div>

        {category && (
          <img
            alt={`Imagen de la categoria: ${category.nombre} -> ${category.img}`}
            className="img-category-header"
            src="https://dummyimage.com/1280x360/663399/1a1a1a.jpg&text=category-cosmic-vegano.jpg"
          />
        )}
      </section>
    </>
  )
}

export default CategoryHeader
