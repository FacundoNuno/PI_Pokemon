import { useState } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import logoPokemon from "../../assets/logo-home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Navbar = () => {
 const [byName, setByName] = useState("");

 const serchByName = (e) => {
  setByName(e.target.value);
 };

 return (
  <div className={styles.search_box}>
   <div className={styles.divImg}>
    <img width="170px" src={logoPokemon} alt="" />
   </div>
   <div className={styles.formContainer}>
    <form>
     <input type="text" placeholder="Search" onChange={serchByName} />
     <Link to={byName.length === 0 ? "/home" : `/pokemonsearch/${byName}`}>
      <button type="submit">Search Pokemon</button>
      
     </Link>
    </form>
   </div>
   <Link to={"/home"}><button className={styles.btnHome} type="submit">To Home</button></Link>
    <Link to={"/create"}><button  className={styles.btnCreate}>Create Pokemon</button></Link>
   <div className={styles.vacio}>
    <a
     target="blank"
     href="https://www.linkedin.com/in/facundo-jose-nu%C3%B1o-ureta-79ab85196/"
    >
     <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a target="blank" href="https://github.com/FacundoNuno">
     <FontAwesomeIcon icon={faGithub} />
    </a>
   </div>
  </div>
 );
};

export default Navbar;
