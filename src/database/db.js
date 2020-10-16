//aqui vai ficar o banco de dados da aplicação 


//importando o sqlite e jogando na constante Database toda a funcionalidade do sqlite
const Database = require('sqlite-async');

function execute (db) {
    
    //todas as instruções SQL que vão ser executadas: 
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT

        );
            
    `) 
}


//"sqlite-async abra meu diretorio database e coloque a pasta database.sqlite"
// aqui abre o meu banco de dados basicamente
//banco de dados criado quando bota a pasta database.sqlite
module.exports = Database.open(__dirname + '/database.sqlite').then(execute) // retorna o db ( as instruções sql)
//aqui vai pegar o resultado geral e exportar para outro documento






