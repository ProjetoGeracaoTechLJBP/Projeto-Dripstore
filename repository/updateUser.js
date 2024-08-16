const { where } = require('sequelize');
const { User } = require('../models');

async function uptadeUser(body) {
try{
    const queryEmail = body.email
    // Caso não exista o usuário para atualizar,ou seja, 
    // não encontre, o sequelize não lançara um erro, e sim 0..
    const update = User.update(body,{
        where: {email: queryEmail} 
    }
)
return update
}
catch(error) {
    console.log(error + "Ocorreu dentro do arquivo updateUser,do repository");  
}
    
}
module.exports = {uptadeUser}