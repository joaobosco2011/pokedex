import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Importação da imagem de perfil
import profileImg from '../img/joaoboscojunior.jpg'

// Importação da bibliotece CLASSNAMES para modificar o METERIAL-UI
import classNames from 'classnames';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
});


// ----------------------------------==--------------------------------
const CardSobre = ({classCardSobre}) => {
  const classes = useStyles();

  return (
    <Card className={classNames(classCardSobre, classes.root)}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="João Bosco Junior"
          height="600"
          image= {profileImg}
          title="João Bosco Junior"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            João Bosco Junior
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Meu nome é João Bosco Junior e sou um entusiasta em tecnologia, programação e desenvolvedor FrontEnd Junior em busca de crescimento pessoal e profissional. Esse desafio me fez aprender e superar os obstáculos que encontrei durante a trilha e conseguir alcançar os meus objetivos.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://github.com/joaobosco2011" 
            target='blanck' 
            rel="noopener noreferrer"
            style={{textDecoration: "none"}}
          >
            GitHub
          </a>
        </Button>
        <Button size="small" color="primary">
          <a href="https://github.com/joaobosco2011/pokedex" 
            target='_blank' 
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}
          >
            Provu Pokedex
          </a>
        </Button>
        <Button size='small' color='primary'>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-bosco-junior-8a9798115/" 
            target='_blank' 
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}
          >
            linkedin
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardSobre