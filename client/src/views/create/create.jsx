import { useDispatch } from 'react-redux'
import { useState  } from 'react'
import styles from './create.module.css'
import OptionTypes from '../create/optionType'
import { createPokemon } from '../../redux/actions'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

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
        dispatch(createPokemon(creation));
    }
    
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
                    <select className={styles.selectNone} multiple name="types" onChange={handleTypeChange} />
                    <OptionTypes onChangeType={(e) => handleTypeChange(e, 0)} />
                    <OptionTypes onChangeType={(e) => handleTypeChange(e, 1)} />
                    <Link to='/home'><button onClick={handlerSendPokemon}>Create New Pokemon</button></Link>
                </form>
            </div>
        </div>
    )
}


export default Create;
