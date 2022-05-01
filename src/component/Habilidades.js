import React, { useEffect, useState } from "react";
import './Habilidades.css'


// ----------------------------------==--------------------------------
const Habilidades = ({nome_pokemon_habilidades}) => {
    
    // Variável que guarda as habilidades de cada pokemon
    const[habilidades, setHabilidades] = useState([])
    
    // Faz a requisição para pegar o array com a habilidade de cada pokemon
    useEffect(() => {
        let url = `https://pokeapi.co/api/v2/pokemon/${nome_pokemon_habilidades}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setHabilidades(data.abilities)
                console.log(data.abilities)
            })
        }, [nome_pokemon_habilidades])
        

    return (
        <>
            <h1>Abilities</h1>

            {
                habilidades.map(item => (
                    <div>
                        <p className="item_habilidade">
                            {item.ability.name}
                        </p>
                    </div>
                ))
            }
        </>
    )
}

export default Habilidades