import { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'
import Carrinho from "../Components/Meu Carrinho/Carrinho"
import Produtos from '../Components/Produtos/Produtos'
import ProductALta from '../Components/ProductALta/ProductALta'
function CarrinhoPage() {

  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Carrinho></Carrinho>
      {/* <Produtos/> */}
      <ProductALta/>
      <Footer></Footer>

    </>
  )
}

export default CarrinhoPage
