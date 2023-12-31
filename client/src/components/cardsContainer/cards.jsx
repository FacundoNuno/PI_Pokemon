import Card from "../card/card";
import { Link } from "react-router-dom";
import styles from "./cards.module.css"







const Cards = ({pokemons}) => {

    
    

return(
    <div className={styles.cardsContainer}>
        <div className={styles.cardsList}>
        {pokemons?.map((poke, index) => (
        <Link key={index} to={`/detail/${poke.id}`}>
            <Card
                key={index}
                name={poke.name}
                image={poke.image}
                types={poke.createDB ? poke.types : null}
                type={poke.type}
                id={poke.id}
                createDB={poke.createDB}
            />
        </Link>
    ))}
    </div>
</div>
)
}


export default Cards;