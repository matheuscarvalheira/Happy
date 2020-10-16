
//importar lib/ pacote / depêndencia
const express = require('express'); // chama nossos pacotes/ depêndencias 
const path = require('path');
const pages = require('./pages.js');

console.log(pages)

//iniciando o express
const server = express()
server

    //utilizar body do req
    .use(express.urlencoded({extended: true}))
    //utilizando os arquivos estáticos
    .use(express.static('public')) // cria todas as rotas pros arquivos estáticos automaticamente

    //configurar template engine
    .set('views',path.join(__dirname, "views")) // configurando o caminho 
    .set('view engine', 'hbs')

    //rotas da aplicação
    server.get('/',pages.index)
    server.get('/orphanage',pages.orphanage)
    server.get('/orphanages',pages.orphanages)
    server.get('/create-orphanage',pages.createOrphanage)

    server.post('/save-orphanage', pages.saveOrphanage)
    



//ligar o servidor 

server.listen(5500) 