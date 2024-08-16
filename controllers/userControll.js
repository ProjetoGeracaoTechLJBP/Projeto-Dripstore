//const { User } = require('../models');
// const { INSERT } = require('sequelize/lib/query-types');
// const { User } = require('../models/user.js');
const { emailValidation } = require('../service/userValidator.js')
const { hashUser } = require('../service/userHash.js')
const { createUser } = require('../repository/createUser.js')
const { loginVerify } = require('../service/formVerification.js')
const {uptadeUser} = require('../repository/updateUser.js')
const {deleteUser} = require('../repository/deleteUser.js')
const {readUser} = require('../repository/readUser.js')
const {getAllUsers} = require('../repository/getAllUsers.js')

const controllerGetUser = async(req,res) => {
    const isEmailValid = emailValidation(req.body.email)
    
    if (!isEmailValid) {
        return res.status(400).send({ error: 'Email Inválido' })
    }

    try {

        const read = await readUser(req.body.email)
        if(!read) {
            return res.status(404).send({ error: "Usuário não encontrado" });
        }
        else{
            res.status(200).send('Usuário existente')
        }
        

    } catch(err) {

    }


}

const controllerCreateUser = async (req, res) => {

    if (req.body.firstname.length <= 2 || req.body.surname.length <= 2) {
        return res.status(400).send({ message: 'Nome ou sobrenome não pode ser menor do que 3 caracters ' })
    }

    const isEmailValid = emailValidation(req.body.email)

    if (!isEmailValid) {
        return res.status(400).send({ error: 'Email Inválido' })
    }

    try {
        const hashedPassword = await hashUser(req.body.password)

        if (hashedPassword === false) {
            console.log(`${hashedPassword} Hash não foi feito!`);

        }

        req.body.password = hashedPassword
        console.log(req.body);

        const createdUser = await createUser(req.body)
        if (!createdUser) {
            res.status(400).send({ error: 'Ocorreu um erro ao se cadastrar!/usuário com email já existe' })
        }
        else {
            res.status(200).send('Inserção feita')
        }
    }
    catch (error) {
        console.log(error);

        res.status(500).send({ error: 'An error occurred during user creation' });
    }

};

const controllerLogin = async (req, res) => {
    const isEmailValid = emailValidation(req.body.email)
    if (!isEmailValid) {
        return res.status(400).send({ error: "Email Inválido" });
    }

    const resultLoginVerify = await loginVerify(req.body)
    console.log(resultLoginVerify)
    if (resultLoginVerify === "true") {
        res.status(200).send({ message: "Seja Bem-vindo de volta!!!" })
    } else if (resultLoginVerify === "false") {
        res.status(401).send({ error: "Senha ou Email estão incorretos" })
    } else {
        res.status(500).send({ error: "Error de servidor" })
    }
}

const controllerUpdate = async (req, res) => {

    if (req.body.firstname.length <= 2 || req.body.surname.length <= 2) {
        return res.status(400).send({ message: 'Nome ou sobrenome não pode ser menor do que 3 caracteres ' })
    }

    const isEmailValid = emailValidation(req.body.email)
    if(!isEmailValid) {
        return res.status(400).send({ error: "Email Inválido" });
    }

    try{
        
        const update = await uptadeUser(req.body)

        if(!update) {
            return res.status(404).send({ error: "Usuário não encontrado" });
        }
        else{
            res.status(201).send('Usuário Atualizado')
        }
    }

    catch(error) {
        console.log(error);
           
    }

}

const controlerDelete = async (req,res) => {

    const isEmailValid = emailValidation(req.body.email)

    if(!isEmailValid) {
        return res.status(400).send({ error: 'Email Inválido' })
    }

    const deleted = await deleteUser(req.body.email)

    try{
        if(!deleted) {
            return res.status(404).send({ error: "Usuário não encontrado" });
    
        } 
    
        else{
            res.status(201).send('Usuário Deletado')
        }

    }
    catch(error) {
        console.log(error);
        
    }

}

const controllerAllUsers = async (req, res) => {
    try{
        const allUsers = await getAllUsers()

        if(!allUsers) {
            res.status(404).send('Usuário não encontrado')
        }
        else{
            res.status(200).json((allUsers))
        }
    } catch(error) {
        console.log(error);
        
    }
}

module.exports = {
    controllerCreateUser, controllerLogin,controllerUpdate,controlerDelete,controllerGetUser,controllerAllUsers
}
