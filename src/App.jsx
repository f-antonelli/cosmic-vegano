import React from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Founders from './components/Founders'
import './App.scss'
import VeganInfo from './components/VeganInfo'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <>
      <Navbar />
      <div className="body">
        <Banner />
        <Founders />
        <VeganInfo />
        <AboutUs />
      </div>
    </>
  )
}

export default App
