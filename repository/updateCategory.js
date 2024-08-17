const { where } = require('sequelize');
const { Category } = require('../models');

async function uptadeCategory(body) {
try{
    const queryName = body.name
    // Caso não exista a categoria para atualizar,ou seja, 
    // não encontre, o sequelize não lançara um erro, e sim 0..
    const update = Category.update(body,{
        where: {name: queryName} 
    }
)
return update
}
catch(error) {
    console.log(error + "Ocorreu dentro do arquivo updateCategory,do repository");  
}
    
}
module.exports = {uptadeCategory}