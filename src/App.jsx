import React from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Founders from './components/Founders'
import './App.scss'
import VeganInfo from './components/VeganInfo'

function App() {
  return (
    <div>
      <Navbar />
      <div className="body">
        <Banner />
        <Founders />
        <VeganInfo />
      </div>
    </div>
  )
}

export default App
