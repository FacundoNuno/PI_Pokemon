const { Router } = require('express');
const pokemonRouter = require('./pokemonRoutes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


router.use('/pokemons', pokemonRouter);



module.exports = router;



