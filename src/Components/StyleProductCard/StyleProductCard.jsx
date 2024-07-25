import Card from "../Card/Card"
import "./StyleProductCard.css"
function StyleProductCard() {
    let listproduct = [ {
        descontoespecial: "30% OFF",
        nome:"Tênis",
        descricao:"K-Swiss V8 - Masculino",
        valor:'$300',
        desconto:'$200'
      },
      {
        descontoespecial: "30% OFF",
        nome:"Tênis",
        descricao:"K-Swiss V8 - Masculino",
        valor:'$400',
        desconto:'$200'
      },
      {
        
        nome:"Tênis",
        descricao:"K-Swiss V8 - Masculino",
        valor:'$300',
        desconto:'$200'
        
      }
    ]

    let listproduct02 = [ {
        // descontoespecial: "30% OFF",
        nome:"Tênis",
        descricao:"K-Swiss V8 - Masculino",
        valor:'$300',
        desconto:'$200'
        
      },
      {
        // descontoespecial: "30% OFF",
        nome:"Tênis",
        descricao:"K-Swiss V8 - Masculino",
        valor:'$400',
        desconto:'$200'
        
      },
      {
        
        nome:"Tênis",
        descricao:"K-Swiss V8 - Masculino",
        valor:'$300',
        desconto:'$200'
        
      }
    ]
       



    return(
        <>
        <div className='Card-StyleProduct'>
      {
          listproduct.map((produto,index) => (
            <Card 
              key={index}
              descontoespecial={produto.descontoespecial}
              nome={produto.nome}
              descricao={produto.descricao}
              valor={produto.valor}
              desconto={produto.desconto }
            />
          ))
          
        }
        </div> 

        <div className='Card-StyleProduct'>
      {
          listproduct02.map((produto,index) => (
            <Card 
              key={index}
              descontoespecial={produto.descontoespecial}
              nome={produto.nome}
              descricao={produto.descricao}
              valor={produto.valor}
              desconto={produto.desconto }
            />
          ))
          
        }
        </div> 

        <div className='Card-StyleProduct'>
      {
          listproduct02.map((produto,index) => (
            <Card 
              key={index}
              descontoespecial={produto.descontoespecial}
              nome={produto.nome}
              descricao={produto.descricao}
              valor={produto.valor}
              desconto={produto.desconto }
            />
          ))
          
        }
        </div> 


        <div className='Card-StyleProduct'>
      {
          listproduct02.map((produto,index) => (
            <Card 
              key={index}
              descontoespecial={produto.descontoespecial}
              nome={produto.nome}
              descricao={produto.descricao}
              valor={produto.valor}
              desconto={produto.desconto }
            />
          ))
          
        }
        </div> 


        <div className='Card-StyleProduct'>
      {
          listproduct02.map((produto,index) => (
            <Card 
              key={index}
              descontoespecial={produto.descontoespecial}
              nome={produto.nome}
              descricao={produto.descricao}
              valor={produto.valor}
              desconto={produto.desconto }
            />
          ))
          
        }
        </div> 

        </>
 )
}
export default StyleProductCard