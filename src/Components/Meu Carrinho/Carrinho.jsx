import "./carrinho.css"

function Colecao() {

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

        <div className="product">
          <div id="blue-square"></div>
        </div>
      </div>

      <div className="card-resumo">

      </div>


    </section>
  )


}

export default Colecao
