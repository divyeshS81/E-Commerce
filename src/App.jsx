import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Nav from './assets/components/Nav'
import Rout from './assets/components/Rout'
import Footer from './assets/components/Footer'


const App = () => {
  return (
   <>
    <BrowserRouter>
      <Nav />
      <Rout />
      <Footer />
    </BrowserRouter>
   </>
  )
}

export default App
