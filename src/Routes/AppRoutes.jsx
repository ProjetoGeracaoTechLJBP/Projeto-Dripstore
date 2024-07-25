import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ProductList from '../Pages/ProductList'
function AppRoutes() {

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route>
          <Route index element={<HomePage/>}/>
          <Route path='/produto' element={<ProductList/>}/>
          </Route>
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default AppRoutes
