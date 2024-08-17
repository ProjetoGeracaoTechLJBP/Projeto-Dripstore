//const { User } = require('../models');
// const { INSERT } = require('sequelize/lib/query-types');
// const { User } = require('../models/user.js');
//const { emailValidation } = require('../service/userValidator.js')
//const { hashUser } = require('../service/userHash.js')
const { createCategory } = require('../repository/createCategory.js')
//const { loginVerify } = require('../service/formVerification.js')
const { uptadeCategory} = require('../repository/updateCategory.js')
const {deleteCategory} = require('../repository/deleteCategory.js')
const {readCategory} = require('../repository/readCategory.js')
const {getAllCategory} = require('../repository/getAllCategory.js')


const controllerCreateCategory = async (req, res) => {

    if (req.body.name.length <= 2) {
        return res.status(400).send({ message: 'Nome ou sobrenome não pode ser menor do que 3 caracters ' })
    }



    try {
        const createdCategory = await createCategory(req.body)
        if (!createdCategory) {
            res.status(400).send({ error: 'Ocorreu um erro a categoria ja existe' })
        }
        else {
            res.status(200).json(createdCategory)
        }
    }
    catch (error) {
        console.log(error);

        res.status(500).send({ error: 'An error occurred during user creation' });
    }

};


const controllerUpdate = async (req, res) => {

    if (req.body.name.length <= 2) {
        return res.status(400).send({ message: 'Nome ou sobrenome não pode ser menor do que 3 caracteres ' })
    }



    try{
        
        const update = await uptadeCategory(req.body)

        if(!update) {
            return res.status(404).send({ error: "Categoria não encontrado" });
        }
        else{
            res.status(201).send('Categoria Atualizado')
        }
    }

    catch(error) {
        console.log(error);
           
    }

}

const controlerDelete = async (req,res) => {


    const deleted = await deleteCategory(req.body.name)

    try{
        if(!deleted) {
            return res.status(404).send({ error: "Categoria não encontrado" });
    
        } 
    
        else{
            res.status(201).send('Categoria Deletado')
        }

    }
    catch(error) {
        console.log(error);
        
    }

}

const controllerAllCategory = async (req, res) => {
    try{
        const all = await getAllCategory()

        if(!all) {
            res.status(404).send('Categoria não encontrado')
        }
        else{
            res.status(200).json((all))
        }
    } catch(error) {
        console.log(error);
        
    }
}

module.exports = {
    controllerCreateCategory,controllerUpdate,controlerDelete,controllerAllCategory
}
