import axios from 'axios';

export const GET_POKEMON = 'GET_POKEMON';
export const GET_POKEMONID = 'GET_POKEMONID';
export const GET_POKEMONBYNAME = 'GET_POKEMONBYNAME';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const GET_TYPES = 'GET_TYPES';
export const FILTER_POKEMONSTYPE = 'FILTER_POKEMONSTYPE';
export const FILTER_POKEMONS_AZ = 'FILTER_POKEMONS_AZ';
export const FILTER_BY_ATTACK = 'FILTER_BY_ATTACK';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';



export const getAllPokemon = () => {
return async function (dispatch) {
    const response = await axios.get('https://backpokemon-1vqb.onrender.com/pokemons/allpokemons');
    return dispatch({
        type: GET_POKEMON,
        payload: response.data
        })
    }
}


export const getPokemonById = (id) => {
    return async function (dispatch) {
        const response = await axios.get(`https://backpokemon-1vqb.onrender.com/pokemons/${id}`);
        return dispatch({
            type: GET_POKEMONID,
            payload: response.data
            })
        }
}

export const getPokemonByName = (name) => {
    return async function (dispatch) {
        const response = await axios.get(`https://backpokemon-1vqb.onrender.com/pokemons/name?name=${name}`);
        return dispatch({
            type: GET_POKEMONBYNAME,
            payload: response.data
            })
        }
}

export const createPokemon = (body) => {
    return async function (dispatch) {
        const response = await axios.post(`https://backpokemon-1vqb.onrender.com/pokemons`, body);
        return dispatch({
            type: CREATE_POKEMON,
            payload: response.data
            })
        }
}


export const getTypes = () => {
    return async function (dispatch) {
        const response = await axios.get(`https://backpokemon-1vqb.onrender.compokemons/types`);
        return dispatch({
            type: GET_TYPES,
            payload: response.data
            })
        }
}


export const filterPokemons = (pokemonType) => {
return {
    type: FILTER_POKEMONSTYPE,
    payload: pokemonType
};
};

export const orderByName = (sortType) => {
return {
    type: FILTER_POKEMONS_AZ,
    payload: sortType,
};
};
export const orderByAttak = (sortType) => {
return {
    type: FILTER_BY_ATTACK ,
    payload: sortType,
}
};
export const orderByOrigin = (payload) => {
return {
    type: FILTER_BY_ORIGIN ,
    payload: payload,
};
};






