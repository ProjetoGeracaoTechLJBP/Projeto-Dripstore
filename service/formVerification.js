const { User } = require('../models');
const bcrypt = require('bcrypt')

async function loginVerify(data) {
    try {
        const email = data.email;
        const password = data.password;
        let passwordHashBD;

        const userExist = await User.findOne({
            where: {
                email: email
            }
        });

        async function compareHash(passwordForm, passwordEncrypted) {
            const match = await bcrypt.compare(passwordForm, passwordEncrypted)
            return match

        }
        if (userExist) {
            passwordHashBD = userExist.password;
        };

        let response;

        await compareHash(password, passwordHashBD)
            .then(match => {
                if (match) {
                    response = "true"
                    console.log("Login Efetuado com sucesso!");
                } else {
                    console.log("Email ou Senha inválido!");
                    response = "false"
                }
            });
        // console.log(response)
        return response
    } catch (error) {
        console.log("[ERROR]: ", error);
        return false
    }
};

module.exports = { loginVerify }

