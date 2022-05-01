import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

// Componente BorderLinearProgress que vai ter as configurações de aparência modificadas para passar para o LinearProgress
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);


// Variável que será chamada dentro dentro do retorno para configurar o BorderLinearProgress com itens do tema da biblioteca
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

// ----------------------------------==--------------------------------
// Componente que será exportado e que recebe a o valor de cada estatística através da props valor_da_estatistica
const BarraDeProgresso = ({valor_da_estatistica}) => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(valor_da_estatistica)
  }, [valor_da_estatistica]);

  return (
    <div className={classes.root}>
      <BorderLinearProgress variant="determinate" value={progress} color='primary' />
    </div>
  );
}

export default BarraDeProgresso