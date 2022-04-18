import { useContext, useState } from 'react'

import ProductsContext from '../context/ProductsContext'

const useItems = () => {
  const { products, setProducts, categories, setCategories } = useContext(ProductsContext)
  const [cosmicArray, setCosmicArray] = useState([])

  const find = (array, key, value) => array.find((element) => element[key] === value)
  const filter = (array, key, value) => array.filter((element) => element[key] === value)

  const setCosmicArrayToUse = (arrayName) => {
    switch (arrayName) {
      case 'combos':
        setCosmicArray(combos)
        break
      case 'products':
        setCosmicArray(products)
        break
    }
  }

  const getItemsToShow = (showName) => {
    const category = find(categories, 'nombre', showName)
    const itemsToShow = filter(cosmicArray, 'categoria', category.id)

    const categoryName = category.nombre

    return { itemsToShow, categoryName }
  }

  const getItemToShow = (showID) => {
    let itemToShow = filter(cosmicArray, 'id', showID)
    const categoria = find(categories, 'id', itemToShow.categoria)

    itemToShow.categoria = categoria.nombre

    return itemToShow
  }

  return {
    products,
    setProducts,
    categories,
    setCategories,
    cosmicArray,
    setCosmicArray,
    setCosmicArrayToUse,
    getItemToShow,
    getItemsToShow,
  }
}

export default useItems
