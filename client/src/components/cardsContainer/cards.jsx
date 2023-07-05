import Card from "../card/card";
import { Link } from "react-router-dom";
import styles from "./cards.module.css"







const Cards = ({pokemons}) => {

    

    

return(
    <div className= {styles.cardsContainer}>
        <div className= {styles.cardsList}>
            {pokemons?.map((poke, index) => (<Link key={index} to={`/detail/${poke.id}`}><Card key={index} name={poke.name} imageApi={poke.image} type={poke.type} id={poke.id} /></Link>))}
            {pokemons.filter((poke) => poke.createDB).map( (poke, index) => <Link key={index} to={`/detail/${poke.id}`}><Card key={index} name={poke.name} imageDB={poke.image} types={poke.types} id={poke.id} createDB={poke.createDB} /></Link>)}
        </div>
    </div>
)
}


export default Cards;