const jwt = require('jsonwebtoken');

const generationToken = (userEmail) => {
    console.log(userEmail);
    return jwt.sign({id: userEmail}, process.env.SECRET_KEY_JWT, {expiresIn: '1h'});
};

//Verificação de Token

const verifyTokenJWT = (token) => {
    try {
        return jwt.verify(token, process.env.SECRET_KEY_JWT);
    } catch (error) {
        return false
    }
};

module.exports = {
    generationToken, verifyTokenJWT
}
