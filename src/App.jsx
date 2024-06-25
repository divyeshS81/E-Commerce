import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Nav from './assets/components/Nav'
import Rout from './assets/components/Rout'



const App = () => {
  return (
   <>
    <BrowserRouter>
      <Nav />
      <Rout />
    </BrowserRouter>
   </>
  )
}

export default App
