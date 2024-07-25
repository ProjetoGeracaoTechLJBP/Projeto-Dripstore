import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import CriarLogin from '../Pages/CriarLogin'
function AppRoutes() {

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route>
          <Route index element={<HomePage/>}/>
          <Route path='/criarlogin' element={<CriarLogin/>}/>
          </Route>
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default AppRoutes
