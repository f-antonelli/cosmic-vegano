import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import CategoryDetails from '../pages/CategoryDetails'
/* import ProductDetails from '../pages/ProductDetails' */ // -----> ELEMENT=Product
/* import ComboDetails from '../pages/ComboDetails' */ // -----> ELEMENT=Combo
import Thanks from '../pages/Thanks'
import ProductDetalis from '../pages/ProductDetails'

const AppRouter = () => {
  return (
    <BrowserRouter basename={`/cosmic-vegano`}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CategoryDetails />} path="/categoria/:show" />
        <Route element={<CategoryDetails />} path="/combos/:show" />
        <Route element={<ProductDetalis />} path="/producto/:id" />
        {/* <Route element={<ComboDetails />} path="/combo/:showID" /> */}
        <Route element={<Thanks />} path="/veganizado/producto/:showID/:variant" />
        <Route element={<Thanks />} path="/veganizado/combo/:showID" />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
