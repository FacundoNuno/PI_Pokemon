import style from"../card/card.module.css"


const Card = ({name, imageDB, type, id, types, createDB, imageApi}) => {



    
    
    
    
    return(
        
        <div className= {style.cardContainer} >
                {!createDB?<img  src={imageApi } alt="img" />:null}
                {createDB ? <img src={imageDB} alt="img" /> : null}
                <h3>{name}</h3>
                <p>Type: {type?.map(elem => " "+elem)}</p>
                {createDB ? <p>{types?.map(elem => " "+elem.name)}</p> : null}
            </div>
        
    )
}


export default Card;