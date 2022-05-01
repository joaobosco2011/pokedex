import React, { useEffect, useState } from "react";
import axios from "axios";

const Abilities = ({name_pokemon_abilities}) => {

    const[habilidades, setHabilidades] = useState([])
    

    useEffect(() => {
        let url = `https://pokeapi.co/api/v2/pokemon/${name_pokemon_abilities}`
        axios.get(url)
            .then(response => {
                setHabilidades(response.data.abilities)
                console.log(response.data.abilities);
            })
    }, [name_pokemon_abilities])


    return (
        <>
            <h1>Abilities</h1>

            {
                habilidades.map(item => (
                    <div>
                        {item.ability.name}
                    </div>
                ))
            }
        </>
    )
}

export default Abilities