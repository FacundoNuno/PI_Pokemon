import style from"../card/card.module.css"


const Card = ({name, image, type, types, createDB, }) => {
    
    
    
    
    return(
        
        <div className= {style.cardContainer} >
                {<img  src={image} alt="img" />}
                <h3>{name}</h3>
                <p>{type?.map(type => " "+type)}</p>
                {createDB ? <p>{types?.map(type => " "+type.name)}</p> : null}
        </div>
        
    )
}


export default Card;