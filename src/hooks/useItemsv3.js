import { useContext, useState } from 'react'

import ProductsContext from '../context/ProductsContext'

const useItemsv3 = () => {
  const { products, categories, combos, dataLoaded } = useContext(ProductsContext)
  const [carouselItems, setCarouselItems] = useState([])
  const [item, setItem] = useState(null)
  const [category, setCategory] = useState(null)

  const [prevShow, setPrevShow] = useState(null)
  const [prevPathName, setPrevPathName] = useState('')

  const filter = (array, key, value) => array.filter((element) => element[key] === value)
  const find = (array, key, value) => array.find((element) => element[key] === value)
  const some = (array, value) => array.some((element) => element === value)

  const getCosmicArrayToUse = (pathName) => {
    const pathsThatUseProducts = ['/categoria', '/producto', '/veganizado/producto']
    const pathsThatUseCombos = ['/', '/combos', '/combo', '/veganizado/combo']

    let useCombosArray = some(pathsThatUseCombos, pathName)
    let useProductsArray = some(pathsThatUseProducts, pathName)

    return { useCombosArray, useProductsArray }
  }

  const getCategoryToShow = (showName) => {
    if (dataLoaded) {
      let categoryToShow = find(categories, 'nombre', showName)

      setCategory(categoryToShow)
    }
  }

  const getItemsToShow = (showName, pathName) => {
    let { useCombosArray, useProductsArray } = getCosmicArrayToUse(pathName)

    //let dataLoaded = products.length > 0 && categories.length > 0

    if (dataLoaded && (prevPathName !== pathName || prevShow != showName)) {
      setPrevPathName(pathName)
      setPrevShow(showName)

      let categoryToShow = find(categories, 'nombre', showName)
      let itemsToShow = null

      useProductsArray && (itemsToShow = filter(products, 'categoria', categoryToShow.id))
      useCombosArray && (itemsToShow = filter(combos, 'categoria', categoryToShow.id))

      setCategory(categoryToShow)
      setCarouselItems(itemsToShow)
    }
  }

  const getItemToShow = (showID, pathName) => {
    let { useCombosArray, useProductsArray } = getCosmicArrayToUse(pathName)

    showID = Number(showID)

    //let dataLoaded = products.length > 0 && categories.length > 0

    if (dataLoaded && (prevPathName !== pathName || prevShow != showID)) {
      setPrevPathName(pathName)
      setPrevShow(showID)

      let itemToShow = null

      useProductsArray && (itemToShow = find(products, 'id', showID))
      useCombosArray && (itemToShow = find(combos, 'id', showID))

      let categoryToShow = find(categories, 'id', itemToShow.categoria)

      itemToShow.categoria = categoryToShow.nombre
      itemToShow.tipo = categoryToShow.tipo

      setItem(itemToShow)
    }
  }

  return { carouselItems, category, item, getCategoryToShow, getItemToShow, getItemsToShow }
}

export default useItemsv3
