const getAllPokemonsNew = require("../controllers/allPokemonController");










const pokemonsApiDb = async (req, res) => {
    try {
        const pokemonsDb = await getAllPokemonsNew();
        res.status(200).json(pokemonsDb)

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}











module.exports = pokemonsApiDb;