//tentando importar o módulo exportado
//importando a pasta
//pegando o retorno do arquivo passado
//estamos basicamente continuando a equação
const Database = require('./db'); // "nesta pasta local que eu estou, chame o arquivo db"

const saveOrphanage = require('./saveOrphanage');

// o arquivo db passado me retorna o db no final de tupo, exportando esse resultado
// se eu importo esse arquivo, e associo a uma var, essa var possue o retorno do arquivo passado
// a Database possue o db que é retornado no arquivo anterior
//recebo o db  passado como parametro
Database.then( async db=> { // é como se eu tivesse continuando a expressão anterior
    //inserir dados na tabela
    //roda esse código
    //vai aguardar até ser executado
    //foi feito, ele vai pro proximo await
    //aguarda que seja feito
    //não preciso usar o "then()"

     await saveOrphanage(db, {
        lat: "-27.2252621",
        lng: "-49.6588005",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "996459958",
        images:[
            "https://images.unsplash.com/photo-1601564267830-523b71e24db0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",


            "https://images.unsplash.com/photo-1602389569471-5df5bde61968?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"



        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"

    })  


    //consultar dados da tabela
    const selectedOrphanages =  await db.all("SELECT * FROM  orphanages")
    console.log(selectedOrphanages)

    //consultar somente um orfanato ,pelo id

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id="2"')
    console.log(orphanage)


    //apagar um dado da tabela

   // console.log(await db.run("DELETE FROM orphanages WHERE id='6'"))
    





    
})