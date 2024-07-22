import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
function AppRoutes() {

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route>
          <Route index element={<HomePage/>}/>
          {/* <Route path='/' element={#}/> */}
          </Route>
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default AppRoutes
