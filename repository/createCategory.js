const { Category } = require('../models');

async function createCategory (data) {
    try {
        const categorys = await Category.create(data);
        console.log('estou aqui');
        return categorys 
    } catch(err) {
        const error =console.log(`${err}`);  
        
    }
};

module.exports = {createCategory }