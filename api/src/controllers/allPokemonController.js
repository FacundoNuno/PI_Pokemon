const allPokemons = require("./pokemonController");
const getPokemonsDb = require("./pokemonControllerDb");

const getAllPokemonsNew = async () => {
    const apiPokemons = await allPokemons();
    const dbPokemons = await getPokemonsDb();
    const allPokemon = [...apiPokemons, ...dbPokemons]; 

    return allPokemon;
}

module.exports = getAllPokemonsNew;
