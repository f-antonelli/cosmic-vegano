import React from 'react'

import { ProductsProvider } from './context/ProductsContext'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <ProductsProvider>
      <AppRouter />
    </ProductsProvider>
  )
}

export default App

{
  /* <Fragment>
<Navbar />
<Container maxWidth="lg">
  <Carousel categories={categorias} items={productos} show="medallones" />
</Container>
</Fragment> */
}
