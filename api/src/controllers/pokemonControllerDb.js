const {Type, Pokemon} = require('../db');


const getPokemonsDb = async () => {
    try {
        const pokemons = await Pokemon.findAll({
            include: [{
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }]
    });
        return pokemons;
    } catch (error) {
        console.error(error);
        return [];
    }
};

module.exports = getPokemonsDb;