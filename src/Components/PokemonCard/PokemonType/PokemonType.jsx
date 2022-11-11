import React, { useEffect, useState } from "react";
import { faBug, faDove, faDroplet, faFire, faFlask, faLeaf, faMagic, } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PokemonType.scss"

const PokemonType = ({ type }) => {

    function getIcon(name) {

        switch (name) {
            case "grass":
                return faLeaf
            case "water":
                return faDroplet
            case "bug":
                return faBug
            case "fire":
                return faFire
            case "normal":
                return faCircle
            case "poison":
                return faFlask
            case "flying":
                return faDove
            default:
                console.log(name)
                return faMagic
        }

    }

    return (
        <div className="pokemon-type-container">
            {
                type.map(t => (
                    <FontAwesomeIcon icon={getIcon(t.type.name)} />
                ))}
        </div>
    )
}

export default PokemonType;