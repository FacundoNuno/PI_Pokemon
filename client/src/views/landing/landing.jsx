import styles from "./landing.module.css";
import { Link } from "react-router-dom";
// import pokemonlogo from '../../assets/bg-detail.jpg';

const Landing = () => {
 return (
  <div className={styles.divContainer}>
   <Link to="/home">
    <button className={styles.landing}>To Home</button>
   </Link>
  </div>
 );
};

export default Landing;
