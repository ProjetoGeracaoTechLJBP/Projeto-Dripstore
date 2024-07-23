import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import CarrinhoPage from "../Pages/CarrinhoPage"
function AppRoutes() {

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route>
          {/* <Route index element={<HomePage/>}/> */}
          <Route index element={<CarrinhoPage/>}/>

          {/* <Route path='/' element={#}/> */}
          </Route>
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default AppRoutes
