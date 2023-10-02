import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, filterPokemons, orderByName, orderByAttak, orderByOrigin } from "../../redux/actions";
import styles from "./filters.module.css";
const Filters = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonsTypes);
  
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);


  const handleTypeChange = (event) => {
    const { value } = event.target;
    dispatch(filterPokemons(value));
  }

  const handleOrderName = (event) => {
    const { value } = event.target;
    dispatch(orderByName(value));
  }

  const handleOrderAttack = (event) => {
    const { value } = event.target;
    dispatch(orderByAttak(value));
  }

  const handleOrderApiDb = (event) => {
    const { value } = event.target;
    dispatch(orderByOrigin(value));
  }

  
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filters}>
        <select name="filterTypes" onChange={handleTypeChange} >
          <option value="All">All Types</option>
          {types.map((t, index) => (
            <option key={index} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
        <select name="filterOrigin" onChange={(e)=>{handleOrderApiDb(e)}}>
          <option value="All">All Origins</option>
          <option value="API">API</option>
          <option value="Database">Database</option>
        </select>
        <select name="filterByName" onChange={handleOrderName} >
          <option value="A-Z">Alphabetical (A-Z)</option>
          <option value="Z-A">Alphabetical (Z-A)</option>
        </select>
        <select name="orderByAttack" onChange={handleOrderAttack}>
          <option value="lowAttack">Attack (Lowest to Highest)</option>
          <option value="maxAttack">Attack (Highest to Lowest)</option>
        </select>
      </div>
    </div>
  );
};


export default Filters;
