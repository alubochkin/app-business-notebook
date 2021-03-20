import React from 'react';
import TextField from '@material-ui/core/TextField';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  wrapperList: {
    maxWidth: 900,
    display: 'flex',
    alignItems: 'center'
  },
  taskItem: {
    marginRight: 30,
    width: 'calc(70% - 30px)',
  },
  taskDate: {
    marginRight: 30,
    width: 'calc(30% - 30px)',
  },
  remove: {
    border: 'none',
    background: theme.secondary,
    padding: '5px',
    color: '#fff',
    cursor: 'pointer',
  }
}));

export default function ListTask({removeHandler, id}) {
  const classes = useStyles();



  return (
    <div id={id} className={classes.wrapperList}>
      <TextField className={classes.taskItem}
        name="task"
        id="outlined-disabled"
        label="Введите дело"
        variant="outlined"
      />

      <TextField
        name="date"
        id="date"
        label="Сделать до:"
        type="date"
        format="dd/MM/yyyy"
        defaultValue={new Date().toLocaleDateString().replace(/[.]/g, '-')}
        className={classes.taskDate}
        InputLabelProps={{
          shrink: true,
        }}
      />
       <button onClick={(event) => removeHandler(event, id)}
          className={classes.remove}>
            <DeleteForeverIcon />
        </button>
    </div>


  );
}
