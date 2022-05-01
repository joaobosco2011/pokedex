import React from "react";
import CardSobre from './CardSobre'

// Importação das imagens
import githubImg from '../img/github.svg'
import pokeapiImg from '../img/pokeapi_256.png'
import linkedinImg from '../img/linkedin.svg'
import profileImg from '../img/joaoboscojunior.jpg'

// Importação do CSS
import './Sobre.css'

// Importação de componentes do METERIAL UI
import { Container, makeStyles } from "@material-ui/core";

// Configuração do CSS do componente CONTAINER do MATERIAL-UI
const useStyles = makeStyles((theme) => ({
    container: {
        padding: '10px auto',
        background: '#F9F9F9',
        borderRadius: '20px',
    },
}))


// Componente
const Sobre = () => {
    const classes = useStyles()

    return(
        <>
            <Container className={classes.container}>

                <CardSobre />

                <ul className="redes_sociais">
                    <a href="https://github.com/joaobosco2011" target='blanck'>
                        <img src={githubImg} alt='imagem-github'/>
                    </a>
                    <a href="https://github.com/joaobosco2011/pokedex" target='_blank'>
                        <img src={pokeapiImg} alt='imagem-repositório'/>
                    </a>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-bosco-junior-8a9798115/" target='_blank'>
                        <img src={linkedinImg} alt='imagem-linkedin'/>
                    </a>
                </ul>
            </Container>

        </>
    )
}

export default Sobre