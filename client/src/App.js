import "./App.css";
import axios from "axios";
import Landing from "./views/landing/landing";
import Home from "./views/home/home";
import Detail from "./views/detail/detail";
import Create from "./views/create/create";
import Pokemonsearch from "./views/searchPokemon/pokemonSearch";
import { Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

axios.defaults.baseURL = "http://localhost:3001/";

function App() {
 const location = useLocation();
 const showNavbar = location.pathname !== "/";

 return (
  <div>
   {showNavbar && <Navbar />}
   <Route exact path="/home" component={Home} />
   <Route path="/detail/:id" component={Detail} />
   <Route path="/create" component={Create} />
   <Route exact path="/" component={Landing} />
   <Route path="/pokemonsearch/:name" component={Pokemonsearch} />
  </div>
 );
}

export default App;
