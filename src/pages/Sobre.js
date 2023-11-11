import React from "react";
import CardSobre from '../component/CardSobre'


// Importação do CSS
import './Sobre.css'

// Importação de componentes do METERIAL UI
import { Container, Grid, makeStyles } from "@material-ui/core";

// Configuração do CSS do componente CONTAINER do MATERIAL-UI
const useStyles = makeStyles((theme) => ({
    container: {
        background: '#F9F9F9',
        borderRadius: '10px',
    },
    card_sobre: {
        margin: '10px auto'
    },
}))


// -------------- --------------------==--------------------------------
const Sobre = () => {
    const classes = useStyles()

    return(
        <>
            <Container className={classes.container}>
                <Grid container >
                    <Grid item xs = {12} >
                        <CardSobre classCardSobre={classes.card_sobre} />
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}

export default Sobre