const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

const character = {
    id: 923,
    name: 'dai',
    species: 'Human',
    gender :'Female',
    status : 'Alive',
    origin :{
        name : 'Earth (c-137)'
    },
    image: 'image.jpg'
}

describe("Test de RUTAS" ,  () => {
    describe('GET /rickandmorty/character/:id',  () => {

        it( 'Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        } )
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async() => {
            const character = await agent.get('/rickandmorty/character/1')
           const propiedades = ["id", "name", "species", "gender", "status", "origin" ,"image"]
           
           propiedades.forEach( (propiedad) => {
                expect(character.body).toHaveProperty(propiedad);
           })
        })

        it('Si hay un error responde con status: 500', async () => {
            const character = await  agent.get('/rickandmorty/character/lklkl');
            expect(character.statusCode).toBe(500);
        })
    })

    describe("GET /rickandmorty/login", () => {
        it(' true Acceso a login con la infornacion correcta y responde con un objeto' , async () =>{
            const login = await agent.get(`/rickandmorty/login?email=David_zu.17@hotmail.com&password=1234567`)
            
            expect(login.body).toEqual({access:true});
        })
        it(' false Acceso a login con la infornacion correcta y responde con un objeto' , async () =>{
            const login = await agent.get(`/rickandmorty/login?email=Davidzu.17@hotmail.com&password=1234567`)
            
            expect(login.body).toEqual({access:false});
        })

       
    })

    describe("POST /rickandmorty/fav" , () => {
        it('Debe de guardar personaje en favoritos' , async () => {
            const favoritos = await agent.post('/rickandmorty/fav').send(character)
            expect(favoritos.body).toContainEqual(character);
        })

        it('Se agrega personaje a favoritos sin perder los anteriores' , async () =>{
            character.name = 'kol'
            character.id = 23
            const favoritos = await agent.post('/rickandmorty/fav').send(character)
            expect(favoritos.body.length).toBe(2);

        })

    })


    describe("DELETE /rickandmorty/fav/:id" , () =>{
        it('Si no hay personaje con id indicado no debe de modificar la lista de favoritos y retornar el arreglo' , async ()=>{
            const listFav = await await agent.delete('/rickandmorty/fav/56')
            expect(listFav.body.length).toBe(2);
        })

        it('Si  hay personaje con id indicado debe de modificar la lista de favoritos y retornar el arreglo modificado' , async ()=>{
            const listFav = await await agent.delete('/rickandmorty/fav/23')
            expect(listFav.body.length).toBe(1);
        })

    })


})