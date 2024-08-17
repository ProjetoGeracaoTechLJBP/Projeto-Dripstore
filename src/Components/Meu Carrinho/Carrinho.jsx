import "./carrinho.css"
import "./cupomcep.css"
import WhiteSneakers from "../../assets/white-sneakers.svg"
import Minus from "../../assets/Minus.svg"
import Plus from "../../assets/Plus.svg"
import Inputs from "../../PropsPages/Inputs"
import { Contador } from "./Contador"




function Carrinho() {
  const [count, inc, dec, multi] = Contador()
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
              <p className="unit-price">R${multi},00</p>
            </div>



          </div>
        </div>

        <div className="linha"></div>

        <div className="inputs">

          <Inputs
          label="Cupom de desconto"
          placeholder="Insira seu código"
          btn="Ok"
          />

          <Inputs
          label="Calcular frete"
          placeholder="Insira seu CEP"
          btn="Ok"
          />

        </div>

      </div>

      <div className="card-resumo">
        <p className="t-carrinho resumo">Resumo</p>
        <span className="linha "></span>

        <div className="info-values">
          <p className="info-title">Subtotal:</p>
          <p className="value">R${multi},00</p>
        </div>

        <div className="info-values">
          <p className="info-title">Frete:</p>
          <p className="value">R$0,00</p>
        </div>

        <div className="info-values">
          <p className="info-title">Desconto:</p>
          <p className="value">R$30,00</p>
        </div>

        <div className="info-values">
          <p className="title-total">Total</p>
          <p className="value total">R${multi},00</p>
        </div>

        <button id="continue">Continuar</button>

      </div>


    </section>
  )


}

export default Carrinho
