const { where } = require('sequelize');
const { Product } = require('../models');

async function deleteProduct(name) {
try{
    const nameProduct = name
    const productDeleted = await Product.destroy({
        where: {name: nameProduct}
    })
    return productDeleted
}

catch(error) {
    console.log(error + "erro dentro do repository > deleteProduct");
    
}

}

module.exports = {deleteProduct}