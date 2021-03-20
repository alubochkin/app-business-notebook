import React, { Fragment } from 'react';
import { HashRouter, MemoryRouter as Router, Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import NewNotes from '../Pages/NewNotesList/NewNotes';
import InfoBlock from '../ContentBlock/InfoBlock';
import Error from '../Pages/Error';



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

export default function ContentBlock() {
  const classes = useStyles();
  const { path } = useRouteMatch();
  console.log('Content block >>>>>>: path ', path);


  return (
    <Fragment>

      <Route exact path={`${path}/`} > <InfoBlock /></Route>  
      <Route exact  path={`${path}/newNotes`} ><NewNotes /> </Route>    
      <Route path={`${path}/`} ><Redirect to="/office" /></Route>        

    </Fragment>


  );
}
