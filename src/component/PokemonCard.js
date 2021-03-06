import React, { useEffect, useState } from "react";

// Importação dos componentes do MATERIAL UI para redenrizar o PokemonCard
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Importação dos componentes Estatíticas e Habilidades
import Estatisticas from './Estatisticas';
import Habilidades from './Habilidades';

// Importação da bibliotece CLASSNAMES adicionar classas e modificar o METERIAL-UI
import classNames from 'classnames';


// Configuração do tema do componente PokemonCard
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


// ----------------------------------==--------------------------------
const PokemonCard = ({name, classCard}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  // Fetch para pegar a img de cada pokemon da própria API
    const [urlImg, setUrlImg] = useState('')

    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
          .then(response => response.json())
          .then(data => {
              setUrlImg(data.sprites.front_default)
          })
    },[name])



  return (
    <Card className={classNames(classCard, classes.root)}>
      <CardMedia
        className={classes.media}
        image={urlImg} alt={`Pokemon ${name}`}
        title={`Pokemon ${name}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">

            {/* Componente de estatítica que busca na API */}
          <Estatisticas nome_estatisticas={name} />
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

            {/* Componente que traz as abilidades de cada pokemon */}
            <Habilidades nome_pokemon_habilidades={name} />

        </CardContent>
      </Collapse>
    </Card>
  );
}

export default PokemonCard