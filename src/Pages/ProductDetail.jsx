import { useState } from 'react'
import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'
import ProdutosNike from '../Components/ProdutosNike/ProdutosNike'
import Produtos from '../Components/Produtos/Produtos'

function ProductDetail() {

  return (
    <>
       <Header/>
        <Nav/>
       <ProdutosNike></ProdutosNike>
       <Produtos />
       <Footer></Footer>

    </>
  )
}

export default ProductDetail