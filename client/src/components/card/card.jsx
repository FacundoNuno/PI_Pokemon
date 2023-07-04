import style from"../card/card.module.css"


const Card = ({name, image, type, id}) => {









    return(
        
            <div className= {style.cardContainer} >
                <img  src={image["versions"]["generation-v"]["black-white"]["animated"]["front_default"]} alt="img" />
                <h3>{name}</h3>
                <p>Type: {type.map(elem => " "+elem)}</p>
            </div>
        
    )
}


export default Card;