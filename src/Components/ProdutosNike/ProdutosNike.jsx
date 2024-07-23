import TenisNike from '../../assets/tenisNike.png'
import PrecoValue from '../../assets/PrecoValue.png'
import './ProdutosNike.css'
/* import "bootstrap/dist/css/bootstrap.min.css"; */
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
                    {<img src={TenisNike} className="d-block sapato" alt="sapato" />}
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="carousel-item-row">
                  <div className="imagem-ilustrativa">
                    {<img src={TenisNike} className="d-block sapato" alt="sapato" />}
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
              <h1>Tênis Nike Revolution<br /> 6  Next Nature Masculine</h1>
              <p>Casual | Nike | REF:38416711</p>
            </div>




            {/* Estrelas funcionais */}
            <div>

            </div>

            <div id='Part-Price'>
              <div id='Cifrao'>
                <img src={PrecoValue} alt="" /> 
                <div id='Mine-Value'>
                  <p>219,00</p>  
                </div>
              </div>

            </div>
            <div id='Description'>
              <p id='paragraph-Description'>Descrição do produto</p>
              <p id='paragraph-DescriptionProduto'>
              Os tênis da Nike combinam estilo e desempenho superior, proporcionando conforto e suporte incomparáveis para qualquer atividade física. Experimente o melhor em calçados esportivos com a Nike.</p>
            </div>
            <p id='Text-Tamanho'>Tamanho</p>
            <div id='btn-Number'>
              <button>39</button>
              <button>40</button>
              <button>41</button>
              <button>42</button>
              <button>43</button>
            </div>
            <p id='Text-Color'>Cores</p>
            <div id='btn-Color'>
              <button>fafdfd</button>
              <button>fafdfd</button>
              <button>fafdfd</button>
              <button>fafdfd</button>
            </div>
            <button id='btn-Compra'>Comprar</button>
          </div>
        </section>
      </section>
    </>
  );
}

export default DarkVariantExample;


{/* <p>R$</p>
               </div>
               <p id='Preco-Value'>219,</p>
               <p id='Zero'>00</p>
                */}