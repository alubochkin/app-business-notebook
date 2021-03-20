const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const { sessionStore } = require('./config/dataBase');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 2,
    },
  }),
);

app.use('/auth', authRouter);


module.exports = app;
