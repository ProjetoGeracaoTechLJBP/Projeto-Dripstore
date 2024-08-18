const { Product } = require('../models');

async function createProduct (data) {
    try {
        const Products = await Product.create(data);
        console.log('estou aqui');
        return Products 
    } catch(err) {
        const error =console.log(`${err}`);  
        
    }
};

module.exports = {createProduct }