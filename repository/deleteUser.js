const { where } = require('sequelize');
const { User } = require('../models');

async function deleteUser(email) {
try{
    const emailUser = email
    const userDeleted = await User.destroy({
        where: {email: emailUser}
    })
    return userDeleted
}

catch(error) {
    console.log(error + "erro dentro do repository > deleteUser");
    
}

}

module.exports = {deleteUser}