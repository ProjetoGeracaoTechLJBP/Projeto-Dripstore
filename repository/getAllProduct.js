const { Product } = require('../models');

async function getAllProduct() {
    try{
        const users = await Product.findAll()
        return users
    } catch(error) {
        console.log(error + 'erro dentro do arquivo getAllProduct do repository');
        
    }
 
}

module.exports = {
    getAllProduct
}