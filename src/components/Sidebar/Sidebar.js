import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Navigation from './Navigation';
import Avatar from './Avatar';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <Avatar />

      <Navigation />
      
    </div>
  )
}

export default Sidebar
