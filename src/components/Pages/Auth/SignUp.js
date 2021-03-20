import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { signUpThunk } from '../../../redux/actions/autthActions';


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

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const signUpHandler = (e) => {
    e.preventDefault();

    console.log(e.target)
    const dataUser = {
      firstName: e.target.firstName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }

    dispatch(signUpThunk(dataUser));
  }


  return (

        <form 
          onSubmit={signUpHandler}
          className={classes.form} 
          validate autoComplete="off">
          <TextField id="outlined-basic" name="firstName" label="Ваше Имя" variant="outlined" />
          <TextField id="outlined-basic" name="email" label="Ваша почта" variant="outlined" />
          <TextField id="outlined-basic" name="password" label="Ваш пароль" variant="outlined" />

          <Button 
            type="submit"
            className={classes.signUp} 
            variant="outlined" 
            color="secondary">Регистрация
          </Button>

        </form>
  );
}
