const axios = require('axios');



const allPokemons = async () => {
    
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=120');
    const results = response.data.results;

    const pokemonsFromApi = await Promise.all(results.map(async (pokemon) => {
        const pokemonGet = await axios.get(pokemon.url);
        const pokemonData = pokemonGet.data;
        
    const pokemonObj = {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites["versions"]["generation-v"]["black-white"]["animated"]["front_default"],
        hp: pokemonData.stats.find((elem) => elem.stat.name === 'hp').base_stat,
        attack: pokemonData.stats.find((elem) => elem.stat.name === 'attack').base_stat,
        defense: pokemonData.stats.find((elem) => elem.stat.name === 'defense').base_stat,
        speed: pokemonData.stats.find((elem) => elem.stat.name === 'speed').base_stat,
        height: pokemonData.height,
        weight: pokemonData.weight,
        type: pokemonData.types.map((elem) => elem.type.name),
    };
    return pokemonObj;
    }));
    return pokemonsFromApi;
};




module.exports =  allPokemons ;









