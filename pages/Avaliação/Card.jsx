import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(4,0,0,4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    textAlign: 'center',
  },
    root: {
    flexGrow: 0,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Avaliaçaõ() {
  const classes = useStyles();

  return (
    
    <Container component="main"align='center' className={classes.paper}>
      <div align="center">

    <Grid container spacing={2}>
        <Grid item xs={16} item sm={12} md={12}>
          <Paper className={classes.paper}>
        <Typography component="h2" variant="h6" align="center">
          Como você se sente hoje?
        </Typography>   
        <div className={classes.root}>
        <Fab color="secondary" aria-label="verydisatisfied">
        <SentimentVeryDissatisfiedIcon />
      </Fab>
      <Fab color="secondary" aria-label="disatisfied">
        <SentimentDissatisfiedIcon />
      </Fab> 
      <Fab  aria-label="Satisfied">
        <SentimentSatisfiedIcon />
      </Fab>
      <Fab color="primary" aria-label="SatisfiedAlt">
        <SentimentSatisfiedAltIcon />
      </Fab>
      <Fab color="primary" aria-label="VerySatisfied">
        <SentimentVerySatisfiedIcon />
      </Fab>
      </div>
        <Typography component="h2" variant="h6" align="center">
          Sentiu algum efeito colateral dos usos do medicamento?                  
        </Typography> 
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button>Sim</Button>
            <Button>Não</Button>
              </ButtonGroup>
              <Typography component="h2" variant="h6" align="center">
         Intensidade da dor                 
        </Typography> 
        <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>10</Button>
      </ButtonGroup>
    </div>
    <Typography component="h2" variant="h6" align="center">
         Nivel de estres               
        </Typography> 
        <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group" padding='auto'>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>10</Button>
      </ButtonGroup>
    </div>
    </Paper>
        </Grid>
        </Grid>

      </div>
    </Container>
  );
}