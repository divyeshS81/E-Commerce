import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Shop from "./Shop"
import Cart from "./Cart"

const Rout = ({shop, Filter, allcatefilter, addtocart, cart, setCart}) => {
  return (
   <>
        <Routes>
            <Route path='/' element={<Home addtocart={addtocart} />} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>
            <Route path='/Shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>}/>
            
        </Routes>
   </>
  )
}

export default Rout
