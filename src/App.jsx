import React, { Fragment } from 'react'
import Container from '@mui/material/Container'

import { categorias, productos } from '../data/data.json'

import Carousel from './components/Carousel'
import Navbar from './components/Navbar'
import './App.scss'

function App() {
  return (
    <Fragment>
      <Navbar />
      <Container maxWidth="lg">
        <Carousel categories={categorias} items={productos} show="medallones" />
      </Container>
    </Fragment>
  )
}

export default App
