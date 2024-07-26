import { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'
import Carrinho from "../Components/Meu Carrinho/Carrinho"
import Produtos from '../Components/Produtos/Produtos'
function CarrinhoPage() {

  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Carrinho></Carrinho>
      <Produtos/>
      <Footer></Footer>

    </>
  )
}

export default CarrinhoPage
