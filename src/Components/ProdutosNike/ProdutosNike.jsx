import TenisNike from '../../assets/tenisNike.png'
import './ProdutosNike.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function DarkVariantExample() {
  return (
    <>
    <div id='Sect-Nav'>
        <p>Home /</p>
        <p>Produto /</p>
        <p>Tênis /</p>
        <p>Nike and alguma coisa desnecessária </p>
      </div>


    <section id='Sect-main'>
      <section id='Sect-TenisAndInformation'>

      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="carousel-item-row">
              <div className="imagem-ilustrativa">
                <img src={TenisNike} className="d-block sapato" alt="sapato" />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="carousel-item-row">
              <div className="imagem-ilustrativa">
                <img src={TenisNike} className="d-block sapato" alt="sapato" />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="carousel-item-row">
              <div className="imagem-ilustrativa">
                <img src={TenisNike} className="d-block sapato" alt="sapato" />
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


        <div id='Information-Product'>
            <div id='Part-Text'>
              <h1>Tênis Nike Revolution 6 Next Nature Masculine</h1>
            </div>

          {/* Estrelas funcionais */}
          <div>

          </div>

            <div id='Part-Price'>
              <p>R$</p>
              <p>219,</p>
              <p>00</p>
              <p>219,00</p>
            </div>
            <div id='Description'>
              <p>Descrição</p>
              <p>Apresentamos o Nike , o parceiro perfeito para suas corridas diárias. Com tecnologia de amortecimento responsivo e um design respirável, este tênis proporciona conforto e suporte excepcionais a cada passo. Prepare-se para voar nas pistas com estilo e desempenho incomparáveis.</p>
            </div>
            <p>Tamanho</p>
            <div id='btn'>
              <button>fafdfd</button>
              <button>fafdfd</button>  
              <button>fafdfd</button>
              <button>fafdfd</button>
            </div>
          <button>Comprar</button>
        </div>
        </section>
      </section>
    </>
  );
}

export default DarkVariantExample;