import React, { createContext, useEffect, useState } from 'react'

import getProducts from '../services/getProducts'

const ProductsContext = createContext({})

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.productos)
      setCategories(data.categorias)
    })
  }, [])

  return (
    <ProductsContext.Provider value={{ products, setProducts, categories, setCategories }}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsProvider }
export default ProductsContext
