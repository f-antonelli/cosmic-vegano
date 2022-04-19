import { useContext, useState } from 'react'

import ProductsContext from '../context/ProductsContext'

const useItemsv2 = () => {
  const { products } = useContext(ProductsContext)
  const [carouselItems] = useState([])

  const getItemsToShow = (show) =>
    show === 'products' && carouselItems.length === 0 && carouselItems.push(...products)

  return { carouselItems, getItemsToShow }
}

export default useItemsv2
