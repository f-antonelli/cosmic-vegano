import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
/* import Category from '../pages/Category'
import Combos from '../pages/Combos' */
/* import Product from '../pages/Product'
import Combo from '../pages/Combo' */
/* import Veganized from '../pages/Veganized' */

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/:show" />
        {/* <Route element={<Category />} path="/categoria/:show" />
        <Route element={<Combos />} path="/combos/:show" /> */}
        {/* <Route element={<Product />} path="/producto/:show" />
        <Route element={<Combo />} path="/combo/:showID" /> */}
        {/* <Route element={<Veganized />} path="/veganizado/producto/:showID/:variant" />
        <Route element={<Veganized />} path="/veganizado/combo/:showID/" /> */}
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
