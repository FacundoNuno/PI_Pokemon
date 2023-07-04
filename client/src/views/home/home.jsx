import styles from "../home/home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon } from "../../redux/actions";
import Cards from "../../components/cardsContainer/cards";
import Pages from "../../components/pages/PagesOfPokemons";
import Filters from "../../components/filters/filters";


const Home = () => {

  
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);

  //creo los estados uno para en que pagina estoy y el otro parea cuantos pokemons voy a mostrar por pagina
  const [pagePages, setPagePages] = useState(1);
  const [pokemonsPerPage] = useState(12);
  
  const indexLastPokemon = pagePages * pokemonsPerPage; // indice del ultimo pokemon = 12
  const indexOfFirstPokemon = indexLastPokemon - pokemonsPerPage; // obtengo el indice de el primero pokemon de cada pagina (pagina 2)indice[0] = 12
  const actualPokemon = pokemons.slice(indexOfFirstPokemon, indexLastPokemon);
  
  useEffect(() => {
    dispatch(getAllPokemon());
  }, [dispatch]);

// creo la funcion para actualizar el valor del estado que seria en que pagina estoy
 const newPage = (num) => {
  setPagePages(num);
 };

 return (
  <div className={styles.home}>
    <Filters/>
   <Pages
    pagePages={pagePages}
    newPage={newPage}
    pokemons={pokemons.length}
    pokemonsPerPage={pokemonsPerPage}
   />
   <Cards pokemons={actualPokemon} />
   
  </div>
 );
};

export default Home;
