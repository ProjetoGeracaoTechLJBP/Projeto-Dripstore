const bcrypt = require('bcrypt');

async function hashUser(password) {
    try {
        const saltRound = parseInt(process.env.HASH_SALTS) 
        const passwordEncrypted = await bcrypt.hash(password, saltRound);
        return passwordEncrypted
    } catch(error) {
        console.error("[ERROR]: ", error);
        return false
    }
};

module.exports = { hashUser }
