const { Pokemon } = require("../db");
const { Type } = require("../db");


const createPokemon = async ( {name, hp, attack, defense, speed, height, weight, image, types} ) => {
    
    
    try {
        const newPokemon = await Pokemon.create(
            {
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            image
        }
        
    );
    //
    
    const myType = await Type.findAll({
        where: {
            name: types
        }})
        const myPokemon = await newPokemon.addTypes(myType);
        
        const pokeRelation = await Pokemon.findOne({
            where:{
                id: newPokemon.id,
        },
        include: [{
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }]
    })
    
    return pokeRelation;
}

catch (error) {
    throw Error({message: "No se pudo crear el pokemon"})
}
}

module.exports = createPokemon;


















