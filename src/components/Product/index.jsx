import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ProductsContext from '../context/ProductsContext'
const Product = () => {
  const { id } = useParams()
  const { products } = useContext(ProductsContext)

  useEffect(() => {})

  return <div>Product</div>
}

export default Product
