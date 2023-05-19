// const axios = require('axios');

// const getCharById = ( res , id ) => {
   
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then( reponse => reponse.data)
//     .then( ( {name, gender , species ,origin ,image ,status} ) => {
//         const characterId = {
//             id,
//             name,
//             gender,
//             species,
//             origin : origin?.name,
//             image,
//             status,
//         }

//         return res.writeHead( 200, {'content-type':'application/json'}).
//             end( JSON.stringify(characterId))
//         }           
//     ).catch(error => {
//         return res.writeHead( 500, {'content-type':'text/plain'})
//                 .end( error.message )
//     } )
// }


const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async( req , res ) => {
    // const { id } = req.params;
    // axios(`${URL}/${id}`)
    // .then( reponse => reponse.data)
    // .then( ( {name, gender , species ,origin ,image ,status} ) => {
                
    //     if(name){
    //         const characterId = {
    //             id,
    //             name,
    //             gender,
    //             species,
    //             origin : origin?.name,
    //             image,
    //             status,
    //         }
    //         return res.status(200).json(characterId);
    //     }
    //     return res.status(404).send('Not found')

    //     })
    //     .catch(error => res.status.status(500).send(error.message))
    

    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`)

        if(!data. name) throw new Error (`ID Not found : ${id}`)

        const characterId = {
            id : data.id,
            name : data.name,
            gender : data.gender,
            species :data.species,
            origin : data.origin?.name,
            image: data.image,
            status :data.status,
        }
        return res.status(200).json(characterId);
                 


    } catch (error) {
        error.message.includes('ID')? res.status(400).send(error.message) 
                                    : res.status(500).send(error.message) 
    }


}

module.exports = {
    getCharById,
}