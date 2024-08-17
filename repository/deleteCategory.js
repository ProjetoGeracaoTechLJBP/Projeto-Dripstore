const { where } = require('sequelize');
const { Category } = require('../models');

async function deleteCategory(name) {
try{
    const nameCategory = name
    const categoryDeleted = await Category.destroy({
        where: {name: nameCategory}
    })
    return categoryDeleted
}

catch(error) {
    console.log(error + "erro dentro do repository > deleteCategory");
    
}

}

module.exports = {deleteCategory}