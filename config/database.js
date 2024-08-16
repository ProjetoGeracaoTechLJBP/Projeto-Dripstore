const dotenv = require('dotenv');
const mysql = require('mysql2/promise');
dotenv.config() 
async function createDataBase() {
    // let conection 
    try {
        const conection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS
        })
        let result = await conection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`)
        await conection.end() 
        // console.log("Base de dados criada com sucesso!")
    } catch(error) {
        console.log(error)
    } 
};
module.exports = {
    createDataBase
}