import React from "react";
import CardSobre from './CardSobre'


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
            </Container>

        </>
    )
}

export default Sobre