import "./carrinho.css"
import WhiteSneakers from "../../assets/white-sneakers.svg"
import Minus from "../../assets/Minus.svg"
import Plus from "../../assets/Plus.svg"
import { Contador } from "./Contador"



function Carrinho() {
  const [count, inc, dec] = Contador()
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
          <div className="prod-info">

            <div id="blue-square">
              <img id="w-sneaker" src={WhiteSneakers} />
            </div>

            <div className="prod-info-texts">
              <p className="prod-name">Tênis Nike Revolution 6 Next
                Nature Masculino</p>

              <h5 id="prod-cor">Cor:<p id="type-color"> Vermelho / Branco</p> </h5>
              <h5 id="prod-tamanho">Tamanho: <p id="type-size">42</p></h5>
            </div>



          </div>

          <div className="abt-prod">

            <div className="prod-quantidade">
            <button onClick={() => dec()} className="contItem" id="contMinus">
              <img src={Minus} alt="" />
            </button>

            <p id="Number">{count}</p>

            <button onClick={() => inc()} className="contItem" id="contPlus">
              <img src={Plus} alt="" />
            </button>
          </div>

          <div className="prod-unit">
            <p className="last-price">R$219,00</p>
            <p className="unit-price">R$219,00</p>
          </div>
          
          <div className="prod-unit">
            <p className="last-price">R$219,00</p>
            <p className="unit-price">R$219,00</p>
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
