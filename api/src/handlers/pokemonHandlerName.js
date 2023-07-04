const  allPokemonName  = require('../controllers/pokemonControllerName')





module.exports = async (req, res) => {
    const {name} = req.query
    try {
        if(name){
        const toLower = name.toLowerCase();
        const namePoke  = await allPokemonName(toLower)
        res.status(200).json(namePoke)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

