import "./carrinho.css"
import WhiteSneakers from "../../assets/white-sneakers.svg"


function Carrinho() {

  return (

    <section className="container_meucarrinho">
      <div className="meu_carrinho">
        <div className="titles">
          <p className="t-carrinho">Meu carrinho</p>
          <div className="sub-titles">

            <p className="title02">Quantidade</p>
            <p className="title03">Unitário</p>
            <p className="title05">Total</p>
          </div>
        </div>
        <div className="linha"></div>

        <div className="car-product">
          <div id="blue-square">
            <img id="w-sneaker" src={WhiteSneakers} />

          </div>

          <div className="prod-info">
            <p className="prod-name">Tênis Nike Revolution 6 Next
              Nature Masculino</p>

            <p id="prod-cor">Cor:<p id="type-color"> Vermelho / Branco</p> </p>
            <p id="prod-tamanho">Tamanho: <p id="type-size">42</p></p>

            <div className="prod-quantidade">
              <button id="contItem"></button>
            </div>

          </div>
        </div>
        <div className="linha"></div>
      </div>

      <div className="card-resumo">

      </div>


    </section>
  )


}

export default Carrinho
