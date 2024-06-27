import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Shop from "./Shop"

const Rout = ({shop, Filter, allcatefilter}) => {
  return (
   <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter}/>}/>
            
        </Routes>
   </>
  )
}

export default Rout
