import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PayAttentionBlock from './PayAttentionBlock';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  paperTop: {
    padding: 0,
    minHeight: 350
  },

  paperCard: {
    padding: theme.spacing(2),
  },
}));

export default function Infoblock() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paperTop}>

            <PayAttentionBlock />
            
            </Paper>
        </Grid>
      </Grid>
        
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paperCard}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paperCard}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paperCard}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paperCard}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}