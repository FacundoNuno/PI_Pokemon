//Siempre tengo en mis handlers mis try y catch. con req y res
const  allPokemons  = require('../controllers/pokemonController')







const getAllPokemons = async (req, res) => {
    try {
        const pokemons = await allPokemons();
        res.status(200).json(pokemons)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}











module.exports = getAllPokemons;















