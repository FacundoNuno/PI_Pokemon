const getTypeApi = require('../controllers/pokemonControllerTypes')




const getTypes = async (req,res) =>{
    try {
        let type = await getTypeApi();
        res.status(201).json(type);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = getTypes;



