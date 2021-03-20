import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    // flexDirection: 'column',
    marginBottom: theme.spacing(5),
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Typography >Name</Typography>
    </div>
  );
}