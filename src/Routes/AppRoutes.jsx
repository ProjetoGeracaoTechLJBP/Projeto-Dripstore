import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ProductList from '../Pages/ProductList'
import ProductDetail from '../Pages/ProductDetail'
import CarrinhoPage from "../Pages/CarrinhoPage"
import Login from '../Pages/Login'
import CriarLogin from '../Pages/CriarLogin'
import Cadastro from "../Pages/Cadastro"
function AppRoutes() {

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route>
          <Route index element={<HomePage/>}/>
          <Route path='/produto' element={<ProductList/>}/>
          <Route path='/produtodetail' element={<ProductDetail/>}/>
          <Route path='/carrinho' element={<CarrinhoPage />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/criarlogin' element={<CriarLogin/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          </Route>
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default AppRoutes