import "./colecao.css"
import "./btn-product.css"
import blusaSupreme from "../../assets/blusaSupreme.png"
import adidasSapato from "../../assets/adidasSapato.png"
import foneDeOuvido from "../../assets/foneDeOuvido.png"
import greyTshirt from "../../assets/greyTshirt.svg"
import Card from "../../PropsPages/Card"
import CompraBotao from "../../PropsPages/CompraBotao"
import BotaoDesconto from "../../PropsPages/BotaoDesconto"
function Colecao() {

  return (

    <section className="container_colecao">
      <div className="c-content">

        <p className="title">Coleções em destaque</p>

        <div className="cards">
          <Card
            imageUrl={blusaSupreme}
            title="Novo drop supreme"
          />

          <Card
            imageUrl={adidasSapato}
            title="Coleção Adidas"
          />
          <Card
            imageUrl={foneDeOuvido} title="Novo Beats Bass"
          />
        </div>
      </div>

      <div className="colection-container">
        <p className="title t-2">Coleções em destaque</p>
        <div className="btn-content">

          <div className="product">
            <a href="#" className="btn-product01"></a>
            <p className="title-product">Camisas</p>
          </div>

          <div className="product">
            <a href="#" className="btn-product02"></a>
            <p className="title-product">Calças</p>
          </div>

          <div className="product">
            <a href="#" className="btn-product03"></a>
            <p className="title-product">Bonés</p>
          </div>

          <div className="product">
            <a href="#" className="btn-product04"></a>
            <p className="title-product">Headphones</p>
          </div>

          <div className="product">
            <a href="#" className="btn-product05"> </a>
            <p className="title-product">Tênis</p>
          </div>

        </div>

        {/* <BtnProduct
        svgUrl={greyTshirt}
        /> */}
      </div>
    </section>
  )


}

export default Colecao