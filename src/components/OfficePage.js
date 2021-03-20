import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Sidebar from './Sidebar/Sidebar';
import ContentBlock from './ContentBlock/ContentBlock';



const useStyles = makeStyles((theme) => ({
  grid: {
    flexGrow: 1,
    height: '100%'
  },
  paper: {
    padding: theme.spacing(4),
    color: theme.text,
    background: theme.paper,
    overflowY: 'auto',
    height: '100vh',
    boxShadow: 'none'
  },
  paperLeft: {
    padding: theme.spacing(1),
    color: theme.text,
    background: theme.paper,
    overflowY: 'auto',
    height: '100vh',
    boxShadow: 'none'
  }
}));

export default function CenteredGrid() {

  const classes = useStyles();

  return (
      <Grid className={classes.grid} container spacing={3}>
  
        <Grid item xl={2} lg={3} md={5} sm={5} xs={5}>
          <Paper className={classes.paperLeft}>
            <Sidebar />
          </Paper>
        </Grid>

        <Grid item xl={10} lg={9} md={7} sm={7} xs={7} >
          <Paper className={classes.paper}>

            <ContentBlock />

          </Paper>
        </Grid>

      </Grid>

  );
}

