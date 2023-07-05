import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../../redux/actions";
import style from './pokemonSearch.module.css'




const PokemonSearch = () => {

    
    const {name} = useParams();
    const dispatch = useDispatch();
    const pokemonsName = useSelector((state) => state.pokemonByName);

    // para manejar mi ciclo de vida del componente
    useEffect(() => {
        dispatch(getPokemonByName(name));
    },[name]);




    return(
    <div  className={style.containerSearch}>
        <div className={style.detail}>
            <p>Id: {pokemonsName.id}</p>
            <h2>{pokemonsName.name}</h2>
            <img src={pokemonsName.image} alt="img" />
            <p>Attack: {pokemonsName.attack}</p>
            <p>Defense: {pokemonsName.defense}</p>
            <p>Speed: {pokemonsName.speed}</p>
            <p>Height: {pokemonsName.height}</p>
            <p>Weight: {pokemonsName.weight}</p>
            <p>Type: {pokemonsName.namesTypes+" "}</p>
        </div>
    </div>
    ) 


    
}


export default PokemonSearch;