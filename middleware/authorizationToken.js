const { verifyTokenJWT } = require('../service/serviceToken.js');

const authorizationToken =  (authorization) => {
    
    const checked = verifyTokenJWT(authorization)

    if (checked) {
        //  res.status(200).json()
         return checked
    } else {
        // res.status(403).json()
        return checked
    }
};

module.exports = {
    authorizationToken
}