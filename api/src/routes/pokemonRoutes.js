const { Router } = require('express');

const  getAllPokemons  = require('../handlers/pokemonHandler')
const idHandler = require('../handlers/pokemonHandlerId');
const handlerName = require('../handlers/pokemonHandlerName')
const   handlerCreate = require('../handlers/pokemonHandlerCreate')
const getTypes = require('../handlers/pokemonHandlerTypes');
const pokemonsApiDb = require('../handlers/pokemonsHandlerDb');






const pokemonsRouter = Router();

pokemonsRouter.get('/allpokemons' , pokemonsApiDb)
pokemonsRouter.get('/types', getTypes)
pokemonsRouter.get('/', getAllPokemons)
pokemonsRouter.get('/name', handlerName)
pokemonsRouter.get('/:id', idHandler)
pokemonsRouter.post('/', handlerCreate)





module.exports = pokemonsRouter;