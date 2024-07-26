import { useState } from 'react'
import Header from '../Components/Header/Header'
import Nav  from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'
import Carrossel from '../Components/Carrossel/Carrossel'
function HomePage() {

  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Carrossel></Carrossel>
      <Footer></Footer>

    </>
  )
}

export default HomePage