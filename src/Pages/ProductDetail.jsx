import { useState } from 'react'
import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'
import ProdutosNike from '../Components/ProdutosNike/ProdutosNike'
// import Produtos from '../Components/Produtos/Produtos'
import ProductALta from '../Components/ProductALta/ProductALta'

function ProductDetail() {

  return (
    <>
       <Header/>
        <Nav/>
       <ProdutosNike></ProdutosNike>
       {/* <Produtos /> */}
       <ProductALta/>
       <Footer></Footer>

    </>
  )
}

export default ProductDetail