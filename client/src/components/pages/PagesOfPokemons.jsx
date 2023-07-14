import React from 'react'
import styles from './PagesOfPokemons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Pages = ({pokemonsPerPage, pokemons, newPage, pagePages}) => {
    
    const numberPage = [];
    const totalPages = Math.ceil(pokemons/pokemonsPerPage);
    
    for (let i = 0; i < totalPages; i++) {
        numberPage.push(i+1)
    }

    return (
    <div className={styles.pagesCountainer}>
        <button className={styles.buttonPages} type="button" onClick={()=>{pagePages > 1 && newPage(pagePages - 1)}} ><FontAwesomeIcon icon={faChevronLeft} className={styles.buttonPages}/></button>
        {
            numberPage &&
            numberPage.map(number =>(
                <div className={`${styles.pokemonsPage} ${pagePages === number ? styles.active : ''}`} key={number}> <p onClick={() => newPage(number)}>{number}</p> </div>
            ))
        }
        <button className={styles.buttonPages} type="button" onClick={()=>{pagePages < totalPages && newPage(pagePages + 1)}} ><FontAwesomeIcon icon={faChevronRight} className={styles.buttonPages}/></button>
    </div>
    )
}

export default Pages;