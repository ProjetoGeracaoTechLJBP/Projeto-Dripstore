import TenisNike from '../../assets/tenisNike.png'
import CardTenis from '../../assets/Card-Tenis.png'
import PrecoValue from '../../assets/PrecoValue.png'
import AvaliStar from '../../Components/AvaliStar/AvaliStar'
import './ProdutosNike.css'

import { useState } from 'react'



function DarkVariantExample() {

  const [click, setClick] = useState(null)

  const adicionarClass = (index) => {
    if (click === index) {
      setClick(null)
    } else {
      setClick(index)
    }
  }

  /* Duas maneiras de color cores no background numa tag específica */
  // Mudança de cor 01:
  const [backgroundColor, setBackgroundColor] = useState("")
  let colors = ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7']

  function mudarCor(color) {
    for (let i = 0; i < colors.length; i++) {
      // alert(colors[i-1])
      if (color === colors[i]) {
        setBackgroundColor(color)
        break
      }
    }
  }
  // Mudança de cor 02:
  const cor1 = () => {
    setBackgroundColor('#E2E3FF')
  }

  const cor2 = () => {
    setBackgroundColor('#FFE8BC')
  }

  const cor3 = () => {
    setBackgroundColor('#FFC0BC')
  }

  const cor4 = () => {
    setBackgroundColor('#DEC699')
  }

  const cor5 = () => {
    setBackgroundColor('#E8DFCF')
  }



  return (
    <>
      <main id='Corpo'>

        <div id='Sect-Nav'>
          <p>Home /</p>
          <p>Produto /</p>
          <p>Tênis /</p>
          <p>Nike and Revolution 6 Next Nature Masculino</p>
        </div>

        <section id='Sect-main'>
          <section id='Sect-TenisAndInformation'>

            <div id="carouselExampleDark" className="carousel carousel-dark slide backColor-carousel " style={{ backgroundColor }}>
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
                <h1>Tênis Nike Revolution<br /> 6  Nexts Nature Masculine</h1>
                <p>Casual | Nike | REF:38416711</p>
              </div>

              <div id='star-Container'>
                <AvaliStar />
                <button id='btn-star'>4.7 <span id='emoji-star'>★</span></button>
                <p id='paragraph-avaliacao'>(90 avaliações)</p>
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
                <button className={click === 39 ? "mudar-de-cor" : "btn-num-color"} onClick={() => adicionarClass(39)}>39</button>
                <button className={click === 40 ? "mudar-de-cor" : "btn-num-color"} onClick={() => adicionarClass(40)}>40</button>
                <button className={click === 41 ? "mudar-de-cor" : "btn-num-color"} onClick={() => adicionarClass(41)}>41</button>
                <button className={click === 42 ? "mudar-de-cor" : "btn-num-color"} onClick={() => adicionarClass(42)}>42</button>
                <button className={click === 43 ? "mudar-de-cor" : "btn-num-color"} onClick={() => adicionarClass(43)}>43</button>
              </div>
              <p id='Text-Color'>Cores</p>
              <div id='btn-Color'>
                <button id='btn-blue' onClick={() => mudarCor('#6FEEFF')}></button>
                <button id='btn-red' onClick={() => mudarCor('#FF6969')}></button>
                <button id='btn-gray' onClick={() => mudarCor('#5E5E5E')}></button>
                <button id='btn-purple' onClick={() => mudarCor('#6D70B7')}></button>
              </div>
              <button id='btn-Compra'>COMPRAR</button>
            </div>
          </section>
        </section>

        <section id='Sect-Cards'>
          <div id='cards'>
            <button className='card-1' onClick={cor1}><img src={CardTenis} alt="Tênis-1" /></button>
            <button className='card-2' onClick={cor2}><img src={CardTenis} alt="Tênis-2" /></button>
            <button className='card-3' onClick={cor3}><img src={CardTenis} alt="Tênis-3" /></button>
            <button className='card-4' onClick={cor4}><img src={CardTenis} alt="Tênis-4" /></button>
            <button className='card-5' onClick={cor5}><img src={CardTenis} alt="Tênis-5" /></button>
          </div>
        </section>
      </main>
    </>
  );
}

export default DarkVariantExample;