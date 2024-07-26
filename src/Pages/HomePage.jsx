import { useState } from 'react'
import Header from '../Components/Header/Header'
import Nav  from '../Components/Nav/Nav'
import Carrossel from '../Components/Carrossel/Carrossel'
import Colecao from '../Components/Colecao/Colecao'
import Produtos from '../Components/Produtos/Produtos'
import Footer from '../Components/Footer/Footer'

function HomePage() {

  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Carrossel></Carrossel>
      <Colecao></Colecao>
      <Produtos/>
      <Footer></Footer>

    </>
  )
}

export default HomePage