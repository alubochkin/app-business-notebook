import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '2fr 2fr 1fr 1fr',
    borderBottom: '1px solid #cfcfcf',
  },
  header: {
    backgroundColor: theme.primary,
    color: '#FFFFFF'
  }
}));

export default function PayAttentionBlock() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem className={classes.listItem, classes.header}>
        <ListItemText primary="Задача" />
        <ListItemText primary="Лист задач" />
        <ListItemText primary="Дата"  />
        <ListItemText primary="Подробнее" />
      </ListItem>

      <ListItem className={classes.listItem}>
        <ListItemText secondary="Название Задачи" />
        <ListItemText secondary="Название листа задач" />
        <ListItemText secondary="July 20, 2014" />
        <ListItemText secondary="Link" />
      </ListItem>

      <ListItem className={classes.listItem}>
        <ListItemText secondary="Название Задачи" />
        <ListItemText secondary="Название листа задач" />
        <ListItemText secondary="July 20, 2014" />
        <ListItemText secondary="Link" />
      </ListItem>

    </List>
  );
}
