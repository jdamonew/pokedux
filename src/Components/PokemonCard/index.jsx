import React, {useEffect, useState} from "react";
import PokemonArt from "./PokemonArt/PokemonArt";
import PokemonType from "./PokemonType/PokemonType";
import "./style.scss";

const PokemonCard = ({name,url}) => {

    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)

    function getPokemonList(){

        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(response => {
                setPokemon(response)
            })
            .catch(console.error)
            .finally(()=> setLoading(false))
    }

    function formatId(id){
        if(id < 10){
            return "00"+id
        }else if(id < 100){
            return "0"+id
        }else{
            return id
        }
    }

    useEffect(()=>{
        getPokemonList()
    },[])

    return (
        
        loading ?
        <div className={`pokemon-card`}>
            "Carregando"
        </div>
        :
            <div className={`pokemon-card`}>
                <PokemonArt 
                    typePrincipal={pokemon?.types[0].type.name} 
                    source={pokemon?.sprites?.other.dream_world.front_default}/>
                <div className="pokemon-card_datail">
                    <div className="pokemon-card_datails-principal">
                        <p className="pokemon-card_id">{formatId(pokemon.id)}</p>
                        <p className="pokemon-card_name">{name}</p>
                    </div>
                    <PokemonType type={pokemon?.types}/>
                </div>
            </div>
        

    )
}

export default PokemonCard;