const { where } = require('sequelize');
const { Product } = require('../models');

async function uptadeProduct(body) {
try{
    const queryName = body.name
    // Caso não exista a produto para atualizar,ou seja, 
    // não encontre, o sequelize não lançara um erro, e sim 0..
    const update = Product.update(body,{
        where: {name: queryName} 
    }
)
console.log(update);

return update
}
catch(error) {
    console.log(error + "Ocorreu dentro do arquivo updateCategory,do repository");  
}
    
}
module.exports = {uptadeProduct}