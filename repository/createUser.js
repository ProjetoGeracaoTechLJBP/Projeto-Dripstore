const { User } = require('../models');

async function createUser (data) {
    try {
        const users = await User.create(data);
        console.log('estou aqui');
        return users 
    } catch(err) {
        const error =console.log(`${err}`);  
    }
};

module.exports = {createUser }