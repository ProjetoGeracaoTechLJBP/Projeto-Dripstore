//const { User } = require('../models');
// const { INSERT } = require('sequelize/lib/query-types');
// const { User } = require('../models/user.js');
//const { emailValidation } = require('../service/userValidator.js')
//const { hashUser } = require('../service/userHash.js')
const { createProduct } = require('../repository/createProduct.js')
//const { loginVerify } = require('../service/formVerification.js')
const { uptadeProduct} = require('../repository/updateProduct.js')
const {deleteProduct} = require('../repository/deleteProduct.js')
const {readProduct} = require('../repository/readProduct.js')
const {getAllProduct} = require('../repository/getAllProduct.js')


const controllerCreateProduct = async (req, res) => {

    if (req.body.name.length <= 2) {
        return res.status(400).send({ message: 'Nome não pode ser menor do que 3 caracters ' })
    }



    try {
        const createdProduct = await createProduct(req.body)
        if (!createdProduct) {
            res.status(400).send({ error: 'Ocorreu um erro o produto ja existe' })
        }
        else {
            res.status(200).json(createdProduct)
        }
    }
    catch (error) {
        console.log(error);

        res.status(500).send({ error: 'An error occurred during user creation' });
    }

};


const controllerUpdate = async (req, res) => {

    if (req.body.name.length <= 2) {
        return res.status(400).send({ message: 'Nome não pode ser menor do que 3 caracteres ' })
    }



    try{
        
        const update = await uptadeProduct(req.body)

        if(!update) {
            return res.status(404).send({ error: "Produto não encontrado" });
        }
        else{
            res.status(201).send('Produto Atualizado')
        }
    }

    catch(error) {
        console.log(error);
           
    }

}

const controlerDelete = async (req,res) => {


    const deleted = await deleteProduct(req.body.name)

    try{
        if(!deleted) {
            return res.status(404).send({ error: "Produto não encontrado" });
    
        } 
    
        else{
            res.status(201).send('Produto Deletado')
        }

    }
    catch(error) {
        console.log(error);
        
    }

}

const controllerAllProduct = async (req, res) => {
    try{
        const all = await getAllProduct()

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
    controllerCreateProduct,controllerUpdate,controlerDelete,controllerAllProduct
}
