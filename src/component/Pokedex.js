import React, { useEffect, useState } from 'react'

// Importação dos componentes da aplicação
import PokemonCard from './PokemonCard'

// Importação do css do componente POKEDEX
import './Pokedex.css'
    
// Componentes do MATERIAL-UI
import { Container, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'



// Configuração do CSS do componente CONTAINER do MATERIAL-UI
const useStyles = makeStyles((theme) => ({
    container: {
        background: '#F9F9F9',
        borderRadius: '10px'
    },
    card: {
        margin: '10px auto',
    },
}))


// ----------------------------------==--------------------------------
const Pokedex = () => {
    const classes = useStyles()

    // Array que recebe todos os pokemons
    const[allPokemons, setallPokemons] = useState([])
    // Variável para mudança de páginas na aplicação
    const[next_and_previous_page, setNextAndPreviousPage] = useState(0)
    

    // Traz o nome de cada pokemon
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${next_and_previous_page}&limit=20`)
        .then(response => response.json())
        .then(data => {
            setallPokemons(data.results)
            // console.log(data.results);
        })
    }, [next_and_previous_page])


    // Função que manipula a variável de mudança de página
    const handleOnClick = (operador) => {
        if (operador === '+') {
        setNextAndPreviousPage(next_and_previous_page + 20)
        } else {
        setNextAndPreviousPage(next_and_previous_page - 20)
        }
    }

    
    return (
        <>
            {/* <span className='contado_pagina'>{next_and_previous_page}</span> */}

            {/* Botões de avanço de páginas */}
            <div className='btn_next_and_previus_page'>
                {/* Botões com o desing do METERIAL-UI */}
                <Button className='btn_previus' variant="contained" color="primary" onClick={() => handleOnClick('-')}>
                    Página Anterior
                </Button>
                <Button className='btn_next' variant="contained" color="primary" onClick={() => handleOnClick('+')}>
                    Próxima Página
                </Button>
            </div>

            
            {/* Retrono do array com o nome de cada pokemon */}
            <Container className={classes.container}>
                <Grid 
                    container 
                    spacing={2}
                >
                    { 
                        allPokemons.map((item, index) => (
                            <Grid item xs={12} md={6} lg={4} xl={3}>
                                {/* Passado para o componente PokemonCard o nome de cada pokemon */}
                                <PokemonCard 
                                    name={item.name}
                                    // Passando pela props o nome da classe para centralizar cada card quando tiver somente um na tela
                                    classCard={classes.card}
                                />
                            </Grid>
                        ))         
                    }
                </Grid>
            </Container>                
        </>
    )
}

export default Pokedex