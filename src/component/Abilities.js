import React, { useEffect, useState } from "react";
import axios from "axios";

const Abilities = ({name_pokemon_abilities}) => {

    const[urlAbilities1, setUrlAbilities1] = useState('')
    

    useEffect(() => {
        let url = `https://pokeapi.co/api/v2/pokemon/${name_pokemon_abilities}`
        axios.get(url)
            .then(response => {
                setUrlAbilities1(response.data.abilities[0].ability.url)
                // console.log(response.data);
            })
    }, [name_pokemon_abilities])


    return (
        <>
            <h1>Abilities</h1>
            {urlAbilities1}
        </>
    )
}

export default Abilities