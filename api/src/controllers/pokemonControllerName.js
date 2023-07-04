const axios = require('axios');
const {Pokemon, Type} = require('../db')
const { Op } = require('sequelize')

module.exports = async (name) => {
  try {
    // Buscar en la base de datos por el nombre del Pokémon
    const searchDbName = await Pokemon.findOne({ where: { name:{ [ Op.iLike ]: `%${name}%` },
      }});
      //Busco en la BDD los tipos de los pokemons creados// desee aca hasta linea 14
      const filterTypes = await searchDbName.getTypes();
      const namesTypes = filterTypes.map(el => el.name)
      
                               ////// hasta aca //////
    if (searchDbName.length) {
      // Si se encuentra en la base de datos, lanzar un error
      throw Error();
    }
    // Devolver el resultado de la búsqueda en la base de datos con el searchDbName y ahora le puse el ...serachDbName.dataValues, namesTypes para encontrar los tipos de el pokemon creados
    // 
    return {...searchDbName.dataValues, namesTypes};
  } catch (error) {
    // Si no se encuentra en la base de datos, hacer una solicitud a la API de Pokémon
    const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (pokemonData) {
      // Si se encuentra en la API de Pokémon, construir un objeto con los datos relevantes
      const allPokemApi = {
        id: pokemonData.data.id,
        name: pokemonData.data.name,
        type: pokemonData.data.types.map((el) => el.type.name),
        hp: pokemonData.data.stats[0].base_stat,
        attack: pokemonData.data.stats[1].base_stat,
        defense: pokemonData.data.stats[2].base_stat,
        speed: pokemonData.data.stats[3].base_stat,
        height: pokemonData.data.height,
        weight: pokemonData.data.weight,
        image: pokemonData.data.sprites.other['official-artwork'].front_default,
      };

      // Devolver el objeto con los datos del Pokémon desde la API
      return allPokemApi;
    }
  }
};

