const dotenv = require('dotenv');
const express = require('express');
const { sequelize } = require('./models');
const routes = require('./routes');
const {createDataBase} = require('./config/database')
const {runMigrations} = require('./service/runMigrate')
const {undoMigrations} = require('./service/undoMigrations')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())
app.use('/api',routes)

dotenv.config() 
const PORT = 3000;


app.listen(PORT,  async () => {
    //await createDataBase();
    // undoMigrations()
    runMigrations();
    console.log(`O servidor está rodando na porta ${PORT}`);
    sequelize.authenticate().then(() => {
        console.log("Database conectado");

    }).catch (err => {
        console.log("err na operação: " + err); 
    }) 
});
