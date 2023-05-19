// const http = require('http');
// const data = require('./utils/data');
// const {getCharById} = require('./controllers/getCharById')

// http.createServer((request , response) => {
//     response.setHeader('Access-Control-Allow-Origin', '*');

    // if( request.url.includes('/rickandmorty/character')){
    //     const id = request.url.split('/').at(-1);
    //     const characterFound = data.find((character) =>  character.id === +id ) 
        
    //     return response
    //         .writeHead(200 , {'content-type':'application/json'})
    //         .end(JSON.stringify(characterFound))
    // }
    
//     if (request.url.includes('/rickandmorty/character')){
//         const id = request.url.split('/').at(-1);
//         getCharById(response, id)
//     }
       

// })
// .listen(3001,'localhost');

const server = require("./app")
const PORT = 3001;
const { conn } = require('./DB_connection')

conn.sync({ force: true }).then(()=> {
    server.listen(PORT, ()=> console.log('Server raised in port: ' + PORT))
})



// server.listen(PORT, async() =>  
//     {
//        await conn.sync({force:true})
//         console.log('Server raised in port: ' + PORT)
//     })
       







 