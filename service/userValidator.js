const validator = require('validator');

function emailValidation(email) {
    if(validator.isEmail(email)) {
        // console.log('oi');
        
        return true 
    } else {
        return false
    }
};

// getEmail = req.body.email
// emailValidation(getEmail)

module.exports = { emailValidation }