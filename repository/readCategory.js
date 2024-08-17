const { where } = require('sequelize');
const { Category } = require('../models');

async function readCategory(name) {
    try{
        const read = await Category.findOne({
            where: {name:name}
  }
 )
 return read
} 
catch(erro) {
    console.log(erro + 'Erro no repository > repository');
    
}
}
module.exports = {readCategory}