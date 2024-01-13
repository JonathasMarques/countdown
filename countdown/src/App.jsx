import Title from './components/Title'
import Counter from './components/Counter'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import NewYear from "./assets/newyear.jpg"

import './App.css'

function App() {

  return (
    <>
      <div className='App' style={{backgroundImage: `url(${NewYear})` }}>
        <div className="container">
          
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
