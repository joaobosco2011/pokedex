import React, { useEffect, useState } from "react";
import BarraDeProgresso from "./barra_de_progresso/BarraDeProgresso";


// ----------------------------------==--------------------------------
const Estatisticas = ({nome_estatisticas}) => {

    const[pokemon, setPokemon] = useState([])
    const[hp, setHp] = useState()
    const[attack, setAttack] = useState()
    const[defense, setDefense] = useState()
    const[specialAttack, setSpecialAttack] = useState()
    const[specialDefense, setSpecialDefense] = useState()
    const[speed, setSpeed] = useState()
    

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nome_estatisticas}`)
        .then(response => response.json())
        .then(data => {
            setPokemon(data)
            setHp(data.stats[0].base_stat)
            setAttack(data.stats[1].base_stat)
            setDefense(data.stats[2].base_stat)
            setSpecialAttack(data.stats[3].base_stat)
            setSpecialDefense(data.stats[4].base_stat)
            setSpeed(data.stats[5].base_stat)

            // console.log(data.abilities[0].ability.name)
            // setAbilities1(data.abilities[0].ability.url)
        })
    },[nome_estatisticas])
    
    
    
    return (
        <>
            <h1>Statistics of {pokemon.name}</h1>
            <p>
                Hp: 
                {hp} 
                {<BarraDeProgresso valor_da_estatistica={hp}/>}
            </p>
            <p>
                Attack: 
                {attack} 
                {<BarraDeProgresso valor_da_estatistica={attack}/> }
            </p>
            <p>
                Defense: 
                {defense} 
                {<BarraDeProgresso valor_da_estatistica={defense}/>}
            </p>
            <p>
                Special Attack: 
                {specialAttack} 
                {<BarraDeProgresso valor_da_estatistica={specialAttack} />}
            </p>
            <p>
                Special Defense: 
                {specialDefense} 
                {<BarraDeProgresso valor_da_estatistica={specialDefense} />}
            </p>
            <p>
                Speed: 
                {speed} 
                {<BarraDeProgresso valor_da_estatistica={speed} />}
            </p>
            
        </>
    )
}

export default Estatisticas