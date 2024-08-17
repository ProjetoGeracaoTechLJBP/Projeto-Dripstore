const { Category } = require('../models');

async function getAllCategory() {
    try{
        const users = await Category.findAll()
        return users
    } catch(error) {
        console.log(error + 'erro dentro do arquivo getAllCategory do repository');
        
    }
 
}

module.exports = {
    getAllCategory
}