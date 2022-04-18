import { useContext } from 'react'

import ProductsContext from '../context/ProductsContext'

const useItems = () => {
  const { products, setProducts, categories, setCategories } = useContext(ProductsContext)

  const find = (array, key, value) => array.find((element) => element[key] === value)
  const filter = (array, key, value) => array.filter((element) => element[key] === value)

  const getItemsToShow = (show, itemsType) => {
    let itemsToShow = null
    const category = find(categories, 'nombre', show)

    switch (itemsType) {
      case 'combos':
        //itemsToShow = filter(combos, 'categoria', category.id)
        break
      case 'categoria':
        itemsToShow = filter(products, 'categoria', category.id)
        break
    }

    /* OPCION 2 */
    //const combosToShow = filter(combos, 'categoria', category.id)
    //const productsToShow = filter(products, 'categoria', category.id)

    // JOIN const itemsToShow = combosToShow + productsToShow
    const categoryName = category.nombre

    return { itemsToShow, categoryName }
  }

  const getItemToShow = (show, itemType) => {
    let itemToShow = null

    switch (itemType) {
      case 'combo':
        //itemToShow = filter(combos, 'id', show)
        break
      case 'producto':
        itemToShow = filter(products, 'id', show)
        break
    }

    /* OPCION 2 */
    //const combosToShow = filter(combos, 'id', show)
    //const productsToShow = filter(products, 'id', show)

    // JOIN const itemsToShow = combosToShow + productsToShow

    itemToShow.categoria = find(categories, 'id', itemToShow.categoria)

    return itemToShow
  }

  return {
    products,
    setProducts,
    categories,
    setCategories,
    getItemToShow,
    getItemsToShow,
  }
}

export default useItems
