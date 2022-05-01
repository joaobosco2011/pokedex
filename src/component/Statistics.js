import React, { useEffect, useState } from "react";

const Statistics = ({name_statistics}) => {

    const[pokemon, setPokemon] = useState([])
    const[hp, setHp] = useState()
    const[attack, setAttack] = useState()
    const[defense, setDefense] = useState()
    const[specialAttack, setSpecialAttack] = useState()
    const[specialDefense, setSpecialDefense] = useState()
    const[speed, setSpeed] = useState()
    
    // const[urlAbilities1, setAbilities1] = useState()

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name_statistics}`)
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
    },[name_statistics])
    
    
    
    return (
        <>
            <h1>Statistics of {pokemon.name}</h1>
            <p>Hp: {hp}</p>
            <p>Attack: {attack}</p>
            <p>Defense: {defense}</p>
            <p>Special Attack: {specialAttack}</p>
            <p>Special Defense: {specialDefense}</p>
            <p>Speed: {speed}</p>

        </>
    )
}

export default Statistics



// Traz os dados de estatísticas
// useEffect(() => {
//     fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
//     .then(response => response.json())
//     .then(data => {
//       setBulbasaur(data)
//     })
//   },[])

// Traz os dados de sobre o pokemon
//   useEffect(() => {
//     fetch('https://pokeapi.co/api/v2/ability/65/')
//     .then(response => response.json())
//     .then(data => {
//       // console.log(data.effect_entries[0].effect);
//     })
//   },[])

//   useEffect(() => {
//     fetch('https://pokeapi.co/api/v2/ability/34/')
//     .then(response => response.json())
//     .then(data => {
//       // console.log(data.effect_entries[0].effect);
//     })
//   },[])