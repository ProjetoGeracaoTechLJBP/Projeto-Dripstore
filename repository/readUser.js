const { where } = require('sequelize');
const { User } = require('../models');

async function readUser(email) {
    try{
        const read = await User.findOne({
            where: {email:email}
  }
 )
 return read
} 
catch(erro) {
    console.log(erro + 'Erro no repository > repository');
    
}
}
module.exports = {readUser}