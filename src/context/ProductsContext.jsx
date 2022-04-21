import React, { createContext, useEffect, useState } from 'react'

import getProducts from '../services/getProducts'

const ProductsContext = createContext({})

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.productos)
      setCategories(data.categorias)
      setDataLoaded(true)
    })
  }, [])

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, categories, setCategories, dataLoaded, setDataLoaded }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsProvider }
export default ProductsContext
