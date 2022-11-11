import React, {useEffect, useState} from "react";
import "./PokemonArt.scss"

const PokemonArt = ({source, typePrincipal}) => {

    return (
        <div className={`pokemon-art ${typePrincipal}`}>
            <img className="pokemon-art_image" src={source}/>
        </div>

    )
}

export default PokemonArt;