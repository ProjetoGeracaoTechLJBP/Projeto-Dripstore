import "./colecao.css"
import supremeBlusa from "../../assets/supremeBlusa.png"
import BotaoDesconto from "../../PropsPages/BotaoDesconto"
import CompraBotao from "../../PropsPages/CompraBotao"
import adidasSapato from "../../assets/adidasSapato.png"
import foneDeOuvido from "../../assets/foneDeOuvido.png"
function Colecao() {

  return (

      <section className="container_colecao">
        <div className="c-content">

          <p className="title">Coleções em destaque</p>

          <div className="cards">

            <div className="card-01">
              
              <div className="content-card">
                <BotaoDesconto
                  title="30% OFF"
                />
                <p className="title-card">Novo drop Supreme</p>
                <CompraBotao
                  title="Comprar"
                />
              </div>
              <img className="card-item" src={supremeBlusa} alt="" />

            </div>

            <div className="card-01">
    
              <div className="content-card">
                <BotaoDesconto
                  title="30% OFF"
                />
                <p className="title-card">Coleção
                  Adidas</p>
                <CompraBotao
                  title="Comprar"
                />
              </div>
                        <img className="card-item" src={adidasSapato} alt="" />
            </div>

            <div className="card-01">
             <div className="content-card">
                <BotaoDesconto
                  title="30% OFF"
                />
                <p className="title-card beats-bass">Novo
                  Beats Bass</p>
                <CompraBotao
                  title="Comprar"
                />
              </div>   
              <img className="card-item" src={foneDeOuvido} alt="" />
            
            </div>

          </div>
        </div>
      </section>
  )
}

export default Colecao
