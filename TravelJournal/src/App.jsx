import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import Header from './components/Header' 
import Cards from './components/Cards'
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
      <Cards {...item}/>
    )
  })

  return (
    <div className="App">
      <Header/>
      {cards}
    </div>
  )
}

export default App
