
import { ADD_FAV , REMOVE_FAV ,FILTER, ORDER} from './action.Types';


const inicitialState = {
    myFavorites:[],
    allCharacters:[],
}

export default function reducer ( state= inicitialState, {type, payload}){
    switch (type) {
        case ADD_FAV:
                return { ...state, myFavorites: payload, allCharacters: payload };
        case FILTER:
            const allCharactersFilter = state.allCharacters.filter((character)=> character.gender === payload);
            return{
                ...state,
                myFavorites :
                 payload === 'allCharacters'? [...state.allCharacters] : allCharactersFilter,
            }
        case ORDER:
            const CopyCharacters = [...state.allCharacters]
            return{
                ...state,
                myFavorites: payload ==='A'? CopyCharacters.sort( ( a , b ) => a.id - b.id ): CopyCharacters.sort( ( a , b ) => b.id - a.id)
            }
        case REMOVE_FAV:
                return { ...state, myFavorites: payload  , allCharacters: payload };

        
        default:
            return {...state};
    }
}

