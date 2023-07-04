const axios = require('axios');
const { Type }  = require('../db');






const getTypeApi = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    const types = response.data.results;
    const typeNames = [];
    for (let type of types) {
        let existingType = await Type.findOne({ where: { name: type.name } }); 
        if (existingType) {
        typeNames.push(existingType);
    } else {
        const newType = await Type.create({
        name: type.name,
        });
        typeNames.push(newType);
    }
    }
    return typeNames;
};
    


module.exports = getTypeApi;












