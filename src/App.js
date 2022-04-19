import React, { useEffect, useState } from 'react'

const App = () => {

  const[allPokemons, setallPokemons] = useState([])
  const[bulbasaur, setBulbasaur] = useState([])

  // Variáveis para montar o endereço de cada imagem dentro do array
  const https = 'https://img.pokemondb.net/artwork/large/'
  const jpg = '.jpg'

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
      setallPokemons(data.results)
    })
  }, [])


  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => response.json())
    .then(data => {
      setBulbasaur(data)
      console.log(data);
    })
  },[])


  return (
    <>
      <h1>Pokedex</h1>

      {
        allPokemons.map((item, index) => {
          return (
            
              <div>
                <img src={https + item.name + jpg} />
                <span key={index}> Nome: {item.name}, URL: {item.url} </span>                
              </div>

            
          )
        }) 
        
      }

      
      
    </>
  )
}

export default App;