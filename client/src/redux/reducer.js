import { 
    CREATE_POKEMON, 
    FILTER_POKEMONSTYPE, 
    GET_POKEMON, 
    GET_POKEMONBYNAME, 
    GET_POKEMONID, 
    GET_TYPES, 
    FILTER_POKEMONS_AZ, 
    FILTER_BY_ATTACK,
    FILTER_BY_ORIGIN,
    } from "./actions"





let initialState = { 
    allPokemons: [],
    pokemonId: [], 
    pokemonByName: [], 
    pokemonCreated: [], 
    pokemonsTypes: [], 
    filteredCopy: [],
    sortedPokemons: [],
}  

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMON:
            return {
                ...state,
                allPokemons: action.payload,
                filteredCopy: action.payload
            }
        case GET_POKEMONID:
            return {
                ...state,
                pokemonId: action.payload
            }
        case GET_POKEMONBYNAME:
            return {
                ...state,
                pokemonByName: action.payload
            }
        case CREATE_POKEMON:
            return {
                ...state,
                pokemonCreated: action.payload
            }
        case GET_TYPES:
            return {
                ...state,
                pokemonsTypes: action.payload
            }
        case FILTER_POKEMONSTYPE:
            if(action.payload === "All"){
                
                return {
                    ...state,
                    allPokemons: [...state.filteredCopy]
                }
            }
            return {
                ...state,
                allPokemons: [...state.filteredCopy].filter(pokemon => pokemon.type.includes(action.payload))
            }
            
        case FILTER_POKEMONS_AZ:
            if (action.payload === "A-Z"){
                return {
                    ...state,
                    allPokemons: [...state.allPokemons].sort((a, b) => a.name.localeCompare(b.name))
                };
            }else if (action.payload === "Z-A"){
                return {
                    ...state,
                    allPokemons: [...state.allPokemons].sort((a, b) => b.name.localeCompare(a.name))
                };
            }
            break
        case FILTER_BY_ATTACK:
            if (action.payload === "lowAttack"){
                return {
                    ...state,
                    allPokemons: [...state.allPokemons].sort((a, b) => a.attack - b.attack)
                };
            }else if (action.payload === "maxAttack"){
                return {
                    ...state,
                    allPokemons: [...state.allPokemons].sort((a, b) => b.attack - a.attack)
                };
            }
            break
        case FILTER_BY_ORIGIN:
            const stateAllPokemons = state.allPokemons
            const helpOrigin = action.payload === "Database" ? stateAllPokemons.filter(pokemon => pokemon.createDB) : stateAllPokemons.filter(pokemon => !pokemon.createDB);
            return {
                ...state,
                filteredCopy: action.payload === "All" ? state.allPokemons : helpOrigin
            }
            
            default:
                return state
            }
            
        }



export default rootReducer;





















