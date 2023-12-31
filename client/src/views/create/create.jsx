import { useDispatch } from 'react-redux'
import { useState  } from 'react'
import styles from './create.module.css'
import OptionTypes from '../create/optionType'
import { createPokemon } from '../../redux/actions'


const Create = () => {

    const dispatch = useDispatch();
    
    
    const [creation, setCreation] = useState(
        {
            "name": "",
            "hp": 0,
            "attack": 0,
            "defense": 0,
            "height": 0,
            "weight": 0,
            "speed": 0,
            "image": "",
            "types": ["", ""],
            "createDB": true
            }
    )
    
    const handlerCreate = (e) => {
        const { name, value } = e.target;
        let parsedValue = value;
        if (!isNaN(value)) {
        parsedValue = Number(value);
        }
        setCreation({
        ...creation,
        [name]: parsedValue
        });
    };

    const handleTypeChange = (e, index) => {
        const selectedTypes = [...creation.types];
        selectedTypes[index] = e.target.value;
        setCreation({
        ...creation,
        types: selectedTypes
        });
    };
    
    

    const handlerSendPokemon = () => {
        if (creation.name.trim() === '' && creation.name.length === 0) {
        alert('Por favor, ingresa el nombre del Pokémon.');
        return;
        }
    
        if (/\d/.test(creation.name)) {
        alert('El nombre del Pokémon no puede contener números.');
        return;
        }
    
        if (!creation.image.startsWith('http')) {
        alert('Por favor, ingresa una URL válida para la imagen del Pokémon.');
        return;
        }
    
        if (creation.hp < 0 && creation.hp > 1000) {
        alert('La vida del Pokémon no puede ser un valor negativo ni mayor a 1000.');
        return;
        }
    
        if (creation.attack < 0 && creation.attack > 1000) {
        alert('El ataque del Pokémon no puede ser un valor negativo ni mayor a 1000.');
        return;
        } 
        
    
        if (creation.defense < 0 && creation.defense > 1000) {
        alert('La defensa del Pokémon no puede ser un valor negativo ni mayor a 1000.');
        return;
        } 
        
    
        if (creation.speed < 0 && creation.speed > 1000) {
        alert('La velocidad del Pokémon no puede ser un valor negativo ni mayor a 1000.');
        return;
        } 
        
    
        if (creation.height < 0 && creation.height > 1000) {
        alert('La altura del Pokémon no puede ser un valor negativo ni mayor a 1000.');
        return;
        } 
        
    
        if (creation.weight < 0 && creation.weight > 1000) {
        alert('El peso del Pokémon no puede ser un valor negativo ni mayor a 1000.');
        return;
        } 
        
    
        dispatch(createPokemon(creation));
    };
    
    return(
        <div >
            <div className={styles.form}>
                <form >
                    <h2>Name</h2>
                    <input name='name' type="text" onChange={handlerCreate} />
                    <h2>Image</h2>
                    <input name='image' type="text" onChange={handlerCreate} />
                    <h2>Life</h2>
                    <input name='hp' type="text" onChange={handlerCreate} />
                    <h2>Attack</h2>
                    <input name='attack' type="text" onChange={handlerCreate} />
                    <h2>Defense</h2>
                    <input name='defense' type="text" onChange={handlerCreate} />
                    <h2>Speed</h2>
                    <input name='speed' type="text" onChange={handlerCreate} />
                    <h2>Height</h2>
                    <input name='height' type="text" onChange={handlerCreate} />
                    <h2>Weight</h2>
                    <input name='weight' type="text" onChange={handlerCreate} />
                    <h2>Type</h2>
                    <select className={styles.selectNone} multiple name="types" onChange={handleTypeChange} onClick={handlerSendPokemon} />
                    <OptionTypes onChangeType={(e) => handleTypeChange(e, 0)} />
                    <OptionTypes onChangeType={(e) => handleTypeChange(e, 1)} />
                    <button onClick={handlerSendPokemon}>Create New Pokemon</button>
                </form>
            </div>
        </div>
    )
}


export default Create;
