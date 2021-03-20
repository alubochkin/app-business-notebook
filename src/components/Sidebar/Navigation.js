import React from 'react';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  button: {
    color: theme.text,
    
    '&:before, &:after': {
      content: ' ',
      top: '1.3em',
      height: 8,
      position: 'absolute',
      transition: 'all 250ms cubic-bezier(0.4,0,0.2,1)',
    },
    '&:before': {
      left: '0.5rem',
      width: 8,
      borderRadius: '100%',
    },
    '&:after': {
      left: 0,
      top: '1.3em',
      height: 8,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      transform: 'translateX(-100%)',
    },
    '&:focus': {
      color: theme.primary,
      '&:before': {
        // background: '#8a4baf',
        transform: 'scale(1)',
      },
    },
  },


    
}));

export default function Navigation() {
  const { url } = useRouteMatch();

  const classes = useStyles();
  const [openCompl, setOpenCompl] = React.useState(false);
  const [openNotCompl, setOpenNotCompl] = React.useState(false);


  const completedHandleClick = () => {
    setOpenCompl(!openCompl);
  };

  const notCompletedHandleClick = () => {
    setOpenNotCompl(!openNotCompl);
  };

  return (
    
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      color="primary"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {/* Nested List Items */}
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem component={Link} to={`${url}`} button={true} className={classes.button}>
        <ListItemIcon>
          <ChangeHistoryIcon />
        </ListItemIcon>
        <ListItemText  primary="Главная" />
      </ListItem>

      <ListItem component={Link} to={`${url}/newNotes`}
        button className={classes.button}>
        <ListItemIcon>
          <BorderColorIcon />
        </ListItemIcon>
        <ListItemText  primary="Новый лист" />
      </ListItem>

      <ListItem button className={classes.button} onClick={notCompletedHandleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Дела в процессе" />
        {openNotCompl ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={openNotCompl} timeout={500} unmountOnExit>
        <List component="div" disablePadding>

          <ListItem button className={classes.nested}>
            <ListItemText primary="Список дел" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemText primary="Список дел" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemText primary="Список дел" />
          </ListItem>

        </List>
      </Collapse>

          {/* completedHandleClick */}
          <ListItem button className={classes.button} onClick={completedHandleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Выполненые дела" />
        {openCompl ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={openCompl} timeout={500} unmountOnExit>
        <List component="div" disablePadding>

        <ListItem button className={classes.nested}>
            <ListItemText primary="Список дел" />
        </ListItem>

        <ListItem button className={classes.nested}>
            <ListItemText primary="Список дел" />
        </ListItem>

        <ListItem button className={classes.nested}>
            <ListItemText primary="Список дел" />
        </ListItem>

        </List>
      </Collapse>
      {/* completedHandleClick end */}


    </List>
  );
}


