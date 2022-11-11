import React, {useEffect, useState} from "react";
import PokemonCard from "../PokemonCard";
import "./style.scss";

const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([])

    function getPokemonList(){
        const url = "https://pokeapi.co/api/v2/pokemon/"

        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(response => setPokemonList(response.results))
            .catch(console.error);
    }

    useEffect(()=>{
        getPokemonList()
    },[])

    return (
        <div className="pokemon-list">
            {pokemonList.map(pokemon=>(
                <PokemonCard 
                    name={pokemon.name}
                    url={pokemon.url}    
                />
            ))}
        </div>

    )
}

export default PokemonList;