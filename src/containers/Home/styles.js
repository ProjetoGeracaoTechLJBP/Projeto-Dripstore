import styled from 'styled-components'

export const Title = styled.h1 `

*{
    margin:0%;
    padding: 0%;
    justify-content: space-evenly;
    
}

.digitalLOGO {
    margin-left: 5%;
    margin-top: 3%;
    margin-right: 0%;
    width: 15vw ;

}

.Pesquisar{
    margin-left: 3% ;
    margin-right: 1%;
    width: 40vw;
    height: 6vh;
    border: none;
    border-radius: 2mm;
    background-color: rgb(241, 241, 241);
}

#lupa {
    margin-left: -3%;
    border: none;
    color: gray;
    background-color: rgb(241, 241, 241);
}

#Cadastre-se{
    margin-left: 2%;
    margin-right: 1%;
    text-decoration: underline;
    color: gray;
    font-size: 18px;
}

.botao1 {
    width: 8vw;
    height: 5vh;
    border: none;
    border-radius: 2mm;
    background-color: rgb(193, 15, 101);
    color: white;
    margin-left: 3% ;
    font-family: tahoma;
    font-size: 14px;

}

.carrinho {
    color: rgb(193, 15, 101);
    margin-left: 5% ;
    width: 7vw ;
    height: 7vh;
    margin-top: 2%;
    margin-bottom: 0;
}

.nav-item *{
    font-size: 20px;
    padding: 0 1.5rem;
    text-align:left ;
    color: gray;   
    margin-left: 1.5%;
    margin-top: 1.5%;
    text-decoration: none;
}

header .nav-item a:hover{
    color: rgb(193, 15, 101); 
    text-decoration: underline ;
}


.formulario {
    margin: 0;
    background-color: rgb(241, 241, 241);
}

.linha {
    width: 50%;
    margin-left: 5%;

}
.finaliz{
    margin-top: 5%;
    margin-left: 3%;
    font-size: 30px;
    color: rgb(78, 77, 77);
}

.infoPessoal {
    margin-left: 5%;
    margin-top: 4%;   
    font-weight: bold;
    color: rgb(78, 77, 77); 
    font-size: 20px;

}
.final {
    font-weight: bold;
    color: rgb(78, 77, 77);   
}
.form-label {
    font-weight: bold;
    color: rgb(78, 77, 77);
    font-size: 15px;
    margin-right: 50%;
    margin-left: 5%;
    
    
}
.form-control{
    height: 5vh;
    width: 50vw;
    margin-right: 0;
    margin-left: 5%;
    border-radius:20%;
    border: none;
    border-radius: 2mm;
    background-color: rgb(249, 247, 247);

}

.bot {
    border-radius: 80%;
    border: none;
    margin-left: 5%;
}
.botao2x {
    background-color: rgb(240, 202, 14);
    color: white;
    width: 55vw;
    height: 6vh;
    border: none;
    border-radius: 2mm;
    margin-bottom: 9%;
    margin-left: 5%;
    font-family: tahoma;
    font-size: 14px;
}

.rodape{
    background-color:rgb(0, 0, 0);
    color: white;
    height: auto;
    width: 100%;
    font-size: 14px;
    font-family: helvetica;
}
.ds {
    margin-top: 10%;
}

.rodape a{
    text-decoration: none;
    color: white;
}
.rodape p{
    margin-bottom: 6px;
}
.rodape-div{
    display: flex;
    flex-wrap: wrap;
    width:100%;
    margin: auto;
    align-items: stretch;
    padding: 60px 10px 40px 10px;
}
.rodape-div-1, .rodape-div-2, .rodape-div-3, .rodape-div-4{
    display: flex;
    width: calc(100% / 4 - 20px);
    padding: 10px;
}
.rodape span{
    font-size: 20px;
    color: white;
}

.rodape-direitos{
    width: calc(100% - 20px);
    background-color: black;
    padding: 10px;
    margin: 0px;
    text-align: center;
}
/*mobile*/
@media (max-width: 768px) {
    .rodape-div-1, .rodape-div-2, .rodape-div-3, .rodape-div-4{
        width: calc(50% - 20px);
        padding: 10px;
    }
    .rodape-div{
        padding: 60px 0px 40px 0px;
    }
}

` 
