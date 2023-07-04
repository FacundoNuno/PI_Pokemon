const  getPokemonId  = require('../controllers/pokemonControllerId')






const idHandler = async (req, res) => {
    const {id} = req.params
    try {
        const searchId = await getPokemonId(id)
        res.status(200).json(searchId)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}




module.exports = idHandler;
















