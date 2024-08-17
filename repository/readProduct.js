const { where } = require('sequelize');
const { Product } = require('../models');

async function readProduct(name) {
    try{
        const read = await Product.findOne({
            where: {name:name}
  }
 )
 return read
} 
catch(erro) {
    console.log(erro + 'Erro no repository > repository');
    
}
}
module.exports = {readProduct}