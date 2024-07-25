import { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'
import Carrinho from "../Components/Meu Carrinho/Carrinho"
function CarrinhoPage() {

  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Carrinho></Carrinho>
      <Footer></Footer>

    </>
  )
}

export default CarrinhoPage
