import React, { createRef, Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { MemoryRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createListAC } from '../../../redux/actions/ListTaskActions';
import { Button, Typography } from '@material-ui/core';
import ListTask from './ListTask';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  titleElements: {
    maxWidth: 900,
    marginBottom: 50
  },
  addTask: {
    width: 'calc(30% - 30px)',
    marginRight: 30,
  },
  addTaskList: {
    width: 'max-content'
  },
  nameNotes: {
    width: 'calc(70% - 30px)',
    marginRight: 30,

  },
  titlePage: {
    marginBottom: 50
  },

  listTask: {
    marginBottom: 15
  },
  listTasks: {

  }
}));


export default function NewNotes() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { path } = useRouteMatch();

  //  { user } = useSelector(state => state.listTaskReducer);

  const [lists, setLists] = useState([])


  const removeHandler = (event, id) => {
    event.preventDefault();

    setLists((prev) => prev.filter(el => el.props.id !== id));

  }

  const addTaskHandler = () => {
    setLists((prev) => {
      return [...prev, 
              <ListTask 
                key={Math.random() * Math.random()} 
                id={Math.random() * Math.random()} 
                removeHandler={removeHandler}/>
            ]
    });

  }

  const createListHandler = (e) => {
    e.preventDefault();

    let taskData = {};
    let tasksList = [];

    if (!e.target.task) {
      console.log('not tasks')
      return;
    }

    const tasks = 
      e.target.task && e.target.task?.length >= 0 
      ? [...e.target.task] : [e.target.task];

    const dates = 
      e.target.date &&e.target.date?.length >= 0 
      ? [...e.target.date] : [e.target.date];


    tasks?.forEach((task, i) => {
      tasksList.push({
          task: task.value,
          date: dates[i].value
        })       
    })

    taskData = {
      listTasks: tasksList.filter(task => task.task !== ""), 
      nameList: e.target.nameList.value
    }
      
    taskData ? dispatch(createListAC(taskData)) : console.log('not save in store')
    
  }

  return (
    <Fragment>
      <Typography className={classes.titlePage}
        variant="h5" component="h2">  Создание листа задач </Typography>

      <form onSubmit={(e) => createListHandler(e)}
        className={classes.root} 
        noValidate autoComplete="off">
        <div className={classes.titleElements}>
          <TextField 
            name="nameList"
            autoFocus={true}
            color="primary" 
            className={classes.nameNotes} 
            id="standard-basic" label="Укажите название листа дел" />

          <Button 
            onClick={addTaskHandler}
            className={classes.addTask}
            variant="contained" color="primary">
            Добавить задачу
          </Button>
        </div>

          <div className={classes.listTasks}>
            {lists.length === 0 
            ? <h2>Пока нет запланированых дел</h2>
            : lists.map((list, i) => list ) }
          </div>

          <Button 
            className={classes.addTaskList}
            type="submit"
            variant="outlined" 
            color="secondary">
            Создать список дел
          </Button>
      </form>

    </Fragment>



  );
}
