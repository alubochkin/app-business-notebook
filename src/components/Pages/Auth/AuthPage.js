import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

const useStyles = makeStyles((theme) => ({

  formWrap: {
    background: 'url(https://image.freepik.com/free-vector/project-management-goal-completion-list-questionnaire-survey-answering-business-organization-tool_335657-3289.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: '50%'
  },
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 200,

  },
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

export default function AuthPage() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.formWrap}>
      <Container className={classes.container} maxWidth='md'>

        <h2 className={classes.title}>Дела в порядке</h2>
        <p className={classes.subTitle}>
            Сервис для создания и контроля личных дел.
        </p>

          <TabPanel value={value} index={0}>
              <SignIn />
            </TabPanel>
            <TabPanel value={value} index={1}>
            <SignUp />
          </TabPanel>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary" >
            <Tab label="Вход" {...a11yProps(0)} />
            <Tab label="Регистрация" {...a11yProps(1)} />
          </Tabs>

      </Container>

    </div>
  );
}




// export default function ScrollableTabsButtonAuto() {
//   const classes = useStyles();


//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="default">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="scrollable"
//           scrollButtons="auto"
//           aria-label="scrollable auto tabs example"
//         >

//           <Tab label="Item Three" {...a11yProps(2)} />
//           <Tab label="Item Four" {...a11yProps(3)} />
//           <Tab label="Item Five" {...a11yProps(4)} />
//           <Tab label="Item Six" {...a11yProps(5)} />
//           <Tab label="Item Seven" {...a11yProps(6)} />
//         </Tabs>
//       </AppBar>
     
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Item Four
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         Item Five
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//         Item Six
//       </TabPanel>
//       <TabPanel value={value} index={6}>
//         Item Seven
//       </TabPanel>
//     </div>
//   );
// }
