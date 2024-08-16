const { exec }= require('child_process');

function undoMigrations() {
    return new Promise((resolve, reject) => {
        exec('npx sequelize-cli db:migrate:undo:all', (error, stdout, stderr) => {
            if (error) {
                console.error(`Erro na execução das migrações: ${ error.message }`);
                return reject(error);
            }
            if (stderr) {
                console.error(`Erro: ${ stderr }`);
                return reject(new Error(stderr));
            }
            console.log(`Migrações executadas com sucesso: \n${ stdout }`);
            resolve();
        });
    }); 
} 
module.exports = {undoMigrations}