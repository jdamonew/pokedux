import React, {useEffect, useState} from "react";
import PokemonCard from "../PokemonCard";
import "./style.scss";

const Header = () => {

    return (
        <div className="header">
            <img style={{width:200}} src="pokedux.png"/>
        </div>

    )
}

export default Header;