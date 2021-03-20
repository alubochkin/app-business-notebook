import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 650,
    padding: '50px 30px 0 0',
    width: '100%',
    '& > *': {
      marginBottom: theme.spacing(2),
      width: '80%',
    },
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  signIn: {
    width: '80px',
    padding: '10px 80px'
  },
  signUp: {
    padding: '10px 80px'
  },
  title: {
    fontSize: 40,
    fontWeight: 'lighter',
    color: theme.secondary,
  },
  subTitle: {
    fontSize: 14,
    margin: '10px 0'
  }
}));

export default function AuthPage() {
  const classes = useStyles();
  const { url } = useRouteMatch();
  console.log('Koca: url ', url);

  return (

        <form 
          // onSubmit={signInHandler}
          className={classes.form} 
          validate autoComplete="off">
            
          <TextField id="outlined-basic" label="Ваша почта" variant="outlined" />
          <TextField id="outlined-basic" label="Ваш пароль" variant="outlined" />


            <Button 
              className={classes.signIn} 
              variant="outlined" 
              color="primary">Войти</Button>
          
        </form>
  );
}

