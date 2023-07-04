const axios = require('axios');
const {Pokemon, Type} = require('../db')




const getPokemonId = async (id) => {
    if (id.length <= 4){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = response.data;
        
        const pokemonObj = {
            id: pokemonData.id,
            name: pokemonData.name,
            image: pokemonData.sprites.other['official-artwork'].front_default,
            hp: pokemonData.stats.find((elem) => elem.stat.name === 'hp').base_stat,
            attack: pokemonData.stats.find((elem) => elem.stat.name === 'attack').base_stat,
            defense: pokemonData.stats.find((elem) => elem.stat.name === 'defense').base_stat,
            speed: pokemonData.stats.find((elem) => elem.stat.name === 'speed').base_stat,
            height: pokemonData.height,
            weight: pokemonData.weight,
            type: pokemonData.types.map((elem) => elem.type.name),
        };
        return pokemonObj;
    }else{
        const searchBd = await Pokemon.findByPk(id,{
            include: [
                {
                    model: Type,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            ]
        })
        return searchBd;
    }
};






module.exports = getPokemonId;
























