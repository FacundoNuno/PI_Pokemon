import { useEffect } from "react";
import { getPokemonById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from  "./detail.module.css";




const Details = () => {


    const {id} = useParams();
    const dispatch = useDispatch();
    const pokemonsId = useSelector((state) => state.pokemonId);
    useEffect(() => {
        dispatch(getPokemonById(id));
    },[]);




    return(
        <div className={style.containerDetail}>
            <div className={style.detail}>
            <p>Id: {pokemonsId.id}</p>
            <h2>{pokemonsId.name}</h2>
            <img src={pokemonsId.image} alt="img" />
            <div className={style.detail2}>
            <p>Attack: {pokemonsId.attack}</p>
            <p>Defense: {pokemonsId.defense}</p>
            <p>Speed: {pokemonsId.speed}</p>
            <p>Height: {pokemonsId.height}</p>
            <p>Weight: {pokemonsId.weight}</p>
            <p className={style.type}>Type: {pokemonsId.type}</p>
            </div>
            </div>
        </div>
    )
}


export default Details;