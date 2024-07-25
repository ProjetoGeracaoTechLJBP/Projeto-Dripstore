import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
function AppRoutes() {

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route>
          <Route index element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          </Route>
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default AppRoutes
