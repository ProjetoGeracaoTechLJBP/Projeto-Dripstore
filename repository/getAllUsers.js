const { User } = require('../models');

async function getAllUsers() {
    try{
        const users = await User.findAll()
        return users
    } catch(error) {
        console.log(error + 'erro dentro do arquivo getAllUsers do repository');
        
    }
 
}

module.exports = {
    getAllUsers
}